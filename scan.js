class Scanner {
  constructor(operators) {

  }

  scan(source) {
    const tokens = {}

    function pushToken() {
      tokens.push(currentToken)
    }

    function doublePush(token) {
      pushToken()
      currentToken 
  }
}

