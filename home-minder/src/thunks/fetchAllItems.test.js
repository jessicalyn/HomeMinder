import { fetchAllItems } from './fetchAllItems';
import { isLoading, storeAllItems, hasError } from '../actions';
import { mockData } from '../mockData'

describe('fetchAllItems', () => {
  let mockUrl
  let mockDispatch

  beforeEach(() => {
    mockUrl = "www.homeminder.com"
    mockDispatch = jest.fn()
  });

  it('should dispatch isLoading immediately', () => {
    fetchAllItems(mockUrl)(mockDispatch)
    expect(mockDispatch).toHaveBeenCalledWith(isLoading(true))
  });

  it('should dispatch isLoading when response is ok', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
    }))
    const thunk = fetchAllItems(mockUrl);
    await thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(isLoading(false));
  });

  it('should dispatch storeAllItems when response is okay', async () => {
    const mockItems = mockData

    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve(mockItems)
    }))

    const thunk = fetchAllItems(mockUrl)

    await thunk(mockDispatch)

    expect(mockDispatch).toHaveBeenCalledWith(storeAllItems(mockItems))
  });

  it('should dispatch hasError if the response is not okay', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: false,
      statusText: 'Something went wrong'
    }))

    const thunk = fetchAllItems(mockUrl);

    await thunk(mockDispatch);

    expect(mockDispatch).toHaveBeenCalledWith(hasError('Something went wrong'));
  })
})