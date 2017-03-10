import React from 'react';
import style from './index.less';
const blockShape = {
  I: [
    [1, 1, 1, 1],
  ],
  L: [
    [0, 0, 1],
    [1, 1, 1],
  ],
  J: [
    [1, 0, 0],
    [1, 1, 1],
  ],
  Z: [
    [1, 1, 0],
    [0, 1, 1],
  ],
  S: [
    [0, 1, 1],
    [1, 1, 0],
  ],
  O: [
    [1, 1],
    [1, 1],
  ],
  T: [
    [0, 1, 0],
    [1, 1, 1],
  ],
};

const xy = {
	I: [1, 0],
	L: [0, 0],
	J: [0, 0],
	Z: [0, 0],
	S: [0, 0],
	O: [0, 1],
	T: [0, 0]
}

const empty = [
	[0, 0, 0, 0],
	[0, 0, 0, 0]
];

export default class Next extends React.Component {
	constructor() {
		super();
		this.state = {
			block: empty
		}
	}
	componentWillMount() {
		this.build(this.props.data);
	}
	componentWillReceiveProps(nextProps) {
		this.build(nextProps.data);
	}
	shouldComponentUpdate(nextProps) {
		return nextProps.data !== this.props.data;
	}
	build(type) {
		console.log(type)
		const shape = blockShape[type];
		const block = empty.map(e => ([...e]));
		shape.forEach((m, k1) => {
			m.forEach((n, k2) => {
				if (n) {
					block[k1 + xy[type][0]][k2 + xy[type][1]] = 1;
				}
			})
		})
		this.setState({ block });
	}
	render() {
		return (
			<div className = {style.next}>
				{
					this.state.block.map((arr, k1) => {
						<div key={k1}>
							{
								arr.map((e, k2) => {
									<b className={e ? 'c' : ''} key={k2}></b>
								})
							}
						</div>
					})
				}
			</div>
		)
	}
}

Next.propTypes = {
	data: React.PropTypes.string
}