import Oberserver from './main.js'
import './analytics.js'

Oberserver.notify('New data :)')

setTimeout(() => {
  Oberserver.notify('New data again ^_^')
}, 2000)
