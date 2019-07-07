export const ADD_NEW_DECK = 'ADD_NEW_DECK'
export const ADD_NEW_CARD = 'ADD_NEW_CARD'
export const RECEIVE_DECKS = 'RECEIVE_DECKS'

export const addNewDeck = (deck) => {
    return {
        type: ADD_NEW_DECK,
        deck
    }
}

export const receiveDecks = (decks) => {
    return {
        type: RECEIVE_DECKS,
        decks
    }
}

export const addNewCard = (deckId, card) => {
    return {
        type: ADD_NEW_CARD,
        deckId,
        card
    }
}











