import path from 'path'
import request from 'request'
import store from './store'

const { particle: config } = require(path.resolve(__dirname, '../config.json'))
console.log(config)
const update = (particle, control) => {
  request.post(`https://api.particle.io/v1/devices/${particle}/led`, {
    form: {
      access_token: config.access_token,
      arg: control
    }
  }, (error, response, body) => console.log(error, body))
}

store.subscribe(() => {
  const state = store.getState()
  const control = state.on ? 'on' : 'off'

  config.particles.forEach((particle) => update(particle, control))
})
