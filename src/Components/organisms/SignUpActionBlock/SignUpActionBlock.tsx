import "./_signUpActionBlock.scss";
import React, { type FC } from "react";
import { SignUpInput } from "src/Components/molecules";

const SignUp: FC = () => {
  return (
    <div className="signUpActionBlock">
      <div className="signUpABData">
        <div className="signUpABDataHeading">Sign up for exclusive access.</div>
        <SignUpInput />
        <div className="signUpABDataDesc">
          You'll receive an email with an invite link to join.
        </div>
      </div>
    </div>
  );
};

export default SignUp;
