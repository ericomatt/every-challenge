import {CardUi} from "./CardUi";
import React from "react";
import {Position} from "../column/ColumnUi";

interface CardWithLogicProps {
    position: Position,
    label?: string,
    onClickForwards?: () => void,
    onClickBackwards?: () => void
}

export const CardWithLogic = ({position, label, onClickForwards, onClickBackwards}: CardWithLogicProps): JSX.Element => {
    const moveForwardsUseCase = (position: Position) => {
        const canMove = !!Position[position + 1]
        return {canMove}
    }

    const moveBackwardsUseCase = (position: Position) => {
        const canMove = !!Position[position - 1]
        return {canMove}
    }

    const {canMove: canMoveForwards} = moveForwardsUseCase(position)
    const {canMove: canMoveBackwards} = moveBackwardsUseCase(position)

    return <CardUi label={label}
                   onBackButtonProps={{label: '<-', disabled: !canMoveBackwards, onClick: onClickBackwards}}
                   onContinueButtonProps={{label: "->", disabled: !canMoveForwards, onClick: onClickForwards}}
    />

}

