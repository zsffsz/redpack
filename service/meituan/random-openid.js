const random = require('../random')

const words = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'

module.exports = (length = 28) =>
  Array.from({length})
    .map(() => words[random(0, words.length - 1)])
    .join('')
