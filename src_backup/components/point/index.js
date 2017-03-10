import React from 'react';
import Number from '../number';

export default class Point extends React.Component {
	constructor() {
		super();
		this.state = {
			label: 'MAX',
			number: 0
		}
	}
	render() {
		return (
			<div>
				<p>{ this.state.label }</p>
				<Number number={ this.state.number }></Number>
			</div>
		)
	}
}