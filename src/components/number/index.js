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
	return num < 10 ? `0${num}`.split('') : `${num}`.split('')
}

export default class Number extends React.Component {
	constructor() {
		super();
		this.state = {
			time_count: false,
			time: new Date()
		}
	}
	componentWillMount() {
		if (!this.props.time) {
			return ;
		}
		const clock = () => {
			const count = +Number.timeInterval;
			Number.timeInterval = setTimeout(() => {
				this.setState({
					time: new Date(),
					time_count: count
				});
				clock();
			}, 1000);
		};
		clock();
	}
	shouldComponentUpdate( { number }) {
		if (this.props.time) {
			if (this.state.time_count !== Number.time_count) {
				if (this.state.time_count !== false) {
					Number.time_count = this.state.time_count;
				}
				return true;
			}
			return false;
		}
		return this.props.number !== number;
	}
	render() {
		if (this.props.time) {
			const now = this.state.time;
			const hour = formate(now.getHours());
			const min = formate(now.getMinutes());
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

Number.statics = {
	timeInterval: null,
	time_count: null
}

Number.propTypes = {
	number: React.PropTypes.number,
	length: React.PropTypes.number,
	time: React.PropTypes.bool
}

Number.defaultProps = {
	length: 6
}