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

[action.ts:71](https://github.com/mksunny1/apption/blob/db22d834b74a7e66a6f9b8ca626095b91c5a8508/src/action.ts#L71)
