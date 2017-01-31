import { List } from 'immutable';

const blankLine = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

const blankMatrix = (() => {
  const matrix = [];
  for (let i = 0; i < 20; i++) {
    matrix.push(List(blankLine));
  }
  return List(matrix);
})();

const initState = blankMatrix;
const matrix = (state = initState, action) => {
	switch(action.type) {
		case 'MATRIX': 
			return action.data;
		default:
			return state;
	}
}
 
export default matrix;