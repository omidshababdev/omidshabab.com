import { Volume2Icon, VolumeIcon, VolumeXIcon } from "lucide-react";

const VideoMuteButton = ({
     isMuted,
     onClick
}: {
     isMuted?: boolean | false
     onClick?: () => void
}) => {
     return (
          <div
               onClick={onClick}
               className="p-[10px] bg-primary/5 hover:bg-primary/10 transition-all duration-500 rounded-full text-primary border-[2px] border-primary/20">
               {isMuted ?
                    <Volume2Icon className="w-[20px] h-[20px]" /> :
                    <VolumeXIcon className="w-[20px] h-[20px]" />
               }
          </div>
     );
}

export default VideoMuteButton;