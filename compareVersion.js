
/**
 * This function allows you to compare two versions in x.x.x format.
 * 
 * Conditions:
 * v1 == v2 = 0
 * v1 > v2 = 1
 * v1 < v2 = -1
 * 
 * @example
 * compareVersion('0.0.0', '0.0.1');
 * 
 * @param {string} v1 - Version One. 
 * @param {string} v2 - Version Two.
 * 
 * @returns {number} - Returns a number that represents the comparison.
 *  E.g.: -1;
 */
function compareVersion(v1, v2) {
   if( v1 === v2) {
      return 0;
   }
  const arrV1 = v1.split('.').map(number => parseInt(number));
  const arrV2 = v2.split('.').map(number => parseInt(number));

  for(let j = 0; j < 3; j++) {
  	 if(arrV1[j] == arrV2[j]) { continue; }   
         return arrV1[j] > arrV2[j] ? 1 : -1;
  }
}
