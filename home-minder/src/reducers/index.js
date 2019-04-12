import { combineReducers } from 'redux';
import { storeAllItemsReducer } from './storeAllItemsReducer';
import { isLoadingReducer } from './isLoadingReducer';
import { hasErrorReducer } from './hasErrorReducer';

const rootReducer = combineReducers({
  items: storeAllItemsReducer,
  isLoading: isLoadingReducer,
  error: hasErrorReducer
})

export default rootReducer