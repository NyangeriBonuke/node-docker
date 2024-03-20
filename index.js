const express = require('express')
const app = express()

app.get("/", (req, res) => {
	res.send("<h2>Hi There</h2>")
})

app.listen('8000', () => {
	console.log('Listening on port 8000')
})