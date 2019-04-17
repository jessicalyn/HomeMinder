import { itemsReducer } from './itemsReducer';
import * as actions from '../actions';
import { mockHomeData } from '../mockData'

describe('itemsReducer', () => {
  it('should return the intital state', () => {
    const expected = []

    const result = itemsReducer(undefined, {})

    expect(result).toEqual(expected)
  });

  it('should return all items with STORE_ALL_ITEMS', () => {
    const initialState = []
    const predicted = mockHomeData

    const action = actions.storeAllItems(mockHomeData)

    const result = itemsReducer(initialState, action)

    expect(result).toEqual(predicted)
  })
})