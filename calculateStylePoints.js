const calulateStylePoints = (styleNotes) => {
	const maxVal = styleNotes.indexOf(Math.max(...styleNotes));
	styleNotes.splice(maxVal, 1);

	const minVal = styleNotes.indexOf(Math.min(...styleNotes));
	styleNotes.splice(minVal, 1);

	const sum = styleNotes.reduce((acc, current) => acc + current);
	return sum;

};

module.exports = calulateStylePoints;