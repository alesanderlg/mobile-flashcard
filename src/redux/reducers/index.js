import * as actionType from '../actions'

export default function entries (state = {}, action) {
    switch (action.type){
        case actionType.ADD_NEW_DECK:
            return {
                ...state,
                ...action.deck,
            }
        case actionType.RECEIVE_DECKS:
            return {
                ...state,
                ...action.decks
            };
        case actionType.ADD_NEW_CARD: {
            return {
                ...state,
                [action.deckId]: {
                ...state[action.deckId],
                cards: [
                    ...state[action.deckId].cards,
                    { question: action.question, answer: action.answer }
                    ]
                }
                }
            }
        default: 
            return state
    }
}