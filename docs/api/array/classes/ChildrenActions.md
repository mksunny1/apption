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

[array.ts:130](https://github.com/mksunny1/apption/blob/1770a08bd9b714c79b6dab283c2bf83182646040/src/array.ts#L130)

## Properties

### element

> **element**: `Element`

#### Defined in

[array.ts:67](https://github.com/mksunny1/apption/blob/1770a08bd9b714c79b6dab283c2bf83182646040/src/array.ts#L67)

## Methods

### clear()

> **clear**(): `void`

#### Returns

`void`

#### Defined in

[array.ts:127](https://github.com/mksunny1/apption/blob/1770a08bd9b714c79b6dab283c2bf83182646040/src/array.ts#L127)

***

### move()

> **move**(`from`, `to`): `void`

#### Parameters

• **from**: `number`

• **to**: `number`

#### Returns

`void`

#### Defined in

[array.ts:118](https://github.com/mksunny1/apption/blob/1770a08bd9b714c79b6dab283c2bf83182646040/src/array.ts#L118)

***

### pop()

> **pop**(): `void`

#### Returns

`void`

#### Defined in

[array.ts:78](https://github.com/mksunny1/apption/blob/1770a08bd9b714c79b6dab283c2bf83182646040/src/array.ts#L78)

***

### push()

> **push**(...`items`): `void`

#### Parameters

• ...**items**: `T`[]

#### Returns

`void`

#### Defined in

[array.ts:75](https://github.com/mksunny1/apption/blob/1770a08bd9b714c79b6dab283c2bf83182646040/src/array.ts#L75)

***

### render()

> **render**(`item`): `Element`

#### Parameters

• **item**: `T`

#### Returns

`Element`

#### Defined in

[array.ts:68](https://github.com/mksunny1/apption/blob/1770a08bd9b714c79b6dab283c2bf83182646040/src/array.ts#L68)

***

### set()

> **set**(`index`, `value`): `void`

#### Parameters

• **index**: `number`

• **value**: `T`

#### Returns

`void`

#### Defined in

[array.ts:71](https://github.com/mksunny1/apption/blob/1770a08bd9b714c79b6dab283c2bf83182646040/src/array.ts#L71)

***

### shift()

> **shift**(): `void`

#### Returns

`void`

#### Defined in

[array.ts:87](https://github.com/mksunny1/apption/blob/1770a08bd9b714c79b6dab283c2bf83182646040/src/array.ts#L87)

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

[array.ts:90](https://github.com/mksunny1/apption/blob/1770a08bd9b714c79b6dab283c2bf83182646040/src/array.ts#L90)

***

### swap()

> **swap**(`from`, `to`): `void`

#### Parameters

• **from**: `number`

• **to**: `number`

#### Returns

`void`

#### Defined in

[array.ts:100](https://github.com/mksunny1/apption/blob/1770a08bd9b714c79b6dab283c2bf83182646040/src/array.ts#L100)

***

### unshift()

> **unshift**(...`items`): `void`

#### Parameters

• ...**items**: `T`[]

#### Returns

`void`

#### Defined in

[array.ts:81](https://github.com/mksunny1/apption/blob/1770a08bd9b714c79b6dab283c2bf83182646040/src/array.ts#L81)
