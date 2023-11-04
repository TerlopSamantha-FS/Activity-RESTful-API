const express = require('express')
const app = express()
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
const productRouter = require('./routes/Products')
app.set('views', __dirname + '/templates')
app.set('view engine', 'twig')

app.get('/', (req, res) => {
    res.render("home", { name: 'World!', 'users':[
        { name: 'Samantha Terlop', email: 'slterlop@student.fullsaid.edu'},
        { name: 'Sahelby Tufail', email: 'stufail@student.fullsaid.edu'},
        { name: 'John Doe', email: 'jdoe@student.fullsaid.edu'},
    ]})
})


app.use("/products", productRouter)

app.listen(3000)
