import { Emitter } from './Emitter'

export class App {
  constructor(deps) {
    this.deps = deps
    Object.assign(this, deps)
  }

  static initialize(deps) {
    const app = new App(deps)
    app._init()
  }

  _init() {
    Emitter.on('display-events', this.onDependenciesInjection.bind(this))

    Emitter.emit('display-events')
  }

  onDependenciesInjection() {
    console.log(this.deps)
  }
}
