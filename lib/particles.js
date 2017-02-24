import request from 'request'
import store from './store'

const { particle: config } = require(path.resolve(__dirname, '../config.json'))

const update = (particle, control) =>
  request.post(`https://api.particle.io/v1/devices/${particle}/led`, {
    access_token: config.access_token,
    arg: control
  })

store.subscribe(() => {
  const state = store.getState()
  const control = state.on ? 'on' : 'off'

  config.particles.forEach((particle) => update(particle, control))
})
