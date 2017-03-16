import React from 'react';
import style from './index.less';

import Decorate from '../components/decorate';

class App extends React.Component {
  render() {
    return (
      <div className={style.app}>
        <Decorate />
      </div>
    );
  }
}
export default App;
