import { combineReducers } from 'redux-immutable';
import matrix from './matrix/';
import next from './next/';
import cur from './cur';

const rootReducer = combineReducers({
	matrix,
	next,
	cur
});

export default rootReducer;