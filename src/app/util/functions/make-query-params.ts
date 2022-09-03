export function makeQueryParams(query: any) {
  return Object.entries(query).filter((item) => item[1] !== '').reduce((obj, curr) => {
    Object.defineProperty(obj, curr[0], {
      value: curr[1],
      writable: true,
      enumerable: true
    })
    return obj
  }, {})
}

