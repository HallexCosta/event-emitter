# Event Emitter

## Guide

- [Install](#install)
- [Run](#run)
- [Usage](#usage)

[](#install)

## Install

```sh
# Cloning project
$ git clone git@github.com:HallexCosta/event-emitter.git

# Accessing directory of project
$ cd event-emitter

# Install dependencies
$ yarn
```

### Run

[](#run)

```sh
# Run
$ yarn start
```

[](#usage)

## Usage

```javascript
import { Emitter } from './Emitter'

const emitter = new Emitter()

function say(name = '') {
  console.log(`Hello ${name}`.trim())
}

const eventName = 'say-people'

emitter.on(eventName, say)
emitter.emit(eventName)
// OUTPUT: Hello
// ---------------------------
emitter.on(eventName, say.bind(null, 'Hállex'))
emitter.emit(eventName)
// OUTPUT: Hello Hállex
```
