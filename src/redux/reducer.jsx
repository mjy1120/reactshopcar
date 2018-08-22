import {ADDNUM,CHANGESHOPLIST} from "./type"

let initState={
    num:0,
    shoppingList:[],
    carList:[]
};

export default (state=initState,actions)=>{
    let {type,text}=actions;
     switch (type) {
        case ADDNUM:{
            let Obj={...state,...{num:text}}
            return Obj
        }   
        case CHANGESHOPLIST:{
            let Obj={...state,...{shoppingList:text}}
            return Obj
        } 
        case 'CHANGESHOPITEM':{
            let arr=state.shoppingList.map((i)=>{
                if(i.id==text.id){
                    return text
                }else{
                    return i
                }
            })
            let Obj={...state,...{shoppingList:arr}}
            return Obj
        } 
         case 'CHANGESHOPITEMSTATE':{
            console.log(text)
            let arr=state.shoppingList.map((i)=>{
                 i.state=text
               return i
            })
            let obj={...state,...{shoppingList:arr}}
            return obj
        }
        case 'CHANGESHOPITEMNUM':{
            console.log(text)
            let arr=state.shoppingList.map((i)=>{
                if(i.id==text.id){
                    return text
                }else{
                    return i
                }
            })
            let obj={...state,...{shoppingList:arr}}
            return obj
        }
        case 'CHANGESHOPCARCLASS':{
            console.log(text)
            let obj={...state,...{carList:text}}
            console.log(obj)
            return obj
        }
        default:
            return state
    }
};
