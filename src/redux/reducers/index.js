import * as actionType from '../actions'

export default function entries (state = {}, action) {
    switch (action.type){
        case actionType.ADD_NEW_DECK:
            console.log("ADD_NEW_DECK state", state)
            console.log("ADD_NEW_DECK action", action)
            return {
                ...state,
                ...action.deck,
            }
        case actionType.RECEIVE_DECKS:
            return {
                ...state,
                ...action.decks
            };
        default: 
            return state
    }
}

function allDecks  (state = initalAppState, action) {
    switch (action.type){
        case ADD_NEW_DECK:
        let newDeck = {...action.deckObject}
         return{
             decks: [...state.decks, newDeck],
             singleDeck: newDeck
        }
        case ADD_NEW_CARD:
        let editedSingleDeck = action.decks.filter(deck => deck.deckId === action.deckId)
         return{
            decks: action.decks,
            singleDeck: editedSingleDeck[0]
        }
        case GET_ALL_DECKS:
        let decks = undefined
        if (action.decks === undefined) {
            setStarterDecks(startingDeck)
            decks = [startingDeck]   
        }
        else if(action.decks.length > 0) {
            decks = action.decks
        }
         return{
             decks: decks,
             singleDeck: state.singleDeck
        }
        case GET_SINGLE_DECK:
        let singleDeck = state.decks.filter(deck => deck.deckId === action.deckId)
         return{
             decks: state.decks,
             singleDeck: singleDeck[0]
        }
        default :
            return state
    } 
}