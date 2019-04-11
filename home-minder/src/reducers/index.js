import { combineReducers } from 'redux'
import { saveItemReducer } from './saveItemReducer'

const rootReducer = combineReducers({
  items: saveItemReducer
})

export default rootReducer