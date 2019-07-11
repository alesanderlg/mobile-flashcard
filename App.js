import React, { Component } from 'react'
import { Provider } from 'react-redux'
import Navigator from './src/navigations/navigator'
import { createStore } from 'redux'
import reducers from './src/redux/reducers'

import { clearLocalNotification, setLocalNotification } from './src/utils/notification'

const App = () => {
    clearLocalNotification()
    setLocalNotification()
    return (
      <Provider store={createStore(reducers)}>
          <Navigator />
      </Provider>
     )
}

export default App


