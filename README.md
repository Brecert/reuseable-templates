## reuseable-templates

<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.1-blue.svg?cacheSeconds=2592000" />
  <a href="#" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
</p>

> template literals that can be reused in a similar way to printf formatting

## Example
```js
import fmt from 'reuseable-templates'

const hello = 'hello';
const world = 'world';

const tmpl = fmt`${String} ${world}`

tmpl(hello)
// => hello world

tmpl('bye')
// => bye world

const tmpl2 = fmt`${JSON} ${'-'.repeat(2)} ${Number}`

tmpl2(hello, 0)
// => "hello" -- 0
```

## Building

```sh
yarn build
```

## Run tests

```sh
yarn test
```

## Author

**brecert**

* Twitter: [@brecert](https://twitter.com/brecert)
* Github: [@brecert](https://github.com/brecert)

## Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/brecert/reuseable-templates/issues).