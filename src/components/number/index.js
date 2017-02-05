import React from 'react';
import cn from 'classnames';
import style from './index.less';

const render = (data) => (
	<div className={style.number}>
		{
			data.map((e, k) => (
				<span className={cn(['bg', style[`s_${e}`]])} key={k}></span>
			))
		}		
	</div>
);

const formate = (num) => {
	num < 10 ? `0${num}`.split('') : `${num}`.split('')
}

export default class Number extends React.Component {
	constructor() {
		super();
		this.state = {
			time_count: false,
			time: new Date()
		}
	}
	render() {
		if (this.props.time) {
			const now = this.state.time;
			const hour = formate(now.getHours);
			const min = formate(now.getMinutes);
			const sec = now.getSeconds() % 2;
			const t = hour.concat(sec ? 'd' : 'd_c', min);
			return (render(t));
		}

		const num = `${this.props.number}`.split('');
		for (let i = 0, len = this.props.length - num.length; i < len; i++) {
			num.unshift('n');
		}
		return (render(num));
	}
}

Number.propTypes = {
	number: React.PropTypes.number,
	length: React.PropTypes.number,
	time: React.PropTypes.bool
}

Number.defaultProps = {
	length: 6
}