import "./_notificationCardThree.scss";
import React, { type FC } from "react";
import { type NotificationCardThreeProps } from "./NotificationCardThree.type";
import { CheckmarkIcon, ClockIcon, DownArrowIcon } from "src/Assets/Icons";

const NotificationCardThree: FC<NotificationCardThreeProps> = ({
  className,
}) => {
  return (
    <div className={`notificationCardThree ${className}`}>
      <div className="notificationCThHeader">
        <img
          src={ClockIcon}
          alt="LightBlueBellIcon"
          className="notificationCThHIcon"
        />
        <img
          src={CheckmarkIcon}
          alt="LightBlueBellIcon"
          className="notificationCThHSmallIcon"
        />
      </div>
      <div className="notificationCThTitle">
        Notify me when any wallet dormant for
      </div>
      <div className="notificationCThAmount">
        <div>{`> 30 days`}</div>
        <img
          src={DownArrowIcon}
          alt="DownArrowIcon"
          className="notificationCThHSmallIcon"
        />
      </div>
      <div className="notificationCThTitle">becomes active</div>
    </div>
  );
};

export default NotificationCardThree;
