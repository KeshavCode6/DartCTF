const path = require('path')

module.exports = {
  mode:"development",
  entry: {
    login: path.resolve(__dirname, './src/login.js'),
    challenge: path.resolve(__dirname, './src/challenge.js'),
    play: path.resolve(__dirname, './src/play.js')
  },
  output: {
    path: path.resolve(__dirname, './build'),
    filename: '[name].js'
  }
}