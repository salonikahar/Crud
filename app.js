const { log } = require('console');
const express = require('express')
const app = express();
const port = 8001;
const path = require('path')
const db = require('./config/db')

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))
app.use(express.urlencoded())

let data = require('./models/empModel');
const dataEmp = require('./models/empModel');

app.get('/', async function (req, res) {

    let empData = await dataEmp.find();
    
    return res.render('index',
        { "record": empData }
    );
})

app.post('/add',async function (req, res) {
    // console.log(req.body)
    // data.push(req.body)
    await data.create(req.body)

    return res.redirect('/');
})

app.get('/deleteData/:pid', async(req, res) => {

    let empId = req.params.pid;

    // data.splice(req.params.pid, 1)
    await data.findByIdAndDelete(empId)
    return res.redirect('/');
})

app.get('/updateData',async (req, res) => {
    // console.log(req.query.position);
    let index = req.query.position;
    let singleData = await data.findById(index);

    return res.render('editform', {
        singleData ,
        index
    })
})

app.post('/editForm/:id', async (req, res) => {
    // data[req.body.index] = req.body;
    await data.findByIdAndUpdate(req.params.id , req.body);
    return res.redirect('/');
})

app.listen(port, (err) => {
    err ? console.log(err) : console.log("your server is running on :", port)
})
