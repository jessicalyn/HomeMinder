import * as actions from './index';
import { mockHomeData } from '../mockData'

describe('actions', () => {
  it('should have a type of STORE_ALL_ITEMS', () => {
    const mockItems = mockHomeData
    const expected = {
      type: 'STORE_ALL_ITEMS',
      items: mockItems
    }

    const result = actions.storeAllItems(mockItems)

    expect(result).toEqual(expected)
  });

  it('should have a type of HAS_ERROR', () => {
    const mockMessage = "Something went wrong"
    const expected = {
      type: 'HAS_ERROR',
      message: mockMessage
    }

    const result = actions.hasError(mockMessage)

    expect(result).toEqual(expected)
  });

  it('should have a type of IS_LOADING', () => {
    const mockBoolean = false
    const expected = {
      type: 'IS_LOADING',
      boolean: mockBoolean
    }

    const result = actions.isLoading(mockBoolean)

    expect(result).toEqual(expected)
  })
})