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

[action.ts:71](https://github.com/mksunny1/apption/blob/b82cc0441c2a3fb855ccc4681a8be2e6e4bd52ea/src/action.ts#L71)
