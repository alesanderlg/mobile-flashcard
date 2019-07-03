import * as actionType from '../actions/index'

const initialState = {
    decks: []
}

export default function decks (state = initialState, action) {
    switch (action.type){
        case actionType.ADD_NEW_DECK:
            let newDeck = {...action.data}
            return{
                decks: [...state.decks, newDeck],
                deck: newDeck
            }
    }
    return state
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