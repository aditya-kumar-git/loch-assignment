import "./_buttonBox.scss";
import React, { type FC } from "react";
import { type ButtonBoxProps } from "./ButtonBox.type";

const ButtonBox: FC<ButtonBoxProps> = ({ title, onClick, className }) => {
  return (
    <button onClick={onClick} className={`buttonBox ${className}`}>
      {title}
    </button>
  );
};

export default ButtonBox;
