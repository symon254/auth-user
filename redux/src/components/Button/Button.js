import React from "react";

const buttonOutline = {
  primary: "btn btn-outline-primary",
  secondary: "btn btn-outline-secondary",
  success: "btn btn-outline-success",
  danger: "btn btn-outline-danger",
  info: "btn btn-outline-info",
  warning: "btn btn-outline-warning",
};

const buttonFilled = {
  primary: "btn btn-primary",
  secondary: "btn btn-secondary",
  success: "btn btn-success",
  danger: "btn btn-danger",
  info: "btn btn-info",
  warning: "btn btn-warning",
};

export const Button = ({
  className,
  children,
  type,
  button,
  buttonType,
  ...rest
}) => {
  let classes = [];

  const btnOutline = [buttonOutline[button]];
  const btnFilled = [buttonFilled[button]];

  if (buttonType === "outline") {
    classes.push(...btnOutline);
  } else if (buttonType === "filled") {
    classes.push(...btnFilled);
  }

  classes = classes.join(" ");

  return (
    <div className="col-3">
      <button {...rest} type={type} className={`btn ${classes} ${className}`}>
        {children}
      </button>
    </div>
  );
};
