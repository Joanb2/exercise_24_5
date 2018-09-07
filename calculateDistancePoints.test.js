const assert = require('assert');
const calculateDistancePoints = require('./calculateDistancePoints');

describe('calculateDistancePoints', () => {
	describe('normal', () => {
		it('should return 66', () => {
			const actual = calculateDistancePoints(101, 'normal', 98);
			const expected = 66;

			assert.equal(actual, expected);
		});
		it('should return 56', () => {
			const actual = calculateDistancePoints(96, 'normal', 98);
			const expected = 56;

			assert.equal(actual, expected);
		});
	});
	describe('big', () => {
		it('should return 70.8', () => {
			const actual = calculateDistancePoints(126, 'big', 120);
			const expected =  70.8;

			assert.equal(actual, expected);
		});
		it('should return 78', () => {
			const actual = calculateDistancePoints(130, 'big', 120);
			const expected = 78;

			assert.equal(actual, expected);
		});
	});
	describe('mammoth', () => {
		it('should return 187.2', () => {
			const actual = calculateDistancePoints(256, 'mammoth', 200);
			const expected = 187.2;

			assert.equal(actual, expected);
		});
		it('should return 132.6', () => {
			const actual = calculateDistancePoints(210.5, 'mammoth', 200);
			const expected = 132.6;

			assert.equal(actual, expected);
		});
	});
});