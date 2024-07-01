import React from "react";
import GithubIcon from "@/components/icons/github";
import IconButton from "@/components/buttons/icon-button";


const GithubButton = ({
     disabled,
     onClick,
}: {
     disabled?: boolean,
     onClick?: React.MouseEventHandler<HTMLButtonElement>
}) => {

     return (
          <div className="aspect-square">
               <IconButton
                    onClick={() => onClick}
                    animateOnHover
                    disabled={disabled}>
                    <GithubIcon className="h-7 sm:h-9 aspect-square text-orange-600" />
               </IconButton>
          </div>
     );
}

export default GithubButton;