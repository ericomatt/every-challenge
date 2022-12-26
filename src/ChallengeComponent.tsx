import React, {useMemo, useState} from 'react'
import {CardObject, ColumnsWithLogic} from "./column/ColumnWithLogic";

export function ChallengeComponent() {

    const [cards, setCards] = useState<CardObject[]>([{id: 1, label: 'card1', pos: 0}, {id: 2, label: 'card2', pos: 2}])
    const [inputValue, setInputValue] = useState<string>()

    const planMoveCard = (id: number, newPos: number): CardObject[] => {
        const selectedCard = cards.find((card) => card.id === id)
        const restCard = cards.filter((card) => card.id !== id)

        if (!selectedCard)
            return cards

        const newSelectedCard = {...selectedCard, pos: newPos}
        return [...restCard, newSelectedCard]
    }

    const applyMoveCards = (id: number, newPos: number) => {
        setCards(planMoveCard(id, newPos))
    }

    const planAddCard = (id: number, pos: number, label?: string) => {
        const newCard: CardObject = {id, label, pos}
        return [...cards, newCard]
    }

    const applyAddCard = (id: number, label?: string, pos = 0) => {
        setCards(planAddCard(id, pos, label))
    };

    const handleAddCard = () => {
        applyAddCard(cards.length + 1, inputValue)
    }


    const Columns = useMemo(() => <ColumnsWithLogic cards={cards}
                                                    moveCard={applyMoveCards}/>, [cards.map((card) => card.pos)])

    return (
        <>
            <div className={'table'}
                 style={{
                     backgroundColor: 'light-blue', padding: '0.7rem',
                     margin: 'auto', display: 'flex', justifyContent: 'space-around'
                 }}>
                {Columns}

            </div>
            <div className={'form'} style={{display: 'flex', justifyContent: 'center', padding: '1rem'}}>
                <input type="text" value={inputValue} onChange={(e) => setInputValue(e?.target?.value)}/>
                <button onClick={handleAddCard}>add card</button>
            </div>
        </>
    )
}
