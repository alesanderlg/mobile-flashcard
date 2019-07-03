import * as storage from '../../utils/storage';
import * as actionType from './index'

const addNewDeck = ({ data }) => {
    return {
        type: actionType.ADD_NEW_DECK,
        data: data,
    }
}

export const saveDeck = (deck) =>{
    return async (dispatch) =>{
        const data = await storage.saveDeck(deck)
        dispatch(addNewDeck(data))
    }
}


