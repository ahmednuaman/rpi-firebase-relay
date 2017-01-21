import rpio from 'rpio'
import store from './store'

const PIN = 12

rpio.open(PIN, rpio.OUTPUT, rpio.LOW)

store.subscribe(() => {
  const state = store.getState()

  rpio.write(PIN, state.on ? rpio.HIGH : rpio.LOW)
})
