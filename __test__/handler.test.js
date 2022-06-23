describe('Test Handlers', function () {
	test('Send back a string of `hello world`', () => {
		const req = {}
		const res = {
			text: '',
			send: function (input) {
				this.text = input
			},
		}
	})

	test('Greet person', () => {
		const req = { params: { name: 'Arya' } }
		const res = {
			text: '',
			send: function (input) {
				this.text = input
			},
		}
	})

	test('Multiply by tow', () => {
		const req = { params: { num: '4' } }
		const res = {
			text: '',
			send: function (input) {
				this.text = input
			},
		}
	})
})
