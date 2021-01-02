import isValid from './utils/isValid'
const connection = new WebSocket('ws://192.168.0.5:8080')

connection.onopen = () => {
  console.log('Connected')
}

connection.onclose = () => {
  console.error('Disconnected')
}

connection.onerror = (error) => {
  console.log('failed to connect', error)
}

connection.onmessage = (event) => {
  console.log('received', event.data)
  const li = document.createElement('li')
  li.innerText = event.data
  document.querySelector('#chat').append(li)
}

document.querySelector('form').addEventListener('submit', (event) => {
  event.preventDefault()
  const message = document.querySelector('#message').value
  if (isValid(message)) return
  connection.send(message)
  document.querySelector('#message').value = ''
})
