[**apption**](../../README.md) • **Docs**

***

[apption](../../modules.md) / [action](../README.md) / set

# Function: set()

> **set**(`map`, `value`): `void`

Sets specified properties in different objects.

The `map` argument maps propserty keys to arrays of objects on which to set the properties.
If any array or object is of type [Lazy](../classes/Lazy.md), it is first resolved to obtain the 
array or object to work with.

If the value to set is of type [Lazy](../classes/Lazy.md), its value method is called with the previous 
property values for each object to compute the new values to be set.

## Parameters

• **map**: [`IActionMapObject`](../type-aliases/IActionMapObject.md)

• **value**: `any`

## Returns

`void`

## Example

```ts
import { set } from 'apption'
let obj1 = { a: 1, b: 2, c: 3 }, obj2 = { a: 1, b: 2, c: 3 };
const actions = { a: [obj1], b: [obj2], c: [obj1] };
set(actions, 20);
console.log(obj1);    // { a: 20, b: 2, c: 20}
console.log(obj2);    // { a: 1, b: 20, c: 3}

set(actions, new Lazy(x => x * 2));
console.log(obj1);    // { a: 40, b: 2, c: 40}
console.log(obj2);    // { a: 1, b: 40, c: 3}
```

## Defined in

[action.ts:183](https://github.com/mksunny1/apption/blob/edbec5398a9c4dd80aef328bce86959614ae2fb4/src/action.ts#L183)
