import { hasErrorReducer } from './hasErrorReducer';
import * as actions from '../actions'

describe('hasErrorReducer', () => {
  it('should return the initial state', () => {
    const expected = ""

    const result = hasErrorReducer(undefined, {})

    expect(result).toEqual(expected)
  });

  it('should return state with an error message', () => {
    const initialState = ""
    const predicted = "Something went wrong"
    const action = actions.hasError("Something went wrong")

    const result = hasErrorReducer(initialState, action)

    expect(result).toEqual(predicted)
  })
})