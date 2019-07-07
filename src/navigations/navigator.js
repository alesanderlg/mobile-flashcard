import { createBottomTabNavigator, createStackNavigator, createAppContainer } from "react-navigation";
import DecksScreen from '../screens/DecksScreen'
import NewDeckScreen from '../screens/NewDeckScreen'
import DeckDetailsScreen from '../screens/DeckDetailsScreen'
import NewCardScreen from '../screens/NewCardScreen'
import QuizScreen from '../screens/QuizScreen'

const Tabs = createBottomTabNavigator({
    Decks: {
      screen: DecksScreen,
      navigationOptions: {
        title: 'Decks'
      }
    },
    NewDeck: {
      screen: NewDeckScreen,
      navigationOptions: {
        title: 'New Deck'
      }
    }
},{
    tabBarposition: 'bottom', 
    swipeEnabled: true, 
    tabBarOptions: { 
        activeTintColor: '#f2f2f2', 
        activeBackgroundColor: '#F2785C',
        inactiveTintColor: '#666', 
        labelStyle: {
          textAlign: "center",
          fontSize: 18,
          fontWeight: "bold",
          padding: 5
        }
    }
})

const MainNavigator = createStackNavigator(
  {
    Home: Tabs,
    DeckDetails: DeckDetailsScreen,
    NewCard: {
      screen: NewCardScreen,
      navigationOptions: {
        title: 'Add Card'
      }
    },
    QuizScreen: {
      screen: QuizScreen,
      navigationOptions: {
        title: 'Quiz'
      }
    },
  },
  {
    initialRouteName: "Home"
  }
);

export default createAppContainer(MainNavigator);