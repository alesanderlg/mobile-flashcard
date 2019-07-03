import { createBottomTabNavigator, createAppContainer } from "react-navigation";
import HomeScreen from '../screens/HomeScreen'
import NewDeckScreen from '../screens/NewDeckScreen'

const Tab = createBottomTabNavigator({
    Home: {
        screen: HomeScreen,
        navigationOptions: {
            title: 'Decks',
        },
    },
    NewDeck: {
        screen: NewDeckScreen,
        navigationOptions: {
            title: 'New Deck',
        },
    }
}, {
    tabBarposition: 'bottom', 
    swipeEnabled: true, 
    tabBarOptions: { 
        activeTintColor: '#f2f2f2', 
        activeBackgroundColor: '#2EC4B6',
        inactiveTintColor: '#666', 
        labelStyle: {
            fontSize: 20,
            padding: 5
        }
    }
})

export default createAppContainer(Tab);