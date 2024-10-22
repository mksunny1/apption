[**apption**](../../README.md) • **Docs**

***

[apption](../../modules.md) / [selector](../README.md) / member

# Function: member()

> **member**(`name`, `treespace`?): `any`

Returns an object that lazily represents a property with the name within the `treespace` (or document).
Getting properties returns the property in the specified element and setting or deleting properties 
updates or deletes the property correspondingly.

## Parameters

• **name**: `string`

• **treespace?**: `Element`

## Returns

`any`

## Example

```ts
import { member } from 'apption';
document.body.innerHTML = `
<div>I am a div</div>
<p>I am a paragraph</p>
<section>I am a section</section>
<article>I am an article</article>
`;
const slct = member('textContent', document.body);
console.log(slct.div);  // I am a div
```

## Defined in

[selector.ts:169](https://github.com/mksunny1/apption/blob/dbb9a0b63a254dcf90cb4a7766307cb86cadec9a/src/selector.ts#L169)
