import React, { Component } from "react"
import { View, Text, StyleSheet } from "react-native"

import QuizCard from "../components/QuizCard"
import QuizActions from "../components/QuizActions"
import QuizResults from "../components/QuizResuts"

const defaultState = {
  correctAnswerCount: 0,
  incorrectAnswerCount: 0,
  currentQuestionIndex: 0, 
  showResults: false
}
class QuizScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: `${navigation.getParam("deck").title} Quiz`
  })

  state = defaultState

  resultSummary = (correctAnswerCount, incorrectAnswerCount) => {
    return this.props.navigation.getParam("deck").cards.length -
    (correctAnswerCount + incorrectAnswerCount + 1)
  }

  retrieveDeck = () => {
    return this.props.navigation.getParam("deck")
  }

  getRemainingMessage = () => {
    const { correctAnswerCount, incorrectAnswerCount } = this.state
    const remainingQuestions =this.resultSummary(correctAnswerCount, incorrectAnswerCount)
    return `${remainingQuestions} question, ${remainingQuestions} remaining.`
  }

  restartQuiz = () => {
    this.setState(defaultState)
  }

  recordAnswer = knewAnswer => {
    let {
      correctAnswerCount,
      incorrectAnswerCount,
      showResults,
      currentQuestionIndex
    } = this.state


    if (knewAnswer) {
      correctAnswerCount++
    } else {
      incorrectAnswerCount++
    }

    const deck = this.retrieveDeck()
    if (currentQuestionIndex === deck.cards.length - 1) {
      // time to show results.
      showResults = true;

    } else {
      currentQuestionIndex++
    }

    this.setState(state => ({
      correctAnswerCount,
      incorrectAnswerCount,
      showResults,
      currentQuestionIndex
    }))
  }

  render() {
    const {
      correctAnswerCount,
      incorrectAnswerCount,
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
        correctAnswerCount={correctAnswerCount}
        incorrectAnswerCount={incorrectAnswerCount}
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