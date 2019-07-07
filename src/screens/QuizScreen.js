import React, { Component } from "react"
import { View, Text, StyleSheet } from "react-native"

import QuizCard from "../components/QuizCard"
import QuizActions from "../components/QuizActions"
import QuizResults from "../components/QuizResuts"

import {clearLocalNotification, setLocalNotification} from '../utils/notification'

const defaultState = {
  correctAnswer: 0,
  incorrectAnswer: 0,
  currentQuestionIndex: 0, 
  showResults: false
}
class QuizScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: `${navigation.getParam("deck").title} Quiz`
  })

  state = defaultState

  resultSummary = (correctAnswer, incorrectAnswer) => {
    const totalCards = this.props.navigation.getParam("deck").cards.length
    return totalCards - (correctAnswer + incorrectAnswer)
  }

  retrieveDeck = () => {
    return this.props.navigation.getParam("deck")
  }

  getRemainingMessage = () => {
    const { correctAnswer, incorrectAnswer} = this.state
    const totalCards = this.props.navigation.getParam("deck").cards.length
    const remainingQuestions =this.resultSummary(correctAnswer, incorrectAnswer)
    return `${remainingQuestions} question, ${totalCards} remaining.`
  }

  restartQuiz = () => {
    this.setState(defaultState)
  }

  recordAnswer = knewAnswer => {
    let {
      correctAnswer,
      incorrectAnswer,
      showResults,
      currentQuestionIndex
    } = this.state

    if (knewAnswer) {
      correctAnswer++
    } else {
      incorrectAnswer++
    }

    const deck = this.retrieveDeck()
    if (currentQuestionIndex === deck.cards.length - 1) {
      showResults = true
      clearLocalNotification()
      setLocalNotification()
    } else {
      currentQuestionIndex++
    }

    this.setState(state => ({
      correctAnswer,
      incorrectAnswer,
      showResults,
      currentQuestionIndex
    }))
  }

  render() {
    const {
      correctAnswer,
      incorrectAnswer,
      currentQuestionIndex,
      showResults
    } = this.state

    return !showResults ? (
      <View style={styles.container}>
        <QuizCard card={this.retrieveDeck().cards[currentQuestionIndex]} />
        <Text style={styles.count}>{this.getRemainingMessage()}</Text>
        <QuizActions recordAnswer={this.recordAnswer} />
      </View>
    ) : (
      <QuizResults
        correctAnswer={correctAnswer}
        incorrectAnswer={incorrectAnswer}
        restartQuiz={this.restartQuiz}
        navigation={this.props.navigation}
      />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: '#FFFFFF',
    padding: 10
  },
  count: {
    color: '#DCDCDD',
    fontSize: 20,
    marginTop: 10
  }
})

export default QuizScreen