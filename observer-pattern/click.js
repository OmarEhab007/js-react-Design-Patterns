import Observable from './main'

document
  .getElementById('my-button')
  .addEventListener("click", () => {
    Observable.notify("clicked")
  })
