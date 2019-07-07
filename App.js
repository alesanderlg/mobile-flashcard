import React from 'react'
import { Provider } from 'react-redux'
import Navigator from './src/navigations/navigator'
import { createStore } from 'redux'
import reducers from './src/redux/reducers'

const App = () => {
    return (
      <Provider store={createStore(reducers)}>
          <Navigator />
      </Provider>
     )
}

export default App


