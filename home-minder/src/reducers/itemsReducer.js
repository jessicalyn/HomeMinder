export const itemsReducer = (state = [], action) => {
  switch (action.type) {
    case 'STORE_ALL_ITEMS':
      return action.items
    
    case 'UPDATE_ITEM':
      return state.map(item => {
        if(item.id === action.id) {
          return action.blah
        } else {
          return item
        }
      })

    default:
      return state
  }
}