import React, { type FC } from "react";
import "./_signUpBenifitsBlock.scss";
import {
  SignUpNotified,
  SignUpTestimonials,
  SignUpWatchWhales,
} from "src/Components/molecules";

const SignUp: FC = () => {
  return (
    <div className="signUpBenifitsBlock">
      <div className="signUpBenifitsBlockContent">
        <SignUpNotified />
        <SignUpWatchWhales />
        <SignUpTestimonials />
      </div>
      <div className="gradientBackground" />
    </div>
  );
};

export default SignUp;
