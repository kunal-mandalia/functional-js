const f = require('./index')

describe(`Ramnda`, () => {
  describe(`function composition`, () => {
    const functions = [x => x + 10, x => 2 * x]
    const cases = [
      {input: 0, output: 10},
      {input: 2, output: 14},
      {input: -3, output: 4},
    ]
    cases.forEach(c => {
      it(`should evaluate composition(${c.input}) returning ${c.output}`, () => {
        expect(f.composeArrayOfFunctions(functions)(c.input)).toEqual(c.output)
      })
    })
  })
})
