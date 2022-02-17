const express=require("express");
const app=express()
const reactblogroute=require('./router/reactblogroute')
const cors=require("cors")
app.use(cors())

app.use("/api/v1",reactblogroute)
app.listen(8000,()=>{
    console.log("application successed");
})
