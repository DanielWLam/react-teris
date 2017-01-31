import React from 'react';
import cn from 'classnames';
import style from './index.less';

export default class Decorate extends React.Component {
	shouldComponentUpdate() {
		return false;
	}
	render() {
		return (
			<div className={style.decorate}>
				<div className={style.topBorder}>
					<span className={cn(['l', style.mr])} style={{width: 40 + 'px'}}></span>	
					<span className={cn(['l', style.mr])}></span>	
					<span className={cn(['l', style.mr])}></span>	
					<span className={cn(['l', style.mr])}></span>	
					<span className={cn(['l', style.mr])}></span>
					<span className={cn(['r', style.ml])} style={{width: 40 + 'px'}}></span>	
					<span className={cn(['r', style.ml])}></span>	
					<span className={cn(['r', style.ml])}></span>	
					<span className={cn(['r', style.ml])}></span>	
					<span className={cn(['r', style.ml])}></span>	
				</div>
				<h1>俄罗斯方块</h1>
				<div className={style.view}>
					<b className="c" />
		          <div className="clear" />
		          <b className="c" />
		          <b className="c" />
		          <div className="clear" />
		          <em />
		          <b className="c" />
		          <p />
		          <em />
		          <b className="c" />
		          <div className="clear" />
		          <b className="c" />
		          <b className="c" />
		          <div className="clear" />
		          <em />
		          <b className="c" />
		          <p />
		          <b className="c" />
		          <b className="c" />
		          <b className="c" />
		          <b className="c" />
		          <p />
		          <b className="c" />
		          <div className="clear" />
		          <b className="c" />
		          <b className="c" />
		          <div className="clear" />
		          <b className="c" />
		          <p />
		          <b className="c" />
		          <b className="c" />
		          <div className="clear" />
		          <b className="c" />
		          <div className="clear" />
		          <b className="c" />
		          <p />
		          <em />
		          <b className="c" />
		          <div className="clear" />
		          <em />
		          <b className="c" />
		          <div className="clear" />
		          <em />
		          <b className="c" />
		          <div className="clear" />
		          <em />
		          <b className="c" />
				</div>
			</div>
		)
	}
}