const request = require('supertest')
const express = require('express')
const router = require('../exercises/express-get')

const app = new express()
app.use('/', router.router)

describe('Express GET diagnostic', function () {
	test('Send back a string of `hello world`', async () => {
		const res = await request(app).get('/')
		expect(res.statusCode).toBe(200)
		expect(res.text).toEqual('hello world')
	})

	test('Greet person', async () => {
		const res = await request(app).get('/Arya')
		expect(res.statusCode).toBe(200)
		expect(res.text).toEqual('hello Arya')
	})

	test('Multiply by two', async () => {
		const res = await request(app).get('/cal/4')
		expect(res.statusCode).toBe(200)
		expect(res.text).toEqual('8')
	})
})
