import { App } from './app'
import { Emitter } from './Emitter'

const config = {
  name: 'Pub/Sub Pattern',
  author: 'Hállex',
  age: 18,
  developer: true
}

const emitter = new Emitter()

App.initialize(config)
