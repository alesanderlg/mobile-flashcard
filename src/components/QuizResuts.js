import React from "react"
import { Text, View, StyleSheet, TouchableOpacity } from "react-native"

const QuizResuts = ({correctAnswer,incorrectAnswer,restartQuiz, navigation}) => (
  
  <View style={styles.container}>
    <Text style={styles.header}>You scored</Text>
    <Text style={styles.result}>{`${Math.round(
      (correctAnswer * 100) / (correctAnswer + incorrectAnswer)
    )} %`}</Text>
    <View style={styles.buttons}>
            <TouchableOpacity 
                style={styles.buttonRestartQuiz}
                onPress={() => restartQuiz()}
            >
              <Text style={styles.labelButton}> Restart Quiz </Text>
            </TouchableOpacity>
            <TouchableOpacity 
                style={styles.buttonStartQuiz}
                onPress={() => navigation.goBack()}
            >
              <Text style={styles.labelButton}> Back to Deck</Text>
            </TouchableOpacity>
    </View>
    
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#FFFFFF'
  },
  buttons: {
    marginTop: 20
  },
  buttonRestartQuiz: {
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
  header: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center"
  },
  result: {
    fontSize: 70,
    color: '#F2955E',
    textAlign: "center"
  },
  actions: {
    marginTop: 50
  }
})

export default QuizResuts