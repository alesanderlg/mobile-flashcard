import React from 'react'
import DeckSumUp from '../components/DeckSumUp'
import {
    StyleSheet,
    View,
    Text,
    FlatList,
    TouchableOpacity
  } from 'react-native'


const Decks = ({decks, navigation}) =>{
    return(
        <View style={styles.container}>
        <FlatList
          data={Object.values(decks)}
          renderItem={({ item }) => (
            <DeckSumUp
              deck={item}
              navigation={navigation}
            />
          )}
          keyExtractor={(item, index) => item.title}
        />
        </View>
    )
}

const styles = StyleSheet.create({
    container: { 
      flex: 1, 
      justifyContent: 'center', 
      alignItems: 'center' 
    },
    buttonCreateDeck: {
      borderRadius: 5,
      backgroundColor: '#4799FC',
      margin: 10,
      padding: 15,
      width: 300
    },
    labelButton:{
      textAlign: 'center',
      fontSize: 18,
      fontWeight: 'bold',
      color: '#FFFFFF'
    },
    message: {
      fontWeight: 'bold',
      textAlign: 'center',
      fontSize: 24,
      fontWeight: 'bold',
      marginTop: 111, 
      marginBottom: 45
    },
    blank: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center'
    }
})

export default Decks