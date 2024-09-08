[**apption**](../../README.md) • **Docs**

***

[apption](../../modules.md) / [array](../README.md) / ChildrenActions

# Class: ChildrenActions\<T\>

Wraps an element exposing the same array mutation API (`push`, `pop`, `unshift`, `shift`, `splice`, 
`set`, `move`, `swap` and `clear` for working with the element's children. This can be used together 
with ArrayActions to, for example, keep an array and its DOM representation in sync.

## Example

```ts
import { ArrayActions, call, ChildrenActions } from 'apption';
const array = [], tbody = document.querySelector('tbody');
const AppChildrenActions = class extends ChildrenActions {
    render(item) {
        return (rowId.firstChild.nodeValue = item.id) && (rowlbl.firstChild.nodeValue = item.lbl) && row.cloneNode(true);
    } update(value = ' !!!') {
       for (let i = 0; i < array.length; i += 10) 
           this.element.children[i].querySelector('a').firstChild.nodeValue = array[i].lbl += value;
    }
}, actions = [new ArrayActions(array), new AppChildrenActions(tbody)];
call({ swap: actions }, 1, 998);  // swap item 1 with item 998
```

## Type Parameters

• **T**

## Constructors

### new ChildrenActions()

> **new ChildrenActions**\<`T`\>(`element`): [`ChildrenActions`](ChildrenActions.md)\<`T`\>

#### Parameters

• **element**: `Element`

#### Returns

[`ChildrenActions`](ChildrenActions.md)\<`T`\>

#### Defined in

[array.ts:132](https://github.com/mksunny1/apption/blob/76ef749a5be7d197c14269d0b969e6bfc0fc29cb/src/array.ts#L132)

## Properties

### element

> **element**: `Element`

#### Defined in

[array.ts:69](https://github.com/mksunny1/apption/blob/76ef749a5be7d197c14269d0b969e6bfc0fc29cb/src/array.ts#L69)

## Methods

### clear()

> **clear**(): `void`

#### Returns

`void`

#### Defined in

[array.ts:129](https://github.com/mksunny1/apption/blob/76ef749a5be7d197c14269d0b969e6bfc0fc29cb/src/array.ts#L129)

***

### move()

> **move**(`from`, `to`): `void`

#### Parameters

• **from**: `number`

• **to**: `number`

#### Returns

`void`

#### Defined in

[array.ts:120](https://github.com/mksunny1/apption/blob/76ef749a5be7d197c14269d0b969e6bfc0fc29cb/src/array.ts#L120)

***

### pop()

> **pop**(): `void`

#### Returns

`void`

#### Defined in

[array.ts:80](https://github.com/mksunny1/apption/blob/76ef749a5be7d197c14269d0b969e6bfc0fc29cb/src/array.ts#L80)

***

### push()

> **push**(...`items`): `void`

#### Parameters

• ...**items**: `T`[]

#### Returns

`void`

#### Defined in

[array.ts:77](https://github.com/mksunny1/apption/blob/76ef749a5be7d197c14269d0b969e6bfc0fc29cb/src/array.ts#L77)

***

### render()

> **render**(`item`): `Element`

#### Parameters

• **item**: `T`

#### Returns

`Element`

#### Defined in

[array.ts:70](https://github.com/mksunny1/apption/blob/76ef749a5be7d197c14269d0b969e6bfc0fc29cb/src/array.ts#L70)

***

### set()

> **set**(`index`, `value`): `void`

#### Parameters

• **index**: `number`

• **value**: `T`

#### Returns

`void`

#### Defined in

[array.ts:73](https://github.com/mksunny1/apption/blob/76ef749a5be7d197c14269d0b969e6bfc0fc29cb/src/array.ts#L73)

***

### shift()

> **shift**(): `void`

#### Returns

`void`

#### Defined in

[array.ts:89](https://github.com/mksunny1/apption/blob/76ef749a5be7d197c14269d0b969e6bfc0fc29cb/src/array.ts#L89)

***

### splice()

> **splice**(`start`, `deleteCount`?, ...`items`?): `void`

#### Parameters

• **start**: `number`

• **deleteCount?**: `number`

• ...**items?**: `T`[]

#### Returns

`void`

#### Defined in

[array.ts:92](https://github.com/mksunny1/apption/blob/76ef749a5be7d197c14269d0b969e6bfc0fc29cb/src/array.ts#L92)

***

### swap()

> **swap**(`from`, `to`): `void`

#### Parameters

• **from**: `number`

• **to**: `number`

#### Returns

`void`

#### Defined in

[array.ts:102](https://github.com/mksunny1/apption/blob/76ef749a5be7d197c14269d0b969e6bfc0fc29cb/src/array.ts#L102)

***

### unshift()

> **unshift**(...`items`): `void`

#### Parameters

• ...**items**: `T`[]

#### Returns

`void`

#### Defined in

[array.ts:83](https://github.com/mksunny1/apption/blob/76ef749a5be7d197c14269d0b969e6bfc0fc29cb/src/array.ts#L83)
