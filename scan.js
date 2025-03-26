class Scanner {
  constructor(operators) {

  }

  scan(source) {
    const tokens = {}
    let currentToken = ""
    let currentOffset = 0;

    function branch() {
      const newBase = [tokens]
      tokens.shift(newBase)
      tokens = newBase
    }

    function drop() {
      tokens = tokens[0]
    }

    function pushToken() {
      tokens.push(currentToken)
    }

    function doublePush(token) {
      pushToken();
      currentToken = token; 
      pushToken();
    }

    for (let characterIndex = 0; characterIndex < source.length; characterIndex++) {
      const character = source[characterIndex]      
    }
  }
}

