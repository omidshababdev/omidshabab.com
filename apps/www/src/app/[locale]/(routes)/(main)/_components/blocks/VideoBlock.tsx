"use client"

import { PauseIcon, PlayIcon } from "lucide-react";
import Block from "../Block";
import { useState } from "react";
import VideoPlayButton from "../buttons/VideoPlayButton";
import VideoMuteButton from "../buttons/VideoMuteButton";

const VideoBlock = () => {
     const [isPlaying, setIsPlaying] = useState<boolean>(false)
     const [isMuted, setIsMuted] = useState<boolean>(false)

     const handlePlaying = () => {
          setIsPlaying(!isPlaying)
     }

     const handleVolume = () => {
          setIsMuted(!isMuted)
     }

     return (
          <Block
               onClick={() => handlePlaying()}
               card="group/video md:col-span-5 row-span-4 flex aspect-video sm:aspect-auto justify-end items-end"
               content="px-[10px] py-[10px]">
               <div className="flex gap-x-[8px]">
                    {/* <VideoMuteButton onClick={() => handleVolume()} isMuted={isMuted} /> */}
                    <VideoPlayButton isPlaying={isPlaying} />
               </div>
          </Block>
     );
}

export default VideoBlock;