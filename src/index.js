require('dotenv').config()
const express = require('express')
const logger = require('morgan')
const cors = require('cors')
const helmet = require('helmet')
const app = express()
app.use(logger('dev')); //logging
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

// security
app.enable('trust proxy');
app.use(helmet());

const PORT = process.env.PORT || 3000

app.get('/', (req, res) => {res.send('Dummy value')})

app.listen(PORT, () => console.log('example server is running on ' + PORT))
