import React, { type FC } from "react";
import "./_signUp.scss";
import {
  SignUpActionBlock,
  SignUpBenifitsBlock,
} from "src/Components/organisms";

const SignUp: FC = () => {
  return (
    <div className="signUpPage">
      <SignUpBenifitsBlock />
      <SignUpActionBlock />
    </div>
  );
};

export default SignUp;
