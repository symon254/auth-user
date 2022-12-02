import React from "react";
// import { BsInfoCircleFill, BsExclamationTriangleFill } from "react-icons/bs";
// import { AiFillCheckCircle } from "react-icons/ai";
// import { MdDangerous } from "react-icons/md";

const alertClass = {
    primary: "alert-primary",
    secondary: "alert-secondary",
    success: "alert-success",
    danger: "alert-danger",
    info: "alert-info",
    warning: "alert-warning",
    light: "alert-light",
    dark: "alert-dark",
};
export const Alert = ({ className, label, alert, alertType, icons }) => {
    let classes = [];

    const alerts = [alertClass[alert]];

    if (alertType === "plain") {
        classes.push(...alerts);
    }

    classes = classes.join(" ");

    return (
        <>
            <div className={`alert ${classes} ${className} `} role="alert">
                {icons} {label}
            </div>
        </>
    );
};
