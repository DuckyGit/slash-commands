const express = require('express') // Require Express here.
const app = express()
const port = 3000 // localhost:yourporthere

app.get('/', (req, res) => {
  res.send('Here is your website. Kinda...') // Your Website.
})

app.listen(port, () => { // Open Website and console log saying that its ready.
  console.log(`Website at http://localhost:${port} and your bot is ready! Do CTRL+C to stop running the bot and website which would be sad.`)
})
require('./bot.js');