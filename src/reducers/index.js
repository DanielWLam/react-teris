import { combineReducers } from 'redux-immutable';
import matrix from './matrix/';

const rootReducer = combineReducers({
	matrix
});

export default rootReducer;