import React from "react";

const Button = ({
  isDisabled,
  btnType,
  containerStyle,
  title,
  rightIcon,
  handleClick,
}) => {
  return (
    <button
      disabled={isDisabled ?? false}
      type={btnType || "button"}
      className={`custom-btn ${containerStyle}`}
      onClick={handleClick}
    >
      <span className="flex-1">{title}</span>
      {rightIcon && <div className="h-6 w-6">{rightIcon}</div>}
    </button>
  );
};

export default Button;
