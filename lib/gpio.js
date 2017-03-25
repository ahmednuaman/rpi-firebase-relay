import path from 'path'
import rpio from 'rpio'
import store from './store'

const { pin: PIN } = require(path.resolve(__dirname, '../config.json'))

rpio.open(PIN, rpio.OUTPUT, rpio.LOW)

store.subscribe(() => {
  const state = store.getState()

  rpio.write(PIN, state.on ? rpio.HIGH : rpio.LOW)
})
