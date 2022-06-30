const express = require('express')
const router = express.Router()
/*
=============== Express GET Method  ==================
SERVER: To run server use command `nodemon server.js`

GOAL: Read each question and write code to complete each task
      given. Do not change starter code or function names.

TEST: To test run the commands `npm run test` in your terminal
      at the root of this directory.(express-get-diagnostic)
      Don't worry about capitalization.
*/

/*
Question 1

Send a response containing a string of `hello world`
*/
function helloWorld(req, res) {
	res.send('hello world')
}
router.get('/', helloWorld)

/*
Question 2

Using the request param of `:name`, send a response containing `hello :name` making sure to replace the `:name` with the request param. 
*/
function sendBackParams('/:name', (req, res) => {
	res.send(`hello ${req.params.name}`)
}
router.get('/:name', sendBackParams)

/*
Question 3

Using the request param of `:num`, mulitply that number by 2 then send a response of the product.
*/
function mulitplyByTwo('/:num', (req, res) => {
	res.send(`${req.params.num * 2}`)
}
router.get('/cal/:num', mulitplyByTwo)

module.exports = {
	helloWorld,
	sendBackParams,
	mulitplyByTwo,
	router,
}
