import { isLoading, hasError, storeAllItems } from "../actions";

export const putUpdatedItem = (url, options) => {
  return async (dispatch) => {
    try {
      dispatch(isLoading(true))
      const response = await fetch(url, options)
      if(!response.ok) {
        throw Error(response.statusText)
      }
      dispatch(isLoading(false))
      const result = await response.json()
      dispatch(storeAllItems(result))
    } catch (error) {
      dispatch(hasError(error.message))
    }
  }
}