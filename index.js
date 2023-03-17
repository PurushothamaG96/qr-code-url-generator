const express = require("express")
const app = express()
const QRCode = require("qrcode")
const cors = require("cors")

app.use(cors())
app.get("/puru/url",async (req, res)=>{
    try{
        const data=await QRCode.toDataURL(req.query.url)
        res.status(200).json(data)
    }
    catch(e){
        console.log(e)
    }
})

app.listen(5000, (err)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log("Server is up at 5000")
    }
})