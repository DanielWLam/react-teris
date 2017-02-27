import React from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames';

import Decorate from '../components/decorate';
import Matrix from '../components/matrix';
import Point from '../components/point';
import Number from '../components/number';
import Next from '../components/next';
import Pause from '../components/pause';
import Keyboard from '../components/keyboard';
import style from './index.less';

import { transform } from '../unit/const';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			w: document.documentElement.clientWidth,
			h: document.documentElement.clientHeight
		}
	}
	componentwillMount() {
		window.addEventListener('resize', this.resize.bind(this), true);
	}
	resize() {
		this.setState({
			w: document.documentElement.clientWidth,
			h: docuemnt.documentElement.clientHeight
		})
	}
	render() {
		let filling = 0;
		const size = (() => {
			const w = this.state.w;
			const h = this.state.h;
			const ratio = h / w;
			let scale;
			let css = {};
			if (ratio < 1.5) {
				scale = h / 960;
			} else {
				scale = w / 640;
				filling = ( h - (960 * scale )) / scale / 3;
				css = {
					paddingTop: Math.floor(filling) + 42,
					paddingBottom: Math.floor(filling),
					marginTop: Math.floor(-480 - (filling * 1.5))
				}
			}
			css[transform] = `scale(${scale})`;
			return css;
		})();
		return(
			<div className={style.app}
				style={size}
			>
				<div className={classnames({ [style.rect]: true, [style.drop]: this.props.drop })}>
					<Decorate></Decorate>
					<div className={style.screen}>
						<div className={style.panel}>
							<Matrix
								matrix={this.props.matrix}
								cur={this.props.cur}
								reset={this.props.reset}
							>
							</Matrix>
							<div className={style.state}>
								<Point cur={!!this.props.cur}
									point={this.props.point}
									max={this.props.max}
								></Point>
								<p>{ this.props.cur ? '消除行' : '起始行'}</p>
								<Number number={this.props.cur ? this.props.clearLines : this.props.startLines}></Number>
								<p>级别</p>
								<Number
									number={this.props.cur ? this.props.speedRun : this.props.speedStart}
									length={1}
								></Number>
								<p>下一个</p>
								<Next data={this.props.next}></Next>
								<div className={style.bottom}>
									
									<Pause data={this.props.pause}></Pause>
									<Number time></Number>
								</div>
							</div>
						</div>
					</div>
				</div>
				<Keyboard filling={filling} keyboard={this.props.keyboard}></Keyboard>
			</div>
		)
	}
}

App.propTypes = {
	matrix: React.PropTypes.object.isRequired,
	cur: React.PropTypes.object,
	next: React.PropTypes.string.isRequired,
	keyboard: React.PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
	matrix: state.get('matrix'),
	cur: state.get('cur'),
	next: state.get('next'),
	pause: state.get('pause'),
	keyboard: state.get('keyboard')
})

export default connect(mapStateToProps)(App);