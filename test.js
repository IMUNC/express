const express = require('express')
const app = express()
const router = require('./router')
app.use(router)
app.listen(8000,()=>{
console.log('ok 8000is on my wany');
})