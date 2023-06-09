import "./_signUpInput.scss";
import React, { useState, type FC } from "react";
import { ButtonBox, InputBox } from "src/Components/atom";

const SignUpInput: FC = () => {
  const [inputValue, setInputValue] = useState("");
  const [isInputError, setIsInputError] = useState(false);

  const onInputValueChange = (text: string) => {
    setIsInputError(false);
    setInputValue(text);
  };
  const onEmailSubmit = () => {
    if (validateEmail(inputValue)) {
      window.open("https://app.loch.one/welcome", "_blank");
    } else {
      setIsInputError(true);
    }
  };
  const validateEmail = (email: string) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  return (
    <div className="signUpInput">
      <div className="signUpInputBlockMargin">
        <InputBox
          inputType="email"
          placeholder="Your email address"
          errorMessage="Please enter a valid email"
          onChangeText={onInputValueChange}
          isInputError={isInputError}
          onSubmit={onEmailSubmit}
          value={inputValue}
        />
      </div>
      <div className="signUpInputBlockMargin">
        <ButtonBox onClick={onEmailSubmit} title="Get started" />
      </div>
    </div>
  );
};

export default SignUpInput;
