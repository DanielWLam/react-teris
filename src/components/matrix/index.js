import React from 'react';
import immutable, { List } from 'immutable';
import classnames from 'classnames';
import style from './index.less';

export default class Matrix extends React.Component {
	constructor() {
		super();
		this.state = {
			clearLines: false,
			animateColor: 2,
			isOver: false,
			overState: null
		}
	}
	componentWillReceiveProps(nextProps = {}) {

	}
	getResult(props = this.props) {
		const cur = props.cur;
		const shape = cur && cur.shape;
		const xy = cur && cur.xy;

		let matrix = props.matrix;
		const clearLines = this.state.clearLines;
		if (clearLines) {
			const animateColor = this.state.animateColor;
			clearLines.forEach(index => {
				matrix = matrix.set(index, List([
					animateColor,
					animateColor,
					animateColor,
					animateColor,
					animateColor,
					animateColor,
					animateColor,
					animateColor,
					animateColor,
					animateColor
					]))
			})
		} else if (shape) {
			shape.forEach((m, k1) => (
	        m.forEach((n, k2) => {
	          if (n && xy.get(0) + k1 >= 0) { // 竖坐标可以为负
	            let line = matrix.get(xy.get(0) + k1);
	            let color;
	            if (line.get(xy.get(1) + k2) === 1 && !clearLines) { // 矩阵与方块重合
	              color = 2;
	            } else {
	              color = 1;
	            }
	            line = line.set(xy.get(1) + k2, color);
	            matrix = matrix.set(xy.get(0) + k1, line);
	          }
	        })
	      ));
		}
		return matrix;
	}
	render() {
		let matrix;
		if (this.state.isOver) {
			matrix = this.state.overState;
		} else {
			matrix = this.getResult();
		}
		return (
			<div className = {style.matrix}>{
				matrix.map((p, k1) => (<p key={k1}>
					{
						p.map((e, k2) => <b
							className={classnames({
								c: e === 1,
								d: e === 2
							})}
							key = {k2}
							></b>)
					}
				</p>))
			}
			</div>
		)
	}
}