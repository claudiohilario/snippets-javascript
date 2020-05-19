/**
 * Update array element position.
 *
 * @example
 * const arr = [0, 1, 2, 3];
 * console.log(updateArrayElementPosition(arr, 1, 3)); //[0, 2, 3, 1]
 */
const updateArrayElementPosition = (arr, fromIndex, toIndex) => {
  const elementFrom = arr[fromIndex];
  arr.splice(fromIndex, 1);
  arr.splice(toIndex, 0, elementFrom);
  return [...arr];
};
