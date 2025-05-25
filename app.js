const { log } = require('console');
const express = require('express')
const app = express();
const port = 8001;
const path = require('path')
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))
// console.log(path.join(__dirname , 'views') );
app.use(express.urlencoded())

var data = []

app.get('/', function (req, res) {
    return res.render('index',
        { "record": data }
    );
})

app.post('/add', function (req, res) {
    console.log(req.body)
    let obj = {
        name : req.body.name,
        age : req.body.age
    }
    data.push(obj)
    return res.redirect('/');
})

app.get('/deleteData/:pid', (req,res)=>{
    data.splice(req.params.pid,1)
    return res.redirect('/');
})

app.get('/updateData', (req,res) =>{
    console.log(req.query)
}) 

app.listen(port, (err) => {
    err ? console.log(err) : console.log("your server is running on :",port)
})
