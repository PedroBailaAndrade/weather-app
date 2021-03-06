// if (process.env.NODE_ENV !== 'production' ) {
//   require('dotenv').config()
// }
//   require('dotenv').config()
// }//   require('dotenv').config()
// }


const DARKSKY_API_KEY = process.env.DARKSKY_API_KEY
const express = require('express')
const app = express()

app.use(express.json())
app.use(express.static('public'))

app.post('/weather', (req, res) => {
  `https://api.darksky.net/forecast/${DARKSKY_API_KEY}/${req.body.latitude},${req.body.longitude}`
  console.log(req.body)
})

// app.listen(3000, () => {
//   console.log('Server Started')
// })
