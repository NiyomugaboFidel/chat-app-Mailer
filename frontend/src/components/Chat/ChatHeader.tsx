import React from "react";
import Avatar from "../Avatar";
import { InfoSVG, NotifySvg, VideoSvg } from "../../assets/data";

const ChatHeader: React.FC = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex gap-2 justify-center items-center">
        <Avatar />
        <div className="flex items-start justify-center flex-col">
          <h4 className="text-bodyDefault text-black font-semibold">
            John Doe
          </h4>
          <p className="text-bodySmall text-primary">Online</p>
        </div>
      </div>
      <div className="flex justify-center items-center gap-2">
        <span className="flex items-center justify-center ">
            <VideoSvg />
        </span>
        <span>
            <InfoSVG />
        </span>
        <span>
            <NotifySvg />
        </span>
      </div>
    </div>
  );
};

export default ChatHeader;
