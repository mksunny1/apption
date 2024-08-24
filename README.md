# Apption

This is a simple library for creating frontend applications. It exports a few primitives for succinctly expressing many common operations in pure JavaScript. It works very well with modern app architectures based on components. The library encourages application code 
which are flexible, clean, well structured, fast, memory-efficient, easy to understand and easy to maintain. This is also a tiny library with minimal load-time overhead. It is an improvement on the earlier Class-Action suite of libraries; therefore it replaces them in [deleight](https://github.com/mksunny1/deleight). Anyone still interested in any of those libraries can find them [here](https://github.com/mksunny1/).

## Installation

`npm i apption`


## Usage

```js
import { call, ArrayActions, ChildrenActions } from 'apption';

const array = [];
const tbody = document.querySelector('tbody'), row = document.querySelector('template').content.firstElementChild;
const rowId = row.querySelector('td'), rowlbl = row.querySelector('a');

const AppChildrenActions = class extends ChildrenActions {
    render(item) {
        rowId.firstChild.nodeValue = item.id;
        rowlbl.firstChild.nodeValue = item.lb;
        return row.cloneNode(true);
    } update(value = ' !!!') {
        for (let i = 0; i < array.length; i += 10) 
            this.element.children[i].querySelector('a').firstChild.nodeValue = array[i].lbl += value;
    }
}, actions = [new ArrayActions(array), new AppChildrenActions(tbody)];

call({ push: actions }, { id: 1, lbl: 'First item' }, { id: 2, lbl: 'Second item' } );

```


## Documentation

The library is divided into 4 parts. [action](./docs/api/action//README.md) contains the main primitives. The other 3 contain specialized objects which work very well with [action](./docs/api/action//README.md). They can also be used on their own. Use the following links for the API documentation of each part. Each contains only a few functions and classes.
 
 1. The base [action](./docs/api/action/README.md) module which exports primitives for acting on multiple objects at once. It is similar to `onetomany` in [deleight](https://github.com/mksunny1/deleight) but a lot easier to use and likely has more practical utility.
 2. The [array](./docs/api/array/README.md) module which exports 2 classes that function together to keep array objects and the children of DOM elements in sync. This is preferrable to using `for` loops within markup. It can be used directly (in most cases) or serve as a basis for developing bespoke solutions for more uncommon situations.
 3. The [object](./docs/api/object/README.md) module which supports more concise object manipulations. We found this convenient because objects are used a lot in JavaScript code.
 4. The [selector](./docs/api/selector/README.md) module which exports new object types for easier and more concise DOM manipulations.


## Contributing

Help improve Apption by contributing to this project. You can contribute in many ways. See the [contributing guidelines](./CONTRIBUTING.md). You can also show your support by sponsoring us.

Thank you for contributing.


## Sponsors

...

