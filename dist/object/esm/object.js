/**
 * Primitives for functionally creating and manipulating objects.
 *
 * @module
 */
/**
 * Combine `keys` with corresponding items in `values` to form and return an object.
 * `values` could be `undefined` may not have items corresponding to some keys but
 * all keys must be provided.
 *
 * @example
 * import { zip } from 'apption'
 * const obj = zip(['a', 'b', 'c'], [1, 2, 3]);
 * console.log(obj)   // { a: 1, b: 2, c: 3 }
 *
 * @param keys
 * @param values
 * @returns
 */
function zip(keys, values) {
    const result = {};
    for (let i = 0; i < keys.length; i++)
        result[keys[i]] = values?.[i];
    return result;
}
/**
 * Transform the values of the input object using the mapper and return the mapped object.
 * The returned object will be the same as the input if `inPlace` is truthy.
 *
 * @example
 * import { mapValues } from 'apption'
 * const obj = mapValues({ a: 1, b: 2, c: 3 }, (k, v) => v * 3);
 * console.log(obj)   // { a: 3, b: 6, c: 9 }
 *
 * @param object
 * @param mapper
 * @param inPlace
 * @returns
 */
function mapValues(object, mapper, inPlace) {
    const result = inPlace ? object : {};
    for (let [key, value] of Object.entries(object))
        result[key] = mapper(key, value);
    return result;
}
/**
 * Transform the keys of the input object using the mapper and return the mapped object.
 * The returned object will be the same as the input if `inPlace` is truthy.
 *
 * @example
 * import { mapKeys } from 'apption'
 * const obj = mapKeys({ a: 1, b: 2, c: 3 }, (k, v) => `${k}1`);
 * console.log(obj)   // { a1: 1, b1: 2, c1: 3 }
 *
 * @param object
 * @param mapper
 * @param inPlace
 * @returns
 */
function mapKeys(object, mapper, inPlace) {
    const result = inPlace ? object : {};
    for (let [key, value] of Object.entries(object))
        result[mapper(key, value)] = value;
    return result;
}
/**
 * Transform the keys and values of the input object using the mapper and return the mapped object.
 * The returned object will be the same as the input if `inPlace` is truthy.
 *
 * @example
 * import { map } from 'apption'
 * const obj = map({ a: 1, b: 2, c: 3 }, (k, v) => `${k}1`);
 * console.log(obj)   // { a1: 3, b1: 6, c1: 9 }
 *
 * @param object
 * @param mapper
 * @param inPlace
 * @returns
 */
function map(object, mapper, inPlace) {
    const result = inPlace ? object : {};
    for (let [key, value] of Object.entries(object)) {
        [key, value] = mapper(key, value);
        result[key] = value;
    }
    return result;
}
/**
 * Reduces the input object using the reducer (and optional initial value)
 * and return the reduced value.
 *
 *
 * @example
 * import { reduce } from 'apption'
 * const r = mapValues({ a: 1, b: 2, c: 3 }, (r, k, v) => r + (v * v), 0);
 * console.log(r)   // 14
 *
 * @param object
 * @param reducer
 * @param result
 * @returns
 */
function reduce(object, reducer, result = null) {
    for (let [key, value] of Object.entries(object))
        result = reducer(result, key, value);
    return result;
}
/**
 * Performs the specified operation on all pairs of object keys and values (Object.entries()).
 *
 * @example
 * import { foreach } from 'apption'
 * let count = 0;
 * foreach({ a: 1, b: 2, c: 3 }, (k, v) => count += (v * v));
 * console.log(count)    // 14
 *
 * @param object
 * @param callable
 */
function foreach(object, callable) {
    for (let [key, value] of Object.entries(object))
        callable(key, value);
}

export { foreach, map, mapKeys, mapValues, reduce, zip };
