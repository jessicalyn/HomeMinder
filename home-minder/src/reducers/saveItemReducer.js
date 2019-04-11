export const saveItemReducer = (state = [], action) => {
  switch (action.type) {
    case 'SAVE_ITEM':
      return [...state, action.item]
    default:
      return state
  }
}