

import { describe, it } from 'node:test'
import { strict as assert } from 'node:assert'
import { transformer, arg, redirect } from '../dist/middleware.js'

describe('middleware.transformer', async t1 => {
    await it('Should correctly transform on get', async t2 => {
        const t = transformer({a: 1, b: 2}, {get(p, value) { return value * 5 }})
        assert.equal(t.a, 5);
        assert.equal(t.b, 10);
    });

    await it('Should correctly transform on set', async t2 => {
        const t = transformer({a: 1, b: 2}, {set(p, value) { return value * 5 }})
        Object.assign(t, {a: 1, b: 2});
        assert.equal(t.a, 5);
        assert.equal(t.b, 10);
    });

    await it('Should correctly transform args on call', async t2 => {
        const arr = []
        const t = transformer(arr, {call(p, args) { return args.map(value => value * 5) }})
        t.push(1, 2);
        assert.deepEqual(arr, [5, 10]);
    });
    await it('Should correctly transform return value on call', async t2 => {
        const arr = [1, 2]
        const t = transformer(arr, {ret(p, value) { return value * 5 }})
        assert.equal(t.pop(), 10);
        assert.equal(t.pop(), 5);
    });
});


describe('middleware.arg', async t1 => {
    await it('Should call the function before get', async t2 => {
        const objs = [];
        const a = arg({a: 1, b: 2}, obj => objs.push(Object.assign({}, obj)))
        assert.equal(a.a, 1);
        assert.equal(a.b, 2);
        assert.deepEqual(objs, [{a: 1, b: 2}, {a: 1, b: 2}])
    });
    await it('Should call the function after set', async t2 => {
        const objs = [];
        const a = arg({a: 1, b: 2}, obj => objs.push(Object.assign({}, obj)))
        a.a = 5;
        a.b = 10;
        assert.deepEqual(objs, [{a: 5, b: 2}, {a: 5, b: 10}])
    });
    await it('Should call the function after delete', async t2 => {
        const objs = [];
        const a = arg({a: 1, b: 2}, obj => objs.push(Object.assign({}, obj)))
        delete a.a;
        delete a.b;
        assert.deepEqual(objs, [{b: 2}, {}]);
    });
});


describe('middleware.redirect', async t1 => {
    await it('Should correctly redirect get', async t2 => {
        const object = {a: 1, b: 2};
        const red1 = redirect({a: object, b: object})
        const red2 = redirect({a: object, b: object}, {a: 'b', b: 'a'})
        assert.equal(red1.a, object.a);
        assert.equal(red1.b, object.b);
        assert.equal(red2.b, object.a);
        assert.equal(red2.a, object.b);
    });
    await it('Should correctly redirect set', async t2 => {
        const object = {a: 1, b: 2};
        const red1 = redirect({a: object, b: object})
        const red2 = redirect({a: object, b: object}, {a: 'b', b: 'a'})
        red1.a = 5;
        assert.deepEqual(object, {a: 5, b: 2});
        red1.b = 10
        assert.deepEqual(object, {a: 5, b: 10});
        red2.b = 17
        assert.deepEqual(object, {a: 17, b: 10});
        red2.a = 44
        assert.deepEqual(object, {a: 17, b: 44});
    });
    await it('Should correctly redirect delete', async t2 => {
        const object = {a: 1, b: 2, c: 3, d: 4};
        const red1 = redirect({a: object, b: object})
        const red2 = redirect({a: object, b: object}, {a: 'c', b: 'd'})
        delete red1.a;
        assert.deepEqual(object, {b: 2, c: 3, d: 4});
        delete red1.b;
        assert.deepEqual(object, {c: 3, d: 4});
        delete red2.b;
        assert.deepEqual(object, {c: 3});
        delete red2.a;
        assert.deepEqual(object, {});
    });
    await it('Should correctly redirect call', async t2 => {
        const object = [];
        const red1 = redirect({push: object, pop: object})
        const red2 = redirect({push: object, pop: object}, {push: 'pop', pop: 'push'})
        red1.push(1,2,3);
        assert.deepEqual(object, [1,2,3]);
        red1.pop()
        assert.deepEqual(object, [1,2]);
        red2.push()
        assert.deepEqual(object, [1]);
        red2.pop('a')
        assert.deepEqual(object, [1, 'a']);
    });
});
