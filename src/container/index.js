import React from 'react';
import { connect } from 'react-redux';
import Decorate from '../components/decorate';
import Matrix from '../components/matrix';
import Point from '../components/point';
import Number from '../components/number';
import Next from '../components/next';
import style from './index.less';

class App extends React.Component {
	constructor() {
		super();
	}
	render() {
		console.log(this.props)
		return(
			<div>
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
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

const mapStateToProps = (state) => ({
	matrix: state.get('matrix'),
	cur: state.get('cur'),
	next: state.get('next')
})

export default connect(mapStateToProps)(App);