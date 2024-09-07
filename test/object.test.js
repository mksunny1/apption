

import { describe, it } from 'node:test'
import { strict as assert } from 'node:assert'
import { zip, map, mapKeys, mapValues, reduce, foreach } from '../src/object.js'

describe('object.zip', async t1 => {
    await it('Should combine arrays of keys and values', async t2 => {
        assert.deepEqual(zip(['a', 'b', 'c'], [1, 2, 3]), { a: 1, b: 2, c: 3 });
    })
});


describe('object.mapKeys', async t1 => {
    await it('Should correctly map object keys', async t2 => {
        assert.deepEqual(mapKeys({ a: 1, b: 2, c: 3 }, k => `${k}1`), { a1: 1, b1: 2, c1: 3 });
    })
});


describe('object.mapValues', async t1 => {
    await it('Should correctly map object values', async t2 => {
        assert.deepEqual(mapValues({ a: 1, b: 2, c: 3 }, (k, v) => v * 3), { a: 3, b: 6, c: 9 });
    })
});

describe('object.map', async t1 => {
    await it('Should correctly map object keys and values', async t2 => {
        assert.deepEqual(map({ a: 1, b: 2, c: 3 }, (k, v) => [`${k}1`, v * 3]), { a1: 3, b1: 6, c1: 9 });
    })
});

describe('object.reduce', async t1 => {
    await it('Should correctly map object keys and values', async t2 => {
        assert.equal(reduce({ a: 1, b: 2, c: 3 }, (r, k, v) => r + (v * v), 0), 14);
    })
});

describe('object.foreach', async t1 => {
    await it('Should correctly map object keys and values', async t2 => {
        let count = 0;
        foreach({ a: 1, b: 2, c: 3 }, (k, v) => count += (v * v));
        assert.equal(count, 14);
    })
});

