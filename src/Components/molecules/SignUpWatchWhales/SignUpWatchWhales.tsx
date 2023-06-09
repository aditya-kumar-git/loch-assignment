import "./_signUpWatchWhales.scss";
import React, { type FC } from "react";
import { WhiteEyeIcon } from "src/Assets/Icons";
import { WatchingWhalesImage } from "src/Assets/Images";

const SignUpWatchWhales: FC = () => {
  return (
    <div className="signUpWatchWhales">
      <div className="signUpWWImageContainer">
        <img
          alt="WatchWhales"
          src={WatchingWhalesImage}
          className="signUpWWImage"
        />
      </div>
      <div className="signUpWWContent">
        <img src={WhiteEyeIcon} className="signUpWWCIcon" alt="WhiteEyeIcon" />
        <div className="signUpWWCHeading">Watch what the whales are doing</div>
        <div className="signUpWWCDesc">
          All whales are not equal. Know exactly what the whales impacting YOUR
          portfolio are doing.
        </div>
      </div>
    </div>
  );
};

export default SignUpWatchWhales;
