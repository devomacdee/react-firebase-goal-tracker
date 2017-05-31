import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { Router, browserHistory } from 'react-router'
import { firebaseApp } from './firebase'
import { logUser } from './actions'
import reducer from './reducers'

import App from './components/App'
import Signup from './components/Signup'
import Signin from './components/Signin'

const store = createStore(reducer)

firebaseApp.auth().onAuthStateChanged(user => {
  if (user) {
    const { email } = user
    store.dispatch(logUser(email))
    browserHistory.push('/app')
  } else {
    browserHistory.replace('/signin')
  }
})

ReactDOM.render(
  <Provider store={store}>
    <Router path="/" history={browserHistory}>
      <div>
        <Router path="/app" component={App}></Router>
        <Router path="/Signin" component={Signin}></Router>
        <Router path="/Signup" component={Signup}></Router>
      </div>
    </Router>
  </Provider>, document.getElementById('root')
)
