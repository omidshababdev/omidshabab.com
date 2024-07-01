"use client"

import React, { useState } from "react"
import {
     EditorRoot,
     EditorCommand,
     EditorCommandItem,
     EditorCommandEmpty,
     EditorContent,
     type JSONContent,
     EditorCommandList,
     EditorBubble,
} from "novel"
import { ImageResizer, handleCommandNavigation } from "novel/extensions"
import { defaultExtensions } from "./Extensions"
import { NodeSelector } from "./selectors/NodeSelector"
import { LinkSelector } from "./selectors/LinkSelector"

import { TextButtons } from "./selectors/TextButtons"
import { slashCommand, suggestionItems } from "./SlashCommand"
import { handleImageDrop, handleImagePaste } from "novel/plugins"
import { uploadFn } from "./ImageUpload"

const extensions = [...defaultExtensions, slashCommand]

interface EditorProp {
     initialValue?: JSONContent;
     onChange: (value: JSONContent) => void;
}

const Editor = ({ initialValue, onChange }: EditorProp) => {
     const [openNode, setOpenNode] = useState(false);
     const [openLink, setOpenLink] = useState(false);

     return (
          <EditorRoot>
               <EditorContent
                    {...(initialValue && { initialContent: initialValue })}
                    extensions={extensions}
                    editorProps={{
                         handleDOMEvents: {
                              keydown: (_view, event) => handleCommandNavigation(event),
                         },
                         handlePaste: (view, event) => handleImagePaste(view, event, uploadFn),
                         handleDrop: (view, event, _slice, moved) =>
                              handleImageDrop(view, event, moved, uploadFn),
                         attributes: {
                              class: `prose prose-lg dark:prose-invert prose-headings:font-title font-default focus:outline-none max-w-full cursor-text`,
                         },
                    }}
                    onUpdate={({ editor }) => {
                         onChange(editor.getJSON());
                    }}
                    slotAfter={<ImageResizer />}>
                    <EditorCommand className="z-50 none-scroll-bar w-[160px] h-auto max-h-[300px] overflow-y-auto rounded-[15px] bg-primary/10 backdrop-blur-3xl border-[1px] border-primary/20 px-[5px] py-[5px] transition-all">
                         <EditorCommandEmpty className="px-[20px] text-text">
                              No results
                         </EditorCommandEmpty>
                         <EditorCommandList>
                              {suggestionItems.map((item) => (
                                   <EditorCommandItem
                                        value={item.title}
                                        onCommand={(val) => item.command?.(val)}
                                        className={`flex w-full items-center gap-x-[10px] rounded-[10px] px-[10px] py-[8px] hover:bg-primary/10 aria-selected:bg-primary/10 cursor-pointer`}
                                        key={item.title}>
                                        <div>
                                             {item.icon}
                                        </div>
                                        <p className="font-medium text-[15px]">
                                             {item.title}
                                        </p>
                                   </EditorCommandItem>
                              ))}
                         </EditorCommandList>
                    </EditorCommand>

                    <EditorBubble
                         tippyOptions={{
                              placement: "top",
                         }}
                         className="flex w-fit max-w-[90vw] h-full overflow-hidden rounded-[10px] bg-primary/20 backdrop-blur-3xl border-[1px] border-primary/20">

                         <NodeSelector open={openNode} onOpenChange={setOpenNode} />

                         <LinkSelector open={openLink} onOpenChange={setOpenLink} />

                         <TextButtons />

                    </EditorBubble>
               </EditorContent>
          </EditorRoot>
     );
};

export default Editor;