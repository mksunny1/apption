[**apption**](../../README.md) • **Docs**

***

[apption](../../modules.md) / [selector](../README.md) / member

# Function: member()

> **member**(`name`, `treespace`?, `cls`?): [`Selector`](../classes/Selector.md)

Returns an object that lazily represents a property with the name within the `treespace` (or document).
Getting properties returns the property in the specified element and setting or deleting properties 
updates or deletes the property correspondingly.

## Parameters

• **name**: `string`

• **treespace?**: `Element`

• **cls?**: *typeof* [`MemberSelector`](../classes/MemberSelector.md) = `MemberSelector`

## Returns

[`Selector`](../classes/Selector.md)

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

[selector.ts:166](https://github.com/mksunny1/apption/blob/8a5b4dcedc594ef8c2d14b969bb9eb94e7e47749/src/selector.ts#L166)
