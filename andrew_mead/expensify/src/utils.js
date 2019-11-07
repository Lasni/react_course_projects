console.log('utils.js is running')

const square = (x) => x * x

const add = (a, b) => a + b

const subtract = (a, b) => a - b

// exports - default export(one) - named exports(many)

// named exports (order NOT important, name IS important)
export { square, add };

// default export (name NOT important because it is DEFAULT, export default AFTER const instantiation)
export default subtract;