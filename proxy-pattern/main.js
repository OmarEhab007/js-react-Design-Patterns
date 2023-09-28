
const person= {
  name: "Omar",
  age: 23,
  email: "oehab558@gmail.com",
  country: "Egypt",
}

const personProxy = new Proxy(person,
  {
    get: (target, prop) => {
      console.log(`The value of ${prop} is ${target[prop]}`)
      return target[prop]
    },
    set: (target, prop, value) => {
      console.log(`Setting ${prop} to ${value}`)
      target[prop] = value
      return true
      }


  }
);


personProxy.name;
