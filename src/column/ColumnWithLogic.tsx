import {CardWithLogic} from "../cards/CardWithLogic";
import React from "react";
import {ColumnUi, Position, PositionArray} from "./ColumnUi";

export interface CardObject {
    id: number,
    label?: string,
    pos?: Position
}

interface ColumnWithLogicProps {
    cards: CardObject[],
    moveCard: (id: number, pos: number) => void
}

export const ColumnsWithLogic = ({cards, moveCard}: ColumnWithLogicProps) => {
    return <>{
        PositionArray.map((pos, idx) => {
            const filteredCardsByPos = cards.filter((card) => {
                return card.pos === pos
            })

            const handleClickForwards = (id: number, pos: number) => {
                moveCard(id, pos + 1)
            }

            const handleClickBackwards = (id: number, pos: number) => {
                moveCard(id, pos - 1)
            }

            return <ColumnUi key={idx}>
                {filteredCardsByPos.map((card, idx) => <CardWithLogic
                    key={idx}
                    position={pos}
                    label={card.label}
                    onClickForwards={() => handleClickForwards(card.id, pos)}
                    onClickBackwards={() => handleClickBackwards(card.id, pos)}
                />)}
            </ColumnUi>
        })
    }</>
}