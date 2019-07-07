import React from "react"
import { View, Text, StyleSheet, TouchableOpacity } from "react-native"

const QuizActions = ({ recordAnswer }) => (
  <View style={styles.container}>
    <View style={styles.actions}>
      <TouchableOpacity
        style={[styles.answerBtn, { backgroundColor: '#038C65' }]}
        onPress={() => recordAnswer(true)}
      >
        <Text style={styles.btnText}>Correct</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.answerBtn, { backgroundColor: '#FF4847' }]}
        onPress={() => recordAnswer(false)}
      >
        <Text style={styles.btnText}>Incorrect</Text>
      </TouchableOpacity>
    </View>
  </View>
)

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20
  },
  answerBtn: {
    padding: 20,
    margin: 10,
    width: 150,
    borderRadius: 5
  },
  btnText: {
    color: '#FFFFFF',
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold"
  }
})

export default QuizActions