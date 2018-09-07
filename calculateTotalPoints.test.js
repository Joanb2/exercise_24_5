const assert = require('assert');
const calculateTotalPoints = require('./calculateTotalPoints');

describe('calculateTotalPoints', () => {
	describe('normal', () => {
		it('should return 119.4', () => {
			const actual = calculateTotalPoints(105, 'normal', 98, [18.5, 18, 18, 18.5, 17.5], 3.2, -12.3);
			const expected = 119.4;

			assert.equal(actual, expected);
		});
		it('should return 113.9', () => {
			const actual = calculateTotalPoints(104.5, 'normal', 98, [18, 18, 18.5, 18.5, 18.5], 0, -14.1);
			const expected = 113.9;

			assert.equal(actual, expected);
		});
		it('should return 120.2', () => {
			const actual = calculateTotalPoints(108, 'normal', 98, [18, 18.5, 18.5, 18.5, 19], 0, -15.3);
			const expected = 120.2;

			assert.equal(actual, expected);
		});
	});
	describe('big', () => {
		it('should return 137.3', () => {
			const actual = calculateTotalPoints(134, 'big', 120, [19, 20, 19.5, 19, 18.5], 0, -5.4);
			const expected = 137.3;

			assert.equal(actual, expected);
		});
		it('should return 109.6', () => {
			const actual = calculateTotalPoints(121, 'big', 120, [17.5, 17, 17, 17, 17.5], 0, -3.7);
			const expected = 109.6;

			assert.equal(actual, expected);
		});
		it('should return 125.2', () => {
			const actual = calculateTotalPoints(125, 'big', 120, [18, 18.5, 18, 18.5, 18.5], 0, 1.2);
			const expected = 125.2;

			assert.equal(actual, expected);
		});
	});
	describe('mammoth', () => {
		it('should return 173.8', () => {
			const actual = calculateTotalPoints(205, 'mammoth', 200, [17, 17, 17.5, 17, 17.5], 0, -3.7);
			const expected = 173.8;

			assert.equal(actual, expected);
		});
		it('should return 201.4', () => {
			const actual = calculateTotalPoints(228.5, 'mammoth', 200, [18, 18.5, 19, 19, 18.5], 0, -8.8);
			const expected = 201.4;

			assert.equal(actual, expected);
		});
		it('should return 208.3', () => {
			const actual = calculateTotalPoints(227.5, 'mammoth', 200, [18, 18.5, 17.5, 18.5, 18.5], 8.7, -8.4);
			const expected = 208.3;

			assert.equal(actual, expected);
		});
	});
});