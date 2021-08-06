import { STYLE_RENDER_TYPE_COLLAPSE } from '@lz/constants';

function isType(type) {
  return obj => Object.prototype.toString.call(obj) === `[object ${type}]`;
}

function isTypeOf(type) {
  return obj => typeof (obj) === type;
}
export const isFunction = isType('Function');
export const isUndefined = isTypeOf('Undefined');
export const isArray = Array.isArray || isType('Array');
export const isObject = isType('Object');
export const isString = isTypeOf('string');

export function getDefaultAttrs(config) {
  const result = {};
  config.forEach(({
    key, initValue, renderType, children,
  }) => {
    if (renderType === STYLE_RENDER_TYPE_COLLAPSE) {
      Object.assign(result, getDefaultAttrs(children));
    } else if (isString(key)) {
      result[key] = initValue;
    } else {
      Object.assign(result, initValue);
    }
  });
  return result;
}
