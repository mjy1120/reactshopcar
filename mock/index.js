
var list=require("./data/index.json")
// 接口的开放
module.exports=function(app){
    app.get("/list",function(req,res,next){
        res.send(list)
    })
}