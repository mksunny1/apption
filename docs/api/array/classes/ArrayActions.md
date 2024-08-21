[**apption**](../../README.md) • **Docs**

***

[apption](../../modules.md) / [array](../README.md) / ArrayActions

# Class: ArrayActions\<T\>

Wraps an array exposing the same mutation API (`push`, `pop`, `unshift`, `shift`, `splice`) 
and adds a few extra methods namely: `set`, `move`, `swap` and `clear`.

## Example

```ts
import { ArrayActions, call, ChildrenActions } from 'apption';
const array = [];
const actions = new ArrayActions(array);
actions.push(1, 2, 3);
console.log(array.length);   // 3
```

## Type Parameters

• **T**

## Constructors

### new ArrayActions()

> **new ArrayActions**\<`T`\>(`array`): [`ArrayActions`](ArrayActions.md)\<`T`\>

#### Parameters

• **array**: `T`[]

#### Returns

[`ArrayActions`](ArrayActions.md)\<`T`\>

#### Defined in

array.ts:42

## Properties

### array

> **array**: `T`[]

#### Defined in

array.ts:18

## Methods

### clear()

> **clear**(): `void`

#### Returns

`void`

#### Defined in

array.ts:39

***

### move()

> **move**(`from`, `to`): `T`[]

#### Parameters

• **from**: `number`

• **to**: `number`

#### Returns

`T`[]

#### Defined in

array.ts:35

***

### pop()

> **pop**(): `T`

#### Returns

`T`

#### Defined in

array.ts:24

***

### push()

> **push**(...`items`): `number`

#### Parameters

• ...**items**: `T`[]

#### Returns

`number`

#### Defined in

array.ts:23

***

### set()

> **set**(`index`, `value`): `void`

#### Parameters

• **index**: `number`

• **value**: `T`

#### Returns

`void`

#### Defined in

array.ts:19

***

### shift()

> **shift**(): `T`

#### Returns

`T`

#### Defined in

array.ts:26

***

### splice()

> **splice**(`start`, `deleteCount`?, ...`items`?): `T`[]

#### Parameters

• **start**: `number`

• **deleteCount?**: `number`

• ...**items?**: `T`[]

#### Returns

`T`[]

#### Defined in

array.ts:27

***

### swap()

> **swap**(`from`, `to`): [`T`, `T`]

#### Parameters

• **from**: `number`

• **to**: `number`

#### Returns

[`T`, `T`]

#### Defined in

array.ts:31

***

### undhift()

> **undhift**(...`items`): `number`

#### Parameters

• ...**items**: `T`[]

#### Returns

`number`

#### Defined in

array.ts:25
