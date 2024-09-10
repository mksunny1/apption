[**apption**](../../README.md) • **Docs**

***

[apption](../../modules.md) / [action](../README.md) / IActionMapObject

# Type Alias: IActionMapObject

> **IActionMapObject**: `object`

An object mapping member keys to arrays of objects which can can be used as the `map` argument 
of `call`, `set` or `del`. It may also be an instance of `Lazy` which resolves to any of these. 
The values or the items in them may also be `Lazy` objects that return the expected type of object there.

## Index Signature

 \[`key`: `string` \| `number`\]: `any`[] \| [`Lazy`](../classes/Lazy.md)\<`any`[]\>

## Defined in

[action.ts:51](https://github.com/mksunny1/apption/blob/528ebd3a42ce7da6886ac83411e2c2063969821c/src/action.ts#L51)
