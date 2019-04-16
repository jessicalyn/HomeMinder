import { isLoadingReducer } from './isLoadingReducer';
import * as actions from '../actions'

describe('isLoadingReducer', () => {
  it('should return the initial state', () => {
    const expected = false

    const result = isLoadingReducer(undefined, {})

    expect(result).toEqual(expected)
  });

  it('should return state with a new boolean', () => {
    const initialState = false
    const predicted = true

    const action = actions.isLoading(true)
    const result = isLoadingReducer(initialState, action)

    expect(result).toEqual(predicted)
  })
})