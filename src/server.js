import express from 'express'
import { connect } from './config/mongoDB'

const port = 5000
const app = express()

connect()

app.get('/', (req, res) => {
    res.send('hello world')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
