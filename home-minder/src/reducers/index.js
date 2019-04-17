import { combineReducers } from 'redux';
import { itemsReducer } from './itemsReducer';
import { isLoadingReducer } from './isLoadingReducer';
import { hasErrorReducer } from './hasErrorReducer';

const rootReducer = combineReducers({
  items: itemsReducer,
  isLoading: isLoadingReducer,
  error: hasErrorReducer
})

export default rootReducer