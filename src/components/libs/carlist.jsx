import React, { Component } from 'react'
import Store,{actions} from "../../redux"
import Style from "./shopping.css"
export default class CarList extends Component {
    constructor(props){
        super(props)
        this.state={
            item:this.props.data
        }
    }
    changeHandle(){
        let obj={
            ...this.state.item,
            ...{state:!this.state.item.state}
        }
        console.log(obj)
        this.setState({
            item:obj
        },()=>{
            console.log(this.state.item)
            Store.dispatch(actions.changeShopItem(this.state.item))
        })
        
    }
     changeNum(type){
        if(type=="+"){
             console.log(this.state.cont)
            let obj={...this.state.item,...{cont:this.state.item.cont+1}}
            console.log(obj)
            Store.dispatch(actions.changeShopItemNum(obj))
        }else{
            if(this.state.item.cont>1){
                let obj={...this.state.item,...{cont:this.state.item.cont-1}}
                console.log(obj)
                Store.dispatch(actions.changeShopItemNum(obj))
            }
           
        }
    }
    componentWillReceiveProps(props){
        this.setState({
            item:props.data

        })
    }   
    render() {
        return (
            <li>
                <input type="checkbox" name="" id="" onChange={this.changeHandle.bind(this)} checked={this.state.item.state}/>
                <dl>
                    <dt><img src={this.state.item.url} alt=""/></dt>
                    <dd>
                        <h3>{this.state.item.name}</h3>
                        <div className={Style.tit}>
                            <p>{this.state.item.pice}{this.state.item.city}</p>
                            <ul>
                                <li onClick={()=>this.changeNum("-")}>-</li>
                                <li>{this.state.item.cont}</li>
                                <li onClick={()=>this.changeNum("+")}>+</li>
                            </ul>
                        </div>
                    </dd>
                </dl>
            </li>
        )
    }
}
