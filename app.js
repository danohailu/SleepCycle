const express = require('express');
const app = express();



app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/js', express.static(__dirname + 'public/js'))
app.use('/img', express.static(__dirname + 'public/img'))


app.get('',(req,res)=>{
    res.sendFile(__dirname + '/views/index.html')
})



app.get('/',(req,res)=>{
    res.sendFile('/views/index.html');
})
app.listen(3000,()=>{console.log(`running on http://localhost:3000`)});