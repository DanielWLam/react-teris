import { combineReducers } from 'redux-immutable';
import matrix from './matrix/';
import next from './next/';
import cur from './cur';
import pause from './pause/';

const rootReducer = combineReducers({
	matrix,
	next,
	cur,
	pause
});

export default rootReducer;