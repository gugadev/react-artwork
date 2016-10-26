export default {
  isNumber(value) {
    return typeof value === 'number';
  },
  isString(value) {
    return typeof value === 'string';
  },
  isStringNumber(value) {
    let sPos = value.indexOf('s');
    return !isNaN(value.substring(0, sPos));
  },
  isBoolean(value) {
    return typeof value === 'boolean';
  },
  isObject(value) {
    return typeof value === 'object';
  },
  isArray(value) {
    try {
      return typeof value === 'object' && value.length !== undefined;
    } catch(e) {
      return false;
    }
  }
}
