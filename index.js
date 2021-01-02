const express = require("express")
const morgan = require('morgan')
const Database = require("@replit/database")
const app = express()
app.use(morgan(':method :url :status'))
const db = new Database()

db.set("key", "value").then(() => {
  
  
});

app.get("/",async (req,res)=>{
  res.send(await db.get("key"))
})

app.listen(8080)
