import React from 'react';
import style from './index.less';

export default class Decorate extends React.Component{
    constructor() {
        super();
    }
    render() {
        return(
            <div classname={style.box}>
                <div classname={style.top}>
                    
                </div>
                <div classname={style.right}>

                </div>
                <div classname={style.bottom}>

                </div>
                <div classname={style.left}>

                </div>
            </div>
        )
    }
}