import { isLoading, hasError, storeAllItems } from "../actions";

export const putUpdatedItem = (url, options) => {
  return async (dispatch) => {
    try {
      console.log(url)
      console.log(options)
      dispatch(isLoading(true))
      const response = await fetch(url, options)
      if(!response.ok) {
        throw Error(response.statusText)
      }
      dispatch(isLoading(false))
      const result = await response.json()
      console.log("result", result)
      dispatch(storeAllItems(result))
    } catch (error) {
      dispatch(hasError(error.message))
    }
  }
}