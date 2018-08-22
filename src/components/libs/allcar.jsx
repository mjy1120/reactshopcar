import React, { Component } from 'react'
import Store from "../../redux"
import Style from "./shopping.css"
export default class Allcar extends Component {
    constructor(props){
        super(props)
        this.state={
            allNum:0,
            allCount:0
        }
        Store.subscribe(()=>{
            this.computed()
        })
    }
     computed(){
        let num=0
        let count=0
        Store.getState().shoppingList.forEach(i => {
            if(i.state){
                num+=i.cont
                count+=parseInt(i.cont)*parseInt(i.pice)
            }   
        });
        this.setState({
            allNum:num,
            allCount:count
        })
    }
   
    
    render() {
        return (
            <div className={Style.footer}>
                  
                    <ul>
                       
                        <li>
                            总价:<span>{this.state.allCount}</span>
                        </li>
                        <li>
                             总个数:<span>{this.state.allNum}</span>
                        </li>
                       
                    </ul>
              
            </div>
        )
    }
}
