import React, { Component } from 'react'
import { Button, Input } from 'react-native-elements'
import { connect } from 'react-redux'
import { saveDeck } from '../redux/actions/actionsCreator'

import uuidv4 from 'uuid/v4'
import {
  StyleSheet,
  View,
  Text
} from 'react-native'

class NewDeckScreen extends Component {
  state = {
    deck : {
      id: uuidv4(),
      title: '',
      cards : [],
      score: 0
      }
  }

  handleSubmit = () => {
    const deck = {...this.state.deck}
    this.props.saveDeck(deck)
    this.setState({
      deck: {}
    })
  }

  handleTitle = (title) => {
    let deck = {...this.state.deck}
    deck.title = title
    this.setState(() => ({ deck }))
  }
  
  render(){
    return (
        <View style={styles.container}>
            <Text style={styles.label}>What is the new title of your new deck?</Text>
            <Input 
              value={this.state.deck.title}
              style={styles.input}
              placeholder='Deck Title'
              onChangeText={this.handleTitle}
            />
            <Button 
              style={styles.button}
              title="Submit"
              onPress={this.handleSubmit}
            />
        </View>
    )
  }
}

NewDeckScreen.navigationOptions = {
  header: null
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  label: {
    fontSize: 36,
    textAlign: 'center',
    marginTop: 111, 
    marginBottom: 45 
  },
  input: { 
      fontSize: 16
  },
  button: { 
    marginTop: 20, 
    width: 100
},
})

const mapDispatchToProps = dispatch => ({
  saveDeck: (id,deck) => dispatch(saveDeck(id,deck))
})

export default connect(null, mapDispatchToProps) (NewDeckScreen)
