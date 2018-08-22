import React, { Component } from 'react';
import {connect} from 'react-redux';
import style from '../css/index';
import Cnum from './cnum';
import Header from './lib/header';
class Index extends Component {
    render() {
        return (
            <div className={style.index}>
               <Header></Header>
                <Cnum {...this.props}/>
            </div>
        );
    };
};
export default connect((state)=>state)(Index);
