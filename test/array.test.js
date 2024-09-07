import { describe, it } from 'node:test'
import { strict as assert } from 'node:assert'
import { ArrayActions, ChildrenActions } from '../src/array.js'
import { JSDOM } from "jsdom";

const window = new JSDOM(`<!DOCTYPE html><body></body>`).window;
const document = window.document;
const body = document.body;

global.document = document;
global.HTMLStyleElement = window.HTMLStyleElement;
global.Element = window.Element;
global.CSSRule = window.CSSRule;

describe("array.ArrayActions", () => {
    const array = [];
    const actions = new ArrayActions(array);

    it("Should correctly push the array", (t) => {
        assert.equal(array.length, 0);
        actions.push(1, 2, 3);
        assert.deepEqual(array, [1, 2, 3]);
    });

    it("Should correctly pop the array", (t) => {
        assert.equal(array.length, 3);
        actions.pop();
        assert.deepEqual(array, [1, 2]);
    });

    it("Should correctly unshift the array", (t) => {
        assert.equal(array.length, 2);
        actions.unshift(1, 2, 3);
        assert.deepEqual(array, [1, 2, 3, 1, 2]);
    });

    it("Should correctly shift the array", (t) => {
        assert.equal(array.length, 5);
        actions.shift();
        assert.deepEqual(array, [2, 3, 1, 2]);
    });

    it("Should correctly set the array", (t) => {
        actions.set(1, 7);
        assert.deepEqual(array, [2, 7, 1, 2]);
    });

    it("Should correctly splice the array", (t) => {
        actions.splice(2, 1, 8, 9, 0);
        assert.deepEqual(array, [2, 7, 8, 9, 0, 2]);
    });

    it("Should correctly swap array items", (t) => {
        actions.swap(2, 3);
        assert.deepEqual(array, [2, 7, 9, 8, 0, 2]);
        actions.swap(1, 5);
        assert.deepEqual(array, [2, 2, 9, 8, 0, 7]);
    });

    it("Should correctly move array items", (t) => {
        actions.move(2, 3);
        assert.deepEqual(array, [2, 2, 8, 9, 0, 7]);
        actions.move(1, 5);
        assert.deepEqual(array, [2, 8, 9, 0, 7, 2]);
    });

    it("Should correctly clear the array", (t) => {
        actions.clear();
        assert.deepEqual(array, []);
    });

})


describe("array.ChildrenActions", () => {
    body.innerHTML = ``
    class AppChildrenActions extends ChildrenActions {
        render(val) {
            const child = document.createElement('span');
            child.textContent = val;
            return child;
        }
    }
    const actions = new AppChildrenActions(body);
    const array = body.children;

    function toArray() {
        return [...array].map(item => parseInt(item.textContent))
    }

    it("Should correctly push the element", (t) => {
        assert.equal(array.length, 0);
        actions.push(1, 2, 3);
        assert.deepEqual(toArray(), [1, 2, 3]);
    });

    it("Should correctly pop the array", (t) => {
        assert.equal(array.length, 3);
        actions.pop();
        assert.deepEqual(toArray(), [1, 2]);
    });

    it("Should correctly unshift the array", (t) => {
        assert.equal(array.length, 2);
        actions.unshift(1, 2, 3);
        assert.deepEqual(toArray(), [1, 2, 3, 1, 2]);
    });

    it("Should correctly shift the array", (t) => {
        assert.equal(array.length, 5);
        actions.shift();
        assert.deepEqual(toArray(), [2, 3, 1, 2]);
    });

    it("Should correctly set the array", (t) => {
        actions.set(1, 7);
        assert.deepEqual(toArray(), [2, 7, 1, 2]);
    });

    it("Should correctly splice the array", (t) => {
        actions.splice(2, 1, 8, 9, 0);
        assert.deepEqual(toArray(), [2, 7, 8, 9, 0, 2]);
    });

    it("Should correctly swap array items", (t) => {
        actions.swap(2, 3);
        assert.deepEqual(toArray(), [2, 7, 9, 8, 0, 2]);
        actions.swap(1, 5);
        assert.deepEqual(toArray(), [2, 2, 9, 8, 0, 7]);
    });

    it("Should correctly move array items", (t) => {
        actions.move(2, 3);
        assert.deepEqual(toArray(), [2, 2, 8, 9, 0, 7]);
        actions.move(1, 5);
        assert.deepEqual(toArray(), [2, 8, 9, 0, 7, 2]);
    });

    it("Should correctly clear the array", (t) => {
        actions.clear();
        assert.deepEqual(toArray(), []);
    });

})

