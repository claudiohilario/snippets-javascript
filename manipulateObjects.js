// Manipulate objects draft
const manipulateObj = (obj, callback) => Object.keys(obj).reduce((acc, curr) => ({...acc, ...{[curr]: callback(obj[curr])}}), {});
const manipulateObjByKeys = (obj, keys = [], callback) => keys.reduce((acc, curr) => ({...acc, ...Object.prototype.hasOwnProperty.call(acc, curr) ? {[curr]: callback(acc[curr])} : {}}), {...obj});

const obj = {a: 'elma', b: 'elmb', c: 'elmc'};
const callback = (elem) => elem+ '000';

manipulateObj(obj, callback); // Ouput: {a: "elma000", b: "elmb000", c: "elmc000"}
manipulateObjByKeys(obj, ['a', 'c'], callback); // Output: {a: "elma000", b: "elmb", c: "elmc000"}
