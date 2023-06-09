import "./_notificationCardOne.scss";
import React, { type FC } from "react";
import { type NotificationCardOneProps } from "./NotificationCardOne.type";
import { LightBlueBellIcon } from "src/Assets/Icons";

const NotificationCardOne: FC<NotificationCardOneProps> = ({ className }) => {
  return (
    <div className={`notificationCardOne ${className}`}>
      <div className="notificationCOHeader">
        <img
          src={LightBlueBellIcon}
          alt="LightBlueBellIcon"
          className="notificationCOHLogo"
        />
        <div className="notificationCOHSave">Save</div>
      </div>
      <div className="notificationCOBottom">
        <div className="notificationCOTitle">
          We`ll be sending notifications to you here
        </div>
        <div className="notificationCOEmail">hello@loch.one</div>
      </div>
    </div>
  );
};

export default NotificationCardOne;
