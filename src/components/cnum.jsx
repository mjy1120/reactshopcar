import React, { Component } from 'react';
import {actions,ADDNUM} from '../redux';
export default class Cnum extends Component {
    handle(){
        this.props.dispatch(actions[ADDNUM]());
    };
    render() {
        return (
            <div>
               {this.props.children}
            </div>
        );
    };
};
