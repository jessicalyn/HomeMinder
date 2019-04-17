export const storeAllItems = (items) => ({
  type: 'STORE_ALL_ITEMS',
  items
})

export const hasError = (message) => ({
  type: 'HAS_ERROR',
  message
})

export const isLoading = (boolean) => ({
  type: "IS_LOADING",
  boolean
})