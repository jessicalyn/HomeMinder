import { hasErrorReducer } from './hasErrorReducer';

describe('hasErrorReducer', () => {
  it('should return the initial state', () => {
    const expected = ""

    const result = hasErrorReducer(undefined, {})

    expect(result).toEqual(expected)
  });

  it('should return state with an error message', () => {
    const expected = ""

    const result = hasErrorReducer(undefined, "Something went wrong")

    expect(result).toEqual(expected)
  })
})