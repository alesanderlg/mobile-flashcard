import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addNewDeck } from '../redux/actions'
import { saveDeck } from '../utils/storage'
import uuidv4 from 'uuid/v4'
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity
} from 'react-native'
class NewDeckScreen extends Component {
  state = {
    title: ''
  }

  handleSubmit = () => {
    const deck = {
      id: uuidv4(),
      title: this.state.title,
      cards : [],
      score: 0
  }

  this.props.dispatch(addNewDeck({
    [deck.id]: deck
  }))  
  
  saveDeck(deck)
    this.setState({ title: ''})
    this.props.navigation.navigate("DeckDetails", {
      id: deck.id,
      title: deck.title
    })
  }

  handleTitleChange = (title) => {
    this.setState(() => ({ title }))
  }
  
  render(){
    return (
        <KeyboardAvoidingView style={styles.container} behavior='padding'>
            <Text style={styles.label}>What is the new title of your new deck?</Text>
            <TextInput
              style={styles.input}
              placeholder='Deck Title'
              onChangeText={(title) => this.setState({title})}
              value={this.state.title}
            />
            <View style={styles.buttons}>
              <TouchableOpacity 
                style={this.state.title === '' ? styles.buttonDisabled : styles.buttonEnabled }
                onPress={this.handleSubmit}
                disabled={this.state.title === ''}
              >
                <Text style={styles.labelButton}> Submit </Text>
              </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
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
    width: 350,
    height: 44,
    borderWidth: 1,  
    margin: 20,
    padding: 10,
    fontSize: 20,
    borderColor: '#DCDCDD'
  },
  buttons: {
    marginTop: 20
  },
  buttonEnabled: {
    borderRadius: 5,
    backgroundColor: '#4799FC',
    textAlign: 'center',
    margin: 10,
    padding: 15,
    width: 300
  },
  buttonDisabled: {
    borderRadius: 5,
    backgroundColor: '#DCDCDD',
    textAlign: 'center',
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
const mapStateToProps = ( state )=> {
  return {
    deck: state
  }
}

export default connect(mapStateToProps, null) (NewDeckScreen)
