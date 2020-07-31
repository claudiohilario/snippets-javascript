
/**
 * Convert the string to lowerCammelCase.
 * 
 * @example
 * const str = 'schedule_exceptions';
 * const separatorChar = '_';
 * convertToLowerCamelCase(str, separatorChar);
 * 
 * @param {string} str - The string to convert.
 * @param {string} separatorChar - The sparator char.
 * 
 * @returns {string} Returns converted string.
 * E.g.: scheduleExceptions
 */
function convertToLowerCamelCase(str, separatorChar) {
	return str.split(separatorChar).reduce((acc, curr, index) => {
	    const isFirstWord = index === 0;
        if(isFirstWord) {
  	        return curr.toLowerCase();
        }
	    return `${acc}${curr.charAt(0).toUpperCase() + curr.slice(1)}`;
    }, '');
}
