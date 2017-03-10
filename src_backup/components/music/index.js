import React from 'react';
import cn from 'classnames';
import style from './index.less';

export default class Music extends React.Component {
	shouldComponentUpdate({ data }) {
		return data !== this.props.data;
	}
	render() {
		return (
			<div
				className={cn({
					bg: true,
					[style.music]: true, /*es6 对象属性表达式，用[]括起来*/
					[style.c]: !this.props.data
				})}
			>
			</div>
		)
	}
}

Music.propTypes = {
	data: React.PropTypes.bool.isRequired
}