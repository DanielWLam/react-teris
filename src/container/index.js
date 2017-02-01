import React from 'react';
import { connect } from 'react-redux';
import Decorate from '../components/decorate';
import Matrix from '../components/matrix';
import Point from '../components/point';
import style from './index.less';

class App extends React.Component {
	constructor() {
		super();
	}
	render() {
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
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

const mapStateToProps = (state) => ({
	matrix: state.get('matrix')
})

export default connect(mapStateToProps)(App);