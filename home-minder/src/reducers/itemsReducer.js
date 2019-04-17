export const itemsReducer = (state = [], action) => {
  switch (action.type) {
    case 'STORE_ALL_ITEMS':
      return action.items
    
    default:
      return state
  }
}