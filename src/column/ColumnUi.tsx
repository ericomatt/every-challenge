import React from "react";

interface ColumnProps {
    children?: JSX.Element[]
}

export const ColumnUi = ({children}: ColumnProps): JSX.Element => {
    return <div className="column"
                style={{display: "inline-block", width: '30%', border: "1px solid black", padding: '0.2rem'}}>
        {children}
    </div>
}
export const PositionArray = [0, 1, 2]

export enum Position {
    Todo,
    Doing,
    Done
}

