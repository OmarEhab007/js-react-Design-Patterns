export let counter = 0;

const counterObject = {
  getCounter: () => counter,
  incCounter: () => ++counter,
  decCounter: () => --counter,
}

const singletonObject = Object.freeze(counterObject)

export default singletonObject

