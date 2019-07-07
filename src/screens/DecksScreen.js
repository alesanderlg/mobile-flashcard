import React, { Component } from 'react'
import { connect } from 'react-redux'
import { receiveDecks } from '../redux/actions'
import { getDecks } from '../utils/storage'
import DeckSumUp from '../components/DeckSumUp'

import {
  StyleSheet,
  View,
  Text,
  FlatList
} from 'react-native'

class DecksScreen extends Component {

  state = {
    loading: false
  }

  componentDidMount() {
    getDecks()
      .then(decks => this.props.dispatch(receiveDecks(decks)))
      .then(() => {
        this.setState({ loading: true });
      });
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
        <View style={styles.container}>
        <FlatList
          data={Object.values(decks)}
          renderItem={({ item }) => (
            <DeckSumUp
              deck={item}
              navigation={this.props.navigation}
            />
          )}
          keyExtractor={(item, index) => item.title}
        />
        </View>
      ) : (
        <View style={styles.blank}>
          <Text style={{ fontSize: 18 }}>You don't have any decks yet.</Text>
          <StyledButton
            onPress={() => {
              navigation.navigate("AddDeck");
            }}
          >
            Create Deck
          </StyledButton>
        </View>
      );
    }
  }
}

DecksScreen.navigationOptions = {
  header: null
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center' 
  },
})

const mapStateToProps = ( state ) =>{
  console.log("mapStateToProps", state)
  return {
     decks: state
  }
}

export default connect(mapStateToProps, null) (DecksScreen)
