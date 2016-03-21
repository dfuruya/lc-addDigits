/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    // base case: if num is single digit
	if (num < 10) {
	    // return itself
		return num;
	// recursive case: if num is more than one digit
	} else {
	    // convert num to string, and split into array
		var arr = num.toString().split('');
		// initialize temp value to be passed into recursive function
		var temp = 0;
		// iterate through each digit
		for (var i = 0; i < arr.length; i++) {
		    // sum all digits
			temp += Number(arr[i]);
		}
		// recursion with new sum
		return addDigits(temp);
	}
};
