const isValid = require('../utils/isValid')

test('Should return false', () => {
  expect(isValid()).toBe(false)
})

test('Should return provided message', () => {
  const message = 'Is valid'
  expect(isValid(message)).toBe(message)
})