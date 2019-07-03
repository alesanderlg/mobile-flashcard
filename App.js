import React from 'react'
import { Provider } from 'react-redux'
import Navigator from './src/navigations/navigator'

import store from './src/redux/store'

const App = () => {
    return (
      <Provider store={store}>
          <Navigator />
      </Provider>
     )
}

export default App


