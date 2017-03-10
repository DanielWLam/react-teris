import { combineReducers } from 'redux-immutable';
import matrix from './matrix/';
import next from './next/';
import cur from './cur';
import pause from './pause/';
import keyboard from './keyboard';

const rootReducer = combineReducers({
	matrix,
	next,
	cur,
	pause,
	keyboard
});

export default rootReducer;