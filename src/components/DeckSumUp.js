import React from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'

const DeckSumUp = ({ deck, navigation }) => {
    return (
        <TouchableOpacity
            style={styles.container}
            onPress={() =>
                navigation.navigate("DeckDetails", 
                    { 
                      id: deck.id, 
                      title: deck.title 
                    })
            }
        >
            <Text style={styles.title}>{deck.title}</Text>
            <Text style={styles.cards}>{`${deck.cards.length} cards`}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      backgroundColor: '#FFFFFF',
      minHeight: 150,
      marginBottom: 10,
      padding: 20,
      borderRadius: 5,
      borderWidth: 1,
      borderColor: '#DCDCDD',
      elevation: 24,
      width: 350,
    },
    title: {
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 5
    },
    count: {
      fontSize: 20,
      textAlign: "center",
      color: '#DCDCDD',
      marginBottom: 5
    },
    cards: {
        fontSize: 20,
        textAlign: "center",
        marginBottom: 5
      },
  });

export default DeckSumUp