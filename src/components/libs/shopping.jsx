import React, { Component } from 'react'

import Style from "./shopping.css"
import Car from "./car.jsx"
import Allcar from "./allcar.jsx"

export default class Shopping extends Component {
 
    render() {
        return (
            <div className={Style.shopping}>
                <div className={Style.header}>
                    购物车
                </div>
                 <Car></Car>
                {/* <p>购物车</p> */}
                <Allcar></Allcar>  
            </div>
        )
    }
}
