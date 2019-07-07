import { AsyncStorage } from 'react-native'

export const KEY = 'storage_key:flashcard'

export async function saveDeck (deck) {
  try {
    await AsyncStorage.mergeItem(KEY, JSON.stringify({ [deck.id]: deck }))
    return deck
  }
  catch (err) {
    return console.log(err)
  }
}

export const saveCard = async (deckId, card) => {
  const results = await AsyncStorage.getItem(KEY);
  const data = JSON.parse(results);
  
  data[deckId] = {
    ...data[deckId],
    cards: [
      ...data[deckId].cards,
      { question: card.question, answer: card.answer }
    ]
  }
  AsyncStorage.setItem(KEY, JSON.stringify(data));
}

export const getDecks = async () => {
  const results = await AsyncStorage.getItem(KEY)
  const data = JSON.parse(results)
  return data
}

export const removeAllDecks = async () =>{
  await AsyncStorage.getAllKeys().then(AsyncStorage.multiRemove)
}