const sortArrayOfObjectsByNumber = (arrayOfObjects = [], key = 'order') => {
	const mapper = {
  	ASC: (a, b) => (a[key] - b[key]),
    DESC: (a, b) => (b[key] - a[key]),
  }
  
  return {
  	asc: () => arrayOfObjects.sort(mapper['ASC']),
    desc: () => arrayOfObjects.sort(mapper['DESC']),
  }
}

/** Example */
const arrTest = [
	{name: 'One', order: 10},
  {name: 'Two', order: 1},
  {name: 'Three', order: 15},
  {name: 'Four', order: 11},
  {name: 'Five', order: 5},
];

const sortArrayOfObjectsByNumberTest = sortArrayOfObjectsByNumber(arrTest);

console.log(':::: ASC ::::');
console.log(sortArrayOfObjectsByNumberTest.asc());
console.log(':::: DESC ::::');
console.log(sortArrayOfObjectsByNumberTest.desc());
