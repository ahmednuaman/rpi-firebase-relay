import path from 'path'
import rpio from 'rpio'
import store from './store'

const { pin: PIN } = require(path.resolve(__dirname, '../config.json'))

const handleState = () => {
  const state = store.getState()

  if (state && state.hasOwnProperty('on')) {
    rpio.write(PIN, state.on ? rpio.HIGH : rpio.LOW)
  }
}

rpio.open(PIN, rpio.OUTPUT, rpio.LOW)
store.subscribe(handleState)
handleState()
