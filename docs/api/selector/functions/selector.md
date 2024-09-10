[**apption**](../../README.md) • **Docs**

***

[apption](../../modules.md) / [selector](../README.md) / selector

# Function: selector()

> **selector**(`treespace`?): `any`

Returns a proxy object that selects an element when a property is requested from it. 
Setting a property will also replace the selected element and deleting 
a property will remove the selected element.

By default it uses `querySelector` for string keys and `children` for 
number keys.

## Parameters

• **treespace?**: `Element`

## Returns

`any`

## Example

```ts
import { selector } from 'apption';
document.body.innerHTML = `
<div>I am a div</div>
<p>I am a paragraph</p>
<section>I am a section</section>
<article>I am an article</article>
`;
const slct = selector(document.body);
console.log(slct.article.textContent);  // I am an article
```

## Defined in

[selector.ts:107](https://github.com/mksunny1/apption/blob/5c2ed0c98e500fcbd7087b8148508efe1896c020/src/selector.ts#L107)
