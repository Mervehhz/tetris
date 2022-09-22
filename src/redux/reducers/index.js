import ShapeReducer from './boardReducers'
import TopReducer from './topReducers'
import ShapeTReducer from './shapeTReducers'
import {combineReducers} from 'redux'

const reducers = combineReducers({
    ShapeReducer,
    TopReducer,
    ShapeTReducer,
});

export default reducers;