import path from 'path'
import store from './store'

import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

const config = require(path.resolve(__dirname, '../config.json'))

const app = firebase.initializeApp({
  apiKey: config.apiKey,
  authDomain: config.authDomain,
  databaseURL: config.databaseURL
})

const error = (reason) => console.log('Sign in failed', reason)

const success = () => {
  firebase
    .database()
    .ref('gardenLights')
    .on('value', (snapshot) => store.dispatch({
      type: 'ON',
      state: !!snapshot.val()
    }))
}

firebase
  .auth()
  .signInWithEmailAndPassword(config.email, config.password)
  .then(success, error)
