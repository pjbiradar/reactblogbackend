const express=require("express");
const app=express()
const reactblogroute=require('./router/reactblogroute')
const cors=require("cors")
app.use(cors())

const PORT = process.env.PORT || 8000;


app.use("/api/v1",reactblogroute)
app.listen(PORT,()=>{
    console.log("application successed");
})
