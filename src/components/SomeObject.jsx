import React from "react";

const SomeObject = ({ text, className, children }) => {
    return (
        <div className={className}>
            {text}
            {children}
        </div>
    );
};

export default SomeObject;
