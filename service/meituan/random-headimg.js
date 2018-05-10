const headimg = require('./headimg.json')
const random = require('../random')

module.exports = () => headimg[random(0, headimg.length - 1)]
