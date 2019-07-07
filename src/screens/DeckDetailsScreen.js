import React, { Component } from 'react'
import { connect } from 'react-redux'
import DeckDetails from '../components/DeckDetails'
class DeckDetailsScreen extends Component {

  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('title'),
    }
  }
    
  render() {
    const { navigation, deck } = this.props
    return <DeckDetails deck={deck} navigation={navigation} />
  }
}

const mapStateToProps = (state, {navigation})=> {
    return {
        deck: state[navigation.getParam('id')]
    }
  }

export default connect(mapStateToProps, null)(DeckDetailsScreen)