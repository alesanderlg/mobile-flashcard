import React, { Component } from 'react'
import { connect } from 'react-redux'
import { receiveDecks } from '../redux/actions'
import { getDecks } from '../utils/storage'

import Decks from '../components/Decks'

import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity
} from 'react-native'

class DecksScreen extends Component {

  state = {
    loading: false
  }

  componentDidMount() {
    getDecks()
      .then(decks => this.props.dispatch(receiveDecks(decks)))
      .then(() => {
        this.setState({ loading: true })
      })
  }

  render() {
    const { decks, navigation } = this.props;
    if (!this.state.loading) {
      return (
        <View style={styles.blank}>
          <Text>Loading...</Text>
        </View>
      );
    } else {
      return Object.values(decks).length > 0 ? (
        <Decks decks={decks} navigation={navigation} />
      ) : (
        <View style={styles.blank}>
          <Text style={styles.message}>What a pity! You don't have any decks.</Text>
          <TouchableOpacity style={styles.buttonCreateDeck}
              onPress={() => {
                navigation.navigate("NewDeck");
              }}
          >
              <Text style={styles.labelButton}> Create Deck </Text>
          </TouchableOpacity>
        </View>
      )
    }
  }
}

const styles = StyleSheet.create({
  buttonCreateDeck: {
    borderRadius: 5,
    backgroundColor: '#4799FC',
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
  message: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 111, 
    marginBottom: 45
  },
  blank: {
  flex: 1,
  backgroundColor: '#FFFFFF',
  justifyContent: "center",
  alignItems: "center"
  }
})

const mapStateToProps = ( state ) =>{
  console.log("mapStateToProps", state)
  return {
     decks: state
  }
}

export default connect(mapStateToProps, null) (DecksScreen)
