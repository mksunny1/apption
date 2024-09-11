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

[middleware.ts:28](https://github.com/mksunny1/apption/blob/15875259b0a0fd5aee4cca9a9f9a7e7aa83be5d0/src/middleware.ts#L28)

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

[middleware.ts:15](https://github.com/mksunny1/apption/blob/15875259b0a0fd5aee4cca9a9f9a7e7aa83be5d0/src/middleware.ts#L15)

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

[middleware.ts:34](https://github.com/mksunny1/apption/blob/15875259b0a0fd5aee4cca9a9f9a7e7aa83be5d0/src/middleware.ts#L34)

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

[middleware.ts:22](https://github.com/mksunny1/apption/blob/15875259b0a0fd5aee4cca9a9f9a7e7aa83be5d0/src/middleware.ts#L22)
