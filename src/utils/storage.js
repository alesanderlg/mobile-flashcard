import { AsyncStorage } from 'react-native'

export const KEY = 'storage_key:flashcard'

export async function saveDeck (deck) {
  console.log("deck", deck)
  const newDeck = deck
  try {
    await AsyncStorage.mergeItem(KEY, JSON.stringify({ [deck.deckId]: deck }));
    return newDeck;
  }
  catch (err) {
    return console.log(err);
  }
}

export async function saveCard (deckId, card) {
  try {
    const stringDecks = await AsyncStorage.getItem(KEY);
    let decks = JSON.parse(stringDecks);
    let deckKeys = Object.keys(decks);
    deckKeys.forEach(deckKey => {
      let deck = decks[deckKey];
      if (deck.deckId === deckId)
        deck.cards = [...deck.cards, card];
    })
    let stringUpdatedDecks = JSON.stringify(decks);
    AsyncStorage.setItem(KEY, stringUpdatedDecks)
                .catch(err => console.log(err));
    return Object.values(decks);
  }
  catch (err_1) {
    return console.log(err_1);
  }
}