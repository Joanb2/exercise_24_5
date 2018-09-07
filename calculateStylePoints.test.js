const assert = require('assert');
const calculateStylePoints = require('./calculateStylePoints');

describe('calculateStylePoints', () => {
	it('should return 50', () => {
		const actual = calculateStylePoints([16, 15, 17.5, 18, 16.5]);
		const expected = 50;

		assert.equal(actual, expected);
	});
	it('should return 54.5', () => {
		const actual = calculateStylePoints([15.5, 17, 20, 18.5, 19]);
		const expected = 54.5;

		assert.equal(actual, expected);
	});
	it('should return 45.5', () => {
		const actual = calculateStylePoints([16, 15, 14.5, 14, 17]);
		const expected = 45.5;

		assert.equal(actual, expected);
	});
	it('should return 50', () => {
		const actual = calculateStylePoints([15, 16, 18, 16.5, 17.5]);
		const expected = 50;

		assert.equal(actual, expected);
	});
	it('should return 52.5', () => {
		const actual = calculateStylePoints([17, 18, 19.5, 17.5, 17]);
		const expected = 52.5;

		assert.equal(actual, expected);
	});
	it('should return 48', () => {
		const actual = calculateStylePoints([15, 16, 15.5, 17, 16.5]);
		const expected = 48;

		assert.equal(actual, expected);
	});
})