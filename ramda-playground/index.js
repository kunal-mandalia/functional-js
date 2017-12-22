const R = require('ramda')

function composeArrayOfFunctions (functions) {
  return R.compose(...functions)
}

module.exports = {
  composeArrayOfFunctions
}
