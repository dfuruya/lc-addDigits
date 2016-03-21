/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
	// setting up object to store frequency of numbers in array
	var obj = {};
	// iterate through array
	for (var i = 0; i < nums.length; i++) {
    // if the key/value exists in the object,
		if (obj[nums[i]]) {
	    // set flag to 0 to indicate that it was already in the array
			obj[nums[i]] = 0;
		} else {
	    // otherwise set to 1 to indicate that it was only in the array once
			obj[nums[i]] = 1;
		}
	}
	// iterate through object
	for (var key in obj) {
		// if the number was in the array only once
		if (obj[key] !== 0) {
			// return the number (key is a string and must be converted)
			return Number(key);
		}
	}
};