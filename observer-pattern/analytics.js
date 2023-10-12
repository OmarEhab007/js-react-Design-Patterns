import Observer from './main.js';

export function sendToGoogleAnalytics(data) {
  console.log('Send to Google analitics: ', data)
}

export function sentToCustomAnalytics(data) {
  console.log('Send to custom analitics: ', data)
}

export function sendToEmail(data) {
  console.log('Send to Email analitics: ', data)
}

Observer.subscribe(sentToCustomAnalytics)
Observer.subscribe(sendToEmail)
Observer.subscribe(sendToGoogleAnalytics)
