import React, { Component } from "react"
import { connect } from "react-redux"
import { Text, View, TouchableOpacity, StyleSheet } from "react-native"
import { Button } from 'react-native-elements'

class DeckDetailsScreen extends Component {

  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('title'),
    };
  }
    
  render() {
    const { navigation, deck } = this.props
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>{deck.title}</Text>
          <Text style={styles.cards}>{`${deck.cards.length} cards`}</Text>
        </View>
        <View style={styles.buttons}>
            <TouchableOpacity style={styles.buttonAddCard}
              onPress={() => {
                navigation.navigate("NewCard", { id: deck.id });
              }}
            >
              <Text style={styles.labelButton}> Add Card </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonStartQuiz}
              onPress={() => {
                navigation.navigate("QuizScreen", { id: deck.id });
              }}
            >
              <Text style={styles.labelButton}> Start Quiz </Text>
            </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    padding: 10,
    marginBottom: 5
  },
  cards: {
    fontSize: 20,
    textAlign: "center",
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
  buttonStartQuiz: {
    borderRadius: 5,
    backgroundColor: '#58A690',
    margin: 10,
    padding: 15,
    width: 300
  },
  labelButton:{
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
    color: '#FFFFFF'
  },
})

const mapStateToProps = (state, {navigation})=> {
    return {
        deck: state[navigation.getParam('id')]
    }
  }

export default connect(mapStateToProps, null)(DeckDetailsScreen);