import "./_notificationCardTwo.scss";
import React, { type FC } from "react";
import { type NotificationCardTwoProps } from "./NotificationCardTwo.type";
import { CheckmarkIcon, DownArrowIcon, GraphIcon } from "src/Assets/Icons";

const NotificationCardTwo: FC<NotificationCardTwoProps> = ({ className }) => {
  return (
    <div className={`notificationCardTwo ${className}`}>
      <div className="notificationCTHeader">
        <img src={GraphIcon} alt="GraphIcon" className="notificationCTHIcon" />
        <img
          src={CheckmarkIcon}
          alt="CheckmarkIcon"
          className="notificationCTHSmallIcon"
        />
      </div>
      <div className="notificationCTBottom">
        <div className="notificationCTTitle">
          Notify me when any wallets move more than
        </div>
        <div className="notificationCTAmount">
          <div>$1,000.00</div>
          <img
            src={DownArrowIcon}
            alt="DownArrowIcon"
            className="notificationCTHSmallIcon"
          />
        </div>
      </div>
    </div>
  );
};

export default NotificationCardTwo;
