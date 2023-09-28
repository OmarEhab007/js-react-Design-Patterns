import singletonObject   from './main.js'
import { counter } from './main.js'
import './test-1.js'

singletonObject.incCounter();
singletonObject.incCounter();
singletonObject.incCounter();
singletonObject.decCounter();
console.log(counter)
