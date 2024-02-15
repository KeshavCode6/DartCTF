const path = require('path')

module.exports = {
  mode:"development",
  entry: {
    login: path.resolve(__dirname, './src/login.js'),
    challenge: path.resolve(__dirname, './src/challenge.js'),
    play: path.resolve(__dirname, './src/play.js'),
    navbar: path.resolve(__dirname, './src/navbar.js'), 
    leaderboard: path.resolve(__dirname, './src/leaderboard.js'), 
    challengeSelect: path.resolve(__dirname, './src/challengeSelect.js')
  },
  output: {
    path: path.resolve(__dirname, './build'),
    filename: '[name].js'
  }
}