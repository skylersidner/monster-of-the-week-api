const assert = require('assert')
const { camelCase, snakeCase, kebabCase } = require('lodash');

function validateIsObject(obj) {
  const objectType = typeof obj;
  assert(objectType === 'object', `Invalid argument type ${objectType}`);
}
function reduceObjectTo(obj, fn) {
  validateIsObject(obj);
  return Object.entries(obj).reduce((acc, [key, value]) => {
    acc[fn(key)] = value;
    return acc;
  }, {});
}

function convertObject(obj, convert) {
  validateIsObject(obj);
  return Array.isArray(obj) ? obj.map(convert) : reduceObjectTo(obj, convert);
}

function convertByType(obj, convert) {
  const objectType = typeof obj;

  switch(objectType) {
    case 'object':
      return convertObject(obj, convert);
    case 'string':
      return convert(obj);
    default:
      throw new Error(`Unsupported object type ${objectType}`);
  }
}

function toSnake(obj) {
  return convertByType(obj, snakeCase);
}

function toCamel(obj) {
  return convertByType(obj, camelCase)
}

function toKebab (obj) {
  return convertByType(obj, kebabCase)
}

module.exports = { convertByType, toSnake, toCamel, toKebab }