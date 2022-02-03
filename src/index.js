

module.exports = function towelSort (matrix) {
	let result = [];
	if(matrix) {
		for(let i = 0; i < matrix.length; i++) {
			let array = matrix[i];
			while(array.length > 0) {
				if(i%2 != 0)
					result.push(array.pop());
				else result.push(array.shift());
			}
		}
	}
	return result;
}
