[**apption**](../../README.md) • **Docs**

***

[apption](../../modules.md) / [middleware](../README.md) / ITransformer

# Interface: ITransformer

## Methods

### call()?

> `optional` **call**\<`T`, `U`\>(`p`, `args`): `U`

Transforms the args passed in a method call

#### Type Parameters

• **T** *extends* `any`[]

• **U** *extends* `any`[]

#### Parameters

• **p**: `string` \| `number` \| `symbol`

• **args**: `T`

#### Returns

`U`

#### Defined in

middleware.ts:30

***

### get()?

> `optional` **get**\<`T`, `U`\>(`p`, `value`): `U`

Transforms the value returned from a property access

#### Type Parameters

• **T**

• **U**

#### Parameters

• **p**: `string` \| `number` \| `symbol`

• **value**: `T`

#### Returns

`U`

#### Defined in

middleware.ts:17

***

### ret()?

> `optional` **ret**\<`T`, `U`\>(`p`, `value`): `U`

Transforms the value returned from a method call.

#### Type Parameters

• **T**

• **U**

#### Parameters

• **p**: `string` \| `number` \| `symbol`

• **value**: `T`

#### Returns

`U`

#### Defined in

middleware.ts:36

***

### set()?

> `optional` **set**\<`T`, `U`\>(`p`, `value`): `U`

Transforms the value assigned to a property

#### Type Parameters

• **T**

• **U**

#### Parameters

• **p**: `string` \| `number` \| `symbol`

• **value**: `T`

#### Returns

`U`

#### Defined in

middleware.ts:24
