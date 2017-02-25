import React from 'react';
import { connect } from 'react-redux';
import Decorate from '../components/decorate';
import Matrix from '../components/matrix';
import Point from '../components/point';
import Number from '../components/number';
import Next from '../components/next';
import Music from '../components/music';
import Pause from '../components/pause';
import Keyboard from '../components/keyboard';
import style from './index.less';

class App extends React.Component {
	constructor() {
		super();
	}
	render() {
		let filling = 0;
		return(
			<div className={style.app}>
				<div>
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
									<Number></Number>
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
	// music: state.get('music'),
	pause: state.get('pause'),
	keyboard: state.get('keyboard')
})

export default connect(mapStateToProps)(App);