
import { describe, it } from 'node:test'
import { strict as assert } from 'node:assert'
import { act, call, set, del, Action, CallAction, SetAction, DelAction, Lazy, Result } from '../dist/action.js'


describe('action.act', async t1 => {
    await it('Should correctly invoke a simple list of functions', async t2 => {
        let count = 0;
        act([
            (a1, a2) => count += a1,
            (a1, a2) => count += a2,
            (a1, a2) => count += a2 + 1
        ], 20, 21);
        assert.equal(count, 63);
    });

    await it('Should correctly invoke a nested list of functions', async t2 => {
        let count = 0;
        act([
            (a1, a2) => count += a1,
            [ [ (a1, a2) => count += a2 ],
            (a1, a2) => count += a2 + 1 ]
        ], 20, 21);
        assert.equal(count, 63);
    });

    await it('Should replace the args when an instance of Result is returned by any function ', async t2 => {
        let count = 0;
        act([
            (a1, a2) => count += a1,
            (a1, a2) => new Result([count += a2, 0]),
            (a1, a2) => count += a2 + 1
        ], 20, 21);
        assert.equal(count, 42);
    });

    await it('Should resolve `Lazy` values', async t2 => {
        let count = 0;
        act([
            new Lazy(() => (a1, a2) => count += a1),
            (a1, a2) => count += a2,
            (a1, a2) => count += a2 + 1
        ], 20, 21);
        assert.equal(count, 63);
    });

    await it('Should also accept instances of `Action`', async t2 => {
        let count = 0;
        act([
            (a1, a2) => count += a1,
            new Action([(a1, a2) => count += a2]),
            (a1, a2) => count += a2 + 1
        ], 20, 21);
        assert.equal(count, 63);
    });

});

describe('action.call', async t1 => {
    await it('Should correctly invoke a simple map of methods', async t2 => {
        let arr1 = [1, 2, 3], arr2 = [1, 2, 3];
        call({
            push: [arr1], unshift: [arr2]
        }, 20, 21);
        assert.deepEqual(arr1, [1, 2, 3, 20, 21]);
        assert.deepEqual(arr2, [20, 21, 1, 2, 3]);
    });

    await it('Should replace the args when an instance of Result is returned by any method ', async t2 => {
        
    });

    await it('Should resolve `Lazy` values', async t2 => {
        let arr1 = [1, 2, 3], arr2 = [1, 2, 3];
        call({
            push: [arr1], unshift: [new Lazy(() => arr2)]
        }, 20, 21);
        assert.deepEqual(arr1, [1, 2, 3, 20, 21]);
        assert.deepEqual(arr2, [20, 21, 1, 2, 3]);

        call({
            push: new Lazy(() => [arr1]), unshift: [arr2]
        }, 20, 21);
        assert.deepEqual(arr1, [1, 2, 3, 20, 21, 20, 21]);
        assert.deepEqual(arr2, [20, 21, 20, 21, 1, 2, 3]);
    });

});

describe('action.set', async t1 => {
    await it('Should correctly set a simple map of properties', async t2 => {
        let obj1 = { a: 1, b: 2, c: 3 }, obj2 = { a: 1, b: 2, c: 3 };
        set({
            a: [obj1], b: [obj2], c: [obj1]
        }, 20);
        assert.deepEqual(obj1, { a: 20, b: 2, c: 20});
        assert.deepEqual(obj2, { a: 1, b: 20, c: 3});
    });

    await it('Should resolve `Lazy` values', async t2 => {
        let obj1 = { a: 1, b: 2, c: 3 }, obj2 = { a: 1, b: 2, c: 3 };
        set({
            a: [new Lazy(() => obj1)], b: [obj2], c: [obj1]
        }, 20);
        assert.deepEqual(obj1, { a: 20, b: 2, c: 20});
        assert.deepEqual(obj2, { a: 1, b: 20, c: 3});

        set({
            a: [obj1], b: new Lazy(() => [obj2]), c: [obj1]
        }, 40);
        assert.deepEqual(obj1, { a: 40, b: 2, c: 40});
        assert.deepEqual(obj2, { a: 1, b: 40, c: 3});
    });

});

describe('action.del', async t1 => {
    await it('Should correctly delete a simple map of properties', async t2 => {
        let obj1 = { a: 1, b: 2, c: 3 }, obj2 = { a: 1, b: 2, c: 3 };
        del({
            a: [obj1], b: [obj2], c: [obj1]
        }, 20);
        assert.deepEqual(obj1, { b: 2 });
        assert.deepEqual(obj2, { a: 1, c: 3});
    });

    await it('Should resolve `Lazy` values', async t2 => {
        let obj1 = { a: 1, b: 2, c: 3 }, obj2 = { a: 1, b: 2, c: 3 };
        del({
            a: [new Lazy(() => obj1)], b: [obj2], c: [obj1]
        }, 20);
        assert.deepEqual(obj1, { b: 2 });
        assert.deepEqual(obj2, { a: 1, c: 3});

        obj1 = { a: 1, b: 2, c: 3 }; obj2 = { a: 1, b: 2, c: 3 };
        del({
            a: [obj1], b: new Lazy(() => [obj2]), c: [obj1]
        }, 40);
        assert.deepEqual(obj1, { b: 2 });
        assert.deepEqual(obj2, { a: 1, c: 3});
    });

});

describe('action.Action', async t1 => {
    await it('Should correctly invoke a simple list of functions', async t2 => {
        let count = 0;
        const action = new Action([
            (a1, a2) => count += a1,
            (a1, a2) => count += a2,
            (a1, a2) => count += a2 + 1
        ]);
        action.act(20, 21);
        assert.equal(count, 63);
    });

    await it('Should resolve `Lazy` values', async t2 => {
        let count = 0;
        const action = new Action(new Lazy(() => [
            (a1, a2) => count += a1,
            (a1, a2) => count += a2,
            (a1, a2) => count += a2 + 1
        ]));
        action.act(20, 21);
        assert.equal(count, 63);
    });

});

describe('action.CallAction', async t1 => {
    await it('Should correctly invoke a simple map of methods', async t2 => {
        let arr1 = [1, 2, 3], arr2 = [1, 2, 3];
        const action = new CallAction({
            push: [arr1], unshift: [arr2]
        });
        action.act(20, 21)
        assert.deepEqual(arr1, [1, 2, 3, 20, 21]);
        assert.deepEqual(arr2, [20, 21, 1, 2, 3]);
    });

    await it('Should resolve `Lazy` values', async t2 => {
        let arr1 = [1, 2, 3], arr2 = [1, 2, 3];
        const action = new CallAction(new Lazy(() => ({
            push: [arr1], unshift: [arr2]
        })));
        action.act(20, 21)
        assert.deepEqual(arr1, [1, 2, 3, 20, 21]);
        assert.deepEqual(arr2, [20, 21, 1, 2, 3]);
    });

});

describe('action.SetAction', async t1 => {
    await it('Should correctly set a simple map of properties', async t2 => {
        let obj1 = { a: 1, b: 2, c: 3 }, obj2 = { a: 1, b: 2, c: 3 };
        const action = new SetAction({
            a: [obj1], b: [obj2], c: [obj1]
        });
        action.act(20);
        assert.deepEqual(obj1, { a: 20, b: 2, c: 20});
        assert.deepEqual(obj2, { a: 1, b: 20, c: 3});
    });

    await it('Should resolve `Lazy` values', async t2 => {
        let obj1 = { a: 1, b: 2, c: 3 }, obj2 = { a: 1, b: 2, c: 3 };
        const action = new SetAction(new Lazy(() => ({
            a: [obj1], b: [obj2], c: [obj1]
        })));
        action.act(20);
        assert.deepEqual(obj1, { a: 20, b: 2, c: 20});
        assert.deepEqual(obj2, { a: 1, b: 20, c: 3});
    });

});

describe('action.DelAction', async t1 => {
    await it('Should correctly delete a simple map of properties', async t2 => {
        let obj1 = { a: 1, b: 2, c: 3 }, obj2 = { a: 1, b: 2, c: 3 };
        const action = new DelAction({
            a: [obj1], b: [obj2], c: [obj1]
        });
        action.act();
        assert.deepEqual(obj1, { b: 2 });
        assert.deepEqual(obj2, { a: 1, c: 3});
    });

    await it('Should resolve `Lazy` values', async t2 => {
        let obj1 = { a: 1, b: 2, c: 3 }, obj2 = { a: 1, b: 2, c: 3 };
        const action = new DelAction(new Lazy(() => ({
            a: [obj1], b: [obj2], c: [obj1]
        })));
        action.act();
        assert.deepEqual(obj1, { b: 2 });
        assert.deepEqual(obj2, { a: 1, c: 3});
    });

});