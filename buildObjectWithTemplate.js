function buildObjectWithTemplate(objTemplate, params = {}) {
  let strObj = JSON.stringify(objTemplate);
  for (let param in params) {
    strObj = strObj.replace(new RegExp("{" + param + "}", "g"), params[param]);
  }
  return JSON.parse(strObj);
}


// Example
const objectTemplate = {
	"{a.key}": "{a.value}"
}

const params = {
	'a.key': 'key_a',
  'a.value': 'value_a'
}

buildObjectWithTemplate(objectTemplate, params); //Output: {key_a: "value_a"}
