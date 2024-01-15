const path = require('path')

module.exports = {
  mode:"development",
  entry: {
    login: path.resolve(__dirname, './src/login.js'),
    challenge: path.resolve(__dirname, './src/challenge.js')
  },
  output: {
    path: path.resolve(__dirname, './build'),
    filename: '[name].js'
  }
}