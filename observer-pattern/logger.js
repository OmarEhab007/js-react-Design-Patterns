import Observable from './main.js'

function logger(data) {
  console.log(`${Date.now()} - ${data}`)
}

Observable.subscribe(logger)
