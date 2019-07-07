import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  KeyboardAvoidingView,
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity
} from 'react-native'
import { addNewCard } from '../redux/actions'
import { saveCard } from '../utils/storage'

class NewCardScreen extends Component {
  static navigationOptions = () => ({
    title: 'Add Card'
  })

  state = {
    question: "",
    answer: ""
  }

  handleSubmit = () => {
    const deckId = this.props.navigation.getParam('deckId')
    const { question, answer } = this.state;
  
    this.props.addNewCard(deckId, question, answer)
    saveCard(deckId, { question, answer })

    this.props.navigation.goBack()

    this.setState({
        question: "",
        answer: ""
    })
  }

  render() {
    const { question, answer } = this.state;
    return (
      <KeyboardAvoidingView behavior='padding' style={styles.container}>
        <View style={styles.element}>
          <Text style={styles.label}>What's the question?</Text>
          <TextInput
            style={styles.input}
            value={question}
            placeholder="e.g. What's React native?"
            onChangeText={question => this.setState({ question })}
          />
        </View>
        <View style={styles.element}>
          <Text style={styles.label}>What's the answer?</Text>
          <TextInput
            style={styles.input}
            value={answer}
            placeholder="e.g. React Native is a JavaScript framework."
            onChangeText={answer => this.setState({ answer })}
          />
        </View>
        <View style={styles.buttons}>
              <TouchableOpacity 
                style={styles.button}
                onPress={this.handleSubmit}
              >
                <Text style={styles.labelButton}> Submit </Text>
              </TouchableOpacity>
            </View>
      </KeyboardAvoidingView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  element: {
    margin: 20
  },
  label: {
    fontSize: 24,
    textAlign: 'center',
  },
  labelButton:{
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF'
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
  button: {
    borderRadius: 5,
    backgroundColor: '#4799FC',
    textAlign: 'center',
    margin: 10,
    padding: 15,
    width: 300
  },
})
const mapDispatchToProps = dispatch =>{
    return {
        addNewCard: (deckId, question, answer) => dispatch(addNewCard(deckId, question, answer))
    }
}

export default connect(null,mapDispatchToProps)(NewCardScreen)