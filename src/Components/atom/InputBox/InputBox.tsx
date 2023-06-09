import "./_inputBox.scss";
import React, { type FC } from "react";
import { type InputBoxProps } from "./InputBox.type";

const InputBox: FC<InputBoxProps> = ({
  value,
  className,
  inputType,
  placeholder,
  isInputError,
  errorMessage,
  onChangeText,
  onSubmit,
}) => {
  const onChange = (textChange: React.ChangeEvent<HTMLInputElement>) => {
    onChangeText(textChange.target.value);
  };
  const onKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.code === "Enter" && onSubmit) {
      onSubmit();
    }
  };
  return (
    <div className="inputBoxContainer">
      <input
        value={value}
        type={inputType}
        placeholder={placeholder}
        className={`inputBox ${className} ${
          isInputError ? "inputBoxError" : ""
        }`}
        onKeyDown={onKeyPress}
        onChange={onChange}
      />
      {isInputError ? (
        <div className="inputErrorMessage">{errorMessage}</div>
      ) : null}
    </div>
  );
};

export default InputBox;
