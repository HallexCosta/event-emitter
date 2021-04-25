export class Emitter {
  static events = {}

  static on(event, action) {
    if (Emitter.events.hasOwnProperty(event)) {
      Emitter.events[event] = Emitter.events[event]
    } else {
      Emitter.events[event] = []
    }
    // Emitter.events[event] ||= []
    // Emitter.events[event] = Emitter.events[event] || []
    Emitter.events[event].push(action)
  }

  static emit(event, ...args) {
    if (event in Emitter.events === false) {
      return
    }

    for (const action of Emitter.events[event]) {
      action(...args)
    }
  }
}
