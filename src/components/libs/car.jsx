import React, { Component } from 'react'
import axios from "axios"
import CarList from "./carlist.jsx"
import Store, { actions } from "../../redux"
import Style from "./shopping.css"
export default class Car extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: Store.getState().shoppingList,
            allState: this.initAllTest()
        }
        Store.subscribe(() => {
            this.subscribeHandle()
        })
    }
    componentDidMount() {
        axios.get("/list").then((res) => {
            Store.dispatch(actions.CHANGESHOPLIST(res.data))
        })
    }
    subscribeHandle() {
        this.setState({
            data: Store.getState().shoppingList,
            allState: this.initAllTest()
        })
    }
    initAllTest() {
        console.log(Store.getState().shoppingList)
        let allState = Store.getState().shoppingList.every((i) => {
            return i.state
        })
        return allState
    }
    checkedAll() {
        console.log(this.state.allState)
        if (!this.state.allState) {
            Store.dispatch(actions.changeShopItemState(true))
        } else {
            Store.dispatch(actions.changeShopItemState(false))
        }
    }
    render() {
        let el = this.state.data.map((item, index) => {
            return <CarList data={item} key={item.id}></CarList>
        })
        return (
            <div className={Style.list}>
                <p>全选: <input type="checkbox" onChange={this.checkedAll.bind(this)} checked={this.state.allState} /></p>
                <ul>
                    {el}
                </ul>
            </div>
        )
    }
}
