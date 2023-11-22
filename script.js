
function firstNonRepeatedChar(str) {
 // Write your code here
	   const charCount = new Map();

    // Iterate through the string to populate the frequency map
    for (const char of str) {
        charCount.set(char, (charCount.get(char) || 0) + 1);
    }

    // Find the first non-repeated character by iterating through the string again
    for (const char of str) {
        if (charCount.get(char) === 1) {
            return char;
        }
    }

	
    // If no non-repeated character is found
    return null;
}



const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
