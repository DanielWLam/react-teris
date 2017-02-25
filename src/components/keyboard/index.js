import React from 'react';
import Immutable from 'immutable';
import style from './index.less';
import Button from './button';
import store from '../../store';
import todo from '../../control/todo';
import { i18n, lan } from '../../unit/const';

export default class Keyboard extends React.Component {
	render() {
		const keyboard = this.props.keyboard;
		return (
			<div className={style.keyboard} style={{marginTop: 20 + this.props.filling}}>
				<Button
					color="blue"
					size="s1"
					top={180}
					left={374}
					label={i18n.down[lan]}
					arrow="translate(0, -71px) rotate(180deg)"
					active={keyboard.get('down')}
					ref={(c) => { this.dom_down = c; }}
				></Button>
			</div>
		)
	}
}