import { combineReducers, applyMiddleware, createStore } from 'redux';
import ReduxThunk from 'redux-thunk';

import ProductsReducers from './ProductsConfig/reducers';
import UserReducers from './UserConfig/reducers';

const reducers = combineReducers({
    ProductsReducers,
    UserReducers
});

export default createStore(reducers, applyMiddleware(ReduxThunk));
