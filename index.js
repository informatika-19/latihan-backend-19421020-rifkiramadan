const bodyParser = require('body-parser')
const express = require('express')
const app = express()
constbodyParser = require('body-parser')

app.use(bodyParser.json({
extend: true,
limit: '20mb'
}))

app.use(bodyParser.urlencoded({
    extend: true,
    limit: '20mb'
    }))
 
app.get('/', (req, res) => {
  res.send('Mr.Broadcast')
})
app.get('/profile/:username/:id', (req, res) => {
    console.log(req.params)
    res.send('Username Anda ' +req.params.username)
}) 
app.get('/daerah/:kota/:id', (req, res) => {
    const kota = req.params.kota
    const idkota = req.params.id
    res.send('daerah Anda ' + kota + ' Id Kota = ' + idkota )

}) 

app.post('/register', (req, res) => {
console.log(req,body)
req.json(req.body)
})

app.listen(3000, () => {
    console.log('Server Started')
})