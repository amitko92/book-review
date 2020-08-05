const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('express')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

app.get('/status', (req, res) =>{
    res.send({
        massage: 'hello world!'
    })
})

app.listen(process.env.PORT || 8081)