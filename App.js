import React, { Component } from 'react'
import { Provider } from 'react-redux'
import Navigator from './src/navigations/navigator'
import { createStore } from 'redux'
import reducers from './src/redux/reducers'
import { setLocalNotification } from './src/utils/notification'
class App extends Component {
    componentDidMount() {
        setLocalNotification()
    }
    render(){
        return (
            <Provider store={createStore(reducers)}>
                <Navigator />
            </Provider>
        )
    }
}

export default App


