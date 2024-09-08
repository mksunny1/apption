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

[middleware.ts:30](https://github.com/mksunny1/apption/blob/76ef749a5be7d197c14269d0b969e6bfc0fc29cb/src/middleware.ts#L30)

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

[middleware.ts:17](https://github.com/mksunny1/apption/blob/76ef749a5be7d197c14269d0b969e6bfc0fc29cb/src/middleware.ts#L17)

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

[middleware.ts:36](https://github.com/mksunny1/apption/blob/76ef749a5be7d197c14269d0b969e6bfc0fc29cb/src/middleware.ts#L36)

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

[middleware.ts:24](https://github.com/mksunny1/apption/blob/76ef749a5be7d197c14269d0b969e6bfc0fc29cb/src/middleware.ts#L24)
