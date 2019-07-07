export const ADD_NEW_DECK = 'ADD_NEW_DECK'
export const ADD_NEW_CARD = 'ADD_NEW_CARD'
export const RECEIVE_DECKS = 'RECEIVE_DECKS'
export const GET_DECK = 'GET_DECK'

import * as storage from '../../utils/storage';

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

export const saveDeck = (deck) =>{
    return async (dispatch) =>{
        const data = await storage.saveDeck(deck)
        dispatch(addNewDeck(data))
    }
}

export const getDecks = () =>{
    return async (dispatch) =>{
        const decks = await storage.getDecks()
        console.log("getDecks", decks)
        dispatch(receiveDecks(decks))
    }
}











