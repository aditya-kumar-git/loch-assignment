import "./_signUpNotified.scss";
import React, { type FC } from "react";
import { WhiteBellIcon } from "src/Assets/Icons";
import {
  NotificationCardOne,
  NotificationCardThree,
  NotificationCardTwo,
} from "src/Components/atom";

const SignUpNotified: FC = () => {
  return (
    <div className="signUpNotified">
      <div className="signUpNContent">
        <img src={WhiteBellIcon} className="signUpNCIcon" alt="WhiteBellIcon" />
        <div className="signUpNCHeading">
          Get notified when a highly correlated whale makes a move
        </div>
        <div className="signUpNCDesc">
          Find out when a certain whale moves more than any preset amount
          on-chain or when a dormant whale you care about becomes active.
        </div>
      </div>
      <div className="signUpNCardSlider">
        <div className="signUpNCardSliderTrackerThirdDecoy">
          <div className="signUpNCardContainer">
            <NotificationCardTwo className="signUpNCard" />
          </div>
          <div className="signUpNCardContainer">
            <NotificationCardOne className="signUpNCard" />
          </div>
        </div>
        <div className="signUpNCardSliderTrackerSecondDecoy">
          <div className="signUpNCardContainer">
            <NotificationCardThree className="signUpNCard" />
          </div>
          <div className="signUpNCardContainer">
            <NotificationCardTwo className="signUpNCard" />
          </div>
        </div>
        <div className="signUpNCardSliderTrackerDecoy">
          <div className="signUpNCardContainer">
            <NotificationCardOne className="signUpNCard" />
          </div>
          <div className="signUpNCardContainer">
            <NotificationCardThree className="signUpNCard" />
          </div>
        </div>
        <div className="signUpNCardSliderTracker">
          <div className="signUpNCardContainer">
            <NotificationCardTwo className="signUpNCard" />
          </div>
          <div className="signUpNCardContainer">
            <NotificationCardOne className="signUpNCard" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpNotified;
