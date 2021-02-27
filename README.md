[简体中文](./README.zh-CN.md) | English

# ELE UTILITY

> Elegent & utility methods to facilitate common usage in JavaScript!

🤩 This repo was generated from [Y-lonelY/npm-template/pure](https://github.com/Y-lonelY/npm-template/tree/pure), if you want to try you own npm packages you can start from that!


## Install

run `npm install ele-utility --save` or `yarn add ele-utility`


## Quick Start

Here's a quick demostration:

```javascript
import { geuuid } from 'ele-utility'

// generate a uuid
// -> "34523bf2-ce6a-42ec-803f-3e4b2a192a36" 
const u = geuuid()
```

### Why named export?

1. Module is a namespace. Default export often leads to function/component per file dogma and makes code less maintainable.
2. Interop with commonjs is broken in many cases or hard to maintain.
3. Show me any good language with default exports. It's historical javascriptism.

## API

✨ See more usages at [API Docs](https://y-lonely.github.io/ele-utility/)


## Develop

Clone the repo and run `npm install` to init the project!

After you have done some work, just run `npm run build` to generate the project, and all output will be found at `./npm`

**Solo with code!**