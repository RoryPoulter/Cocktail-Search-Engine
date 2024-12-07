const express = require('express')
const app = express()
app.use(express.static('client'))

app.get('/', function(req, resp){
    resp.sendFile('./static/index.html')
})

app.listen(8090)