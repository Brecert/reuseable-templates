import fmt from '../src'
import * as assert from 'assert'

describe('fmt', () => {
	it("formats template literals", () => {
		const literal = fmt`${String}`
		assert.deepEqual(literal("hi"), "hi")
	})

	it("should be reuseable", () => {
		const literal = fmt`${String}`
		assert.deepEqual(literal("hi"), "hi")
	})

	it("should stringify json and objects", () => {
		const literal = fmt`${JSON} ${Object}`
		assert.deepEqual(literal("hi", { a: false }), '"hi" {"a":false}')
	})

	it("should correctly handle numbers", () => {
		const literal = fmt`${Number} ${Number} ${Number} ${Number}`

		assert.deepEqual(literal(0, "10", 20.20, "30.33"), '0 10 20.2 30.33')
	})

	it("should interpolate non-template arguments", () => {
		const non = 'non'
		const literal = fmt`1 ${non} 2 ${String} 3 ${non} 4 ${String}`

		assert.deepEqual(literal("str", "str2"), "1 non 2 str 3 non 4 str2")
	})
})