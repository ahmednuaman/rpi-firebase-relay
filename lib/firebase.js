import path from 'path'
import store from './store'

import * as firebase from 'firebase'

const { firebase: config } = require(path.resolve(__dirname, '../config.json'))

firebase.initializeApp({
  apiKey: config.apiKey,
  authDomain: config.authDomain,
  databaseURL: config.databaseURL
})

const error = (reason) => console.log('Sign in failed', reason)

const success = () => {
  const ref = firebase
                .database()
                .ref('gardenLights')

  ref.on('value', handleSnapshot)
  ref.once('value', handleSnapshot)
}

const handleSnapshot = (snapshot) => {
  const on = !!snapshot.val()

  store.dispatch({
    type: 'ON',
    on
  })
}

firebase
  .auth()
  .signInWithEmailAndPassword(config.email, config.password)
  .then(success, error)
