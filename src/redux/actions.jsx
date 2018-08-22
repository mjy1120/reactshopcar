import {
    ADDNUM,
    CHANGESHOPLIST
} from "./type"

export default {
      addNum(item){
        return{
            type:ADDNUM,
            text:item
        }
    },
    CHANGESHOPLIST(item){
        return{
            type:CHANGESHOPLIST,
            text:item
        }
    },
    changeShopItem(item){
        return{
            type:"CHANGESHOPITEM",
            text:item
        }
    },
    changeShopItemState(item){
        return {
            type:"CHANGESHOPITEMSTATE",
            text:item
        }
    },
    changeShopItemNum(item){
        return {
            type:"CHANGESHOPITEMNUM",
            text:item
        }
    },
    changeShopCarClass(item){
        return {
            type:"CHANGESHOPCARCLASS",
            text:item
        }
    },
    changeShopSyncCarClass(item){
        return (dispatch)=>{
               fetch("/list").then(res=>{
                return res.json()
            }).then(data=>{
                console.log(data)
                dispatch(actions.changeShopCarClass(data))
            })
        }
    }
};
