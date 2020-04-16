import { combineReducers, applyMiddleware, createStore } from 'redux';
import ReduxThunk from 'redux-thunk';

import ProductsReducers from './ProductsConfig/reducers';

const reducers = combineReducers({
    ProductsReducers
});

export default createStore(reducers, {}, applyMiddleware(ReduxThunk));
