import { storeAllItems, hasError, isLoading } from '../actions'

export const fetchAllItems = (url) => {
  return async (dispatch) => {
    try {
      dispatch(isLoading(true))
      const response = await fetch(url)
      if(!response.ok) {
        throw Error(response.statusText)
      }
      dispatch(isLoading(false))
      const data = await response.json()
      dispatch(storeAllItems(data))
    } catch (error) {
      dispatch(hasError(error.message))
    }
  }
}