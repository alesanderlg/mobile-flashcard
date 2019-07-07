import React from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'

const DeckDetails = ({deck, navigation}) =>{
    return (
        <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>{deck.title}</Text>
          <Text style={styles.cards}>{`${deck.cards.length} cards`}</Text>
        </View>
        <View style={styles.buttons}>
            <TouchableOpacity style={styles.buttonAddCard}
              onPress={() => {
                navigation.navigate('NewCard', { deckId: deck.id })
              }}
            >
              <Text style={styles.labelButton}> Add Card </Text>
            </TouchableOpacity>
            <TouchableOpacity style={deck.cards.length < 1 ? styles.buttonStartQuizDisabled : styles.buttonStartQuizEnabled}
              onPress={() => {
                navigation.navigate('QuizScreen', { deck })
              }}
              disabled={deck.cards.length < 1}
            >
              <Text style={styles.labelButton}> Start Quiz </Text>
            </TouchableOpacity>
        </View>
      </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    title: {
      fontSize: 30,
      fontWeight: 'bold',
      textAlign: 'center',
      padding: 10,
      marginBottom: 5
    },
    cards: {
      fontSize: 20,
      textAlign: 'center',
      marginBottom: 5
    },
    buttons: {
      marginTop: 20
    },
    buttonAddCard: {
      borderRadius: 5,
      backgroundColor: '#4799FC',
      margin: 10,
      padding: 15,
      width: 300
    },
    buttonStartQuizEnabled: {
      borderRadius: 5,
      margin: 10,
      padding: 15,
      width: 300,
      backgroundColor: '#58A690',
    },
    buttonStartQuizDisabled: {
      borderRadius: 5,
      margin: 10,
      padding: 15,
      width: 300,
      backgroundColor: '#DCDCDD',
    },
    labelButton:{
      textAlign: 'center',
      fontSize: 18,
      fontWeight: 'bold',
      color: '#FFFFFF'
    },
  })

export default DeckDetails