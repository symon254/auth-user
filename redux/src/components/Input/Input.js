import React from "react";
import "../../Assets/styles.css";

export const Input = ({
    id,
    labelName,
    className,
    LableClassName,
    ...rest
}) => {
    return (
        <>
            <label
                htmlFor={id}
                className={`${LableClassName} input-group mb-3`}
            >
                {labelName}
                <input
                    {...rest}
                    id={id}
                    className={`${className} form-control`}
                />
                ;
            </label>
        </>
    );
};

export const Select = ({ ariaLabel, className, ...rest }) => {
    const Names = [
        { value: "simon", label: "simon" },
        { value: "Effie", label: "Effie" },
        { value: "Sydo", label: "Sydo" },
        { value: "Peter", label: "Peter" },
        { value: "Elveen", label: "Elveen" },
        { value: "Joy", label: "Joy" },
    ];

    return (
        <select
            {...rest}
            className={`form-select ${className}`}
            aria-label={ariaLabel}
        >
            {Names.map(({ index, label }) => (
                <option key={index}>{label}</option>
            ))}
        </select>
    );
};
export const RadioButton = ({
    className,
    nameCheck,
    id,
    LableClassName,
    label,
    ...rest
}) => {
    return (
        <>
            <div className="form-check">
                <input
                    {...rest}
                    className={`form-check-input ${className}`}
                    type="radio"
                    name={nameCheck}
                    id={id}
                />
                <label
                    className={`form-check-label ${LableClassName}`}
                    htmlFor={id}
                >
                    {label}
                </label>
            </div>
        </>
    );
};
export const Checkbox = ({ className, id, label, LableClassName, ...rest }) => {
    return (
        <>
            <div className="form-check">
                <label
                    className={`form-check-label ${LableClassName}`}
                    htmlFor={id}
                >
                    {label}
                    <input
                        {...rest}
                        className={`form-check-input ${className}`}
                        type="checkbox"
                        defaultValue
                        id={id}
                    />
                </label>
            </div>
        </>
    );
};
export const Toggle = ({ className, id, label, labelClassName, ...rest }) => {
    return (
        <div className="form-check form-switch">
            <input
                {...rest}
                className={`form-check-input  ${className}`}
                type="checkbox"
                role="switch"
                id={id}
            />
            <label
                className={`form-check-label ${labelClassName}`}
                htmlFor={id}
            >
                {label}
            </label>
        </div>
    );
};
