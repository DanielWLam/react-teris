import React from 'react';
import classnames from 'classnames';

import style from './index.less';
import Decorate from '../components/decorate';

class App extends React.Component {
  render() {
    return (
      <div className={style.app}>
				<div className={classnames({ [style.rect]: true })}>
					<Decorate />
	        <div className={style.screen}>
						<div className={style.panel}>
						</div>
	        </div>
      	</div>
      </div>
    );
  }
}
export default App;
