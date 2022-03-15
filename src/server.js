import express from 'express'
import { connect } from './config/mongoDB'
import { env } from '*/config/environment'

const port = env.PORT
const HOST = env.HOSTNAME
const app = express()

connect()

app.get('/', (req, res) => {
    res.send('hello world')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
