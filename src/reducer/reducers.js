import { combineReducers } from 'redux';
import dataReducer from './reducer.js'; // Путь к вашему редьюсеру

const rootReducer = combineReducers({
    data: dataReducer,
});

export default rootReducer;
