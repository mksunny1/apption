[**apption**](../../README.md) • **Docs**

***

[apption](../../modules.md) / [selector](../README.md) / method

# Function: method()

> **method**(`name`, `treespace`?, `cls`?): [`MethodSelector`](../classes/MethodSelector.md)

Returns an object that lazily represents a method with the name within the `treespace` (or document).
Calling its methods calls the corresponding method in the specified element.

## Parameters

• **name**: `string`

• **treespace?**: `Element`

• **cls?**: *typeof* [`MethodSelector`](../classes/MethodSelector.md) = `MethodSelector`

## Returns

[`MethodSelector`](../classes/MethodSelector.md)

## Example

```ts
import { method } from 'apption';
document.body.innerHTML = `
<div>I am a div</div>
<p>I am a paragraph</p>
<section>I am a section</section>
<article>I am an article</article>
`;
const slct = method('remove', document.body);
slct.section();
console.log(document.querySelector('section'));  // null
```

## Defined in

[selector.ts:286](https://github.com/mksunny1/apption/blob/8a5b4dcedc594ef8c2d14b969bb9eb94e7e47749/src/selector.ts#L286)
