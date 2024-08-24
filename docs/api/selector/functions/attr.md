[**apption**](../../README.md) • **Docs**

***

[apption](../../modules.md) / [selector](../README.md) / attr

# Function: attr()

> **attr**(`name`, `treespace`?, `cls`?): [`Selector`](../classes/Selector.md)

Returns an object that lazily represents an attribute with the name within the `treespace` element (or document).
Getting properties returns the attribute in the specified element and setting or deleting properties 
updates or removes the attribute correspondingly.

## Parameters

• **name**: `string`

• **treespace?**: `Element`

• **cls?**: *typeof* [`AttrSelector`](../classes/AttrSelector.md) = `AttrSelector`

## Returns

[`Selector`](../classes/Selector.md)

## Example

```ts
import { attr } from 'apption';
document.body.innerHTML = `
<div>I am a div</div>
<p class="main">I am a paragraph</p>
<section>I am a section</section>
<article>I am an article</article>
`;
const slct = attr('class', document.body);
console.log(slct.p);  // main
```

## Defined in

[selector.ts:206](https://github.com/mksunny1/apption/blob/b06f059586e3c06c29fccfd5bd8250a5c5e800b1/src/selector.ts#L206)
