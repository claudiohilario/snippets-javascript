function buildQueryParams(params = {}) {
  const arrParams = Object.keys(params);
  if(!arrParams.length) {
    return '';
  }
  return encodeURI(`?${arrParams.map(param => `${param}=${params[param]}`).join('&')}`);
}

console.log(buildQueryParams()); // ''
console.log(buildQueryParams({})); // ''
console.log(buildQueryParams({a: 'valueA'})); // '?a=valueA'
console.log(buildQueryParams({a: 'valueA', b: 'ValueB'})); // ?a=valueA&b=valueB
