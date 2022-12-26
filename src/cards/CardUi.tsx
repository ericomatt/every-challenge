import React from "react";

interface ButtonProps {
    onClick?: () => void
    label?: string,
    disabled?: boolean
}

interface CardProps {
    onBackButtonProps?: ButtonProps,
    onContinueButtonProps?: ButtonProps,
    label?: string
}

export const CardUi = ({onBackButtonProps, label, onContinueButtonProps}: CardProps): JSX.Element => {

    return <div className={"card"} style={{
        display: 'flex',
        justifyContent: 'space-between',
        border: "1px solid black",
        padding: '0.4rem'
    }}>
        <button {...onBackButtonProps}>{onBackButtonProps?.label}</button>
        {label}
        <button {...onContinueButtonProps}>{onContinueButtonProps?.label}</button>
    </div>
}