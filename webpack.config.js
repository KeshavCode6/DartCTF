const path = require('path')

module.exports = {
  mode:"development",
  entry: {
    login: path.resolve(__dirname, './src/login.js'), 
    main: path.resolve(__dirname, './src/main.js'),
    signup: path.resolve(__dirname, './src/signup.js') 
  },
  output: {
    path: path.resolve(__dirname, './build'),
    filename: '[name].js'
  }
}