## Quick Start

Here's a quick demostration:

```javascript
import { geuuid } from 'ele-utility'

// generate a uuid
// -> "34523bf2-ce6a-42ec-803f-3e4b2a192a36" 
const u = geuuid()
```

Just import and use, so easy!

## API

Here, here, here 🎏

Ele-utility support these methods below and here is a quick index:


### geuuid

To generate the uuid!

```javascript
import { geuuid } from 'ele-utility'

// generate a uuid
// -> "34523bf2-ce6a-42ec-803f-3e4b2a192a36" 
const u = geuuid()
```

### excopy

To copy something in Browser Clipboard!

```javascript
import { excopy } from 'ele-utility'

// support callbacks after everything goes right
excopy('hello', () => {
  alert('copy success')
})
```

### loadscript

To load the JavaScript scripts asynchronously!

```javascript
import { loadscript } from 'ele-utility'

(async () => {
  await loadscript('hello.js')
  // then do something
})()
```

### thsplite

To splite the number with thousands!

```javascript
import { thsplite } from 'ele-utility'

// 123,456
thsplite(123456)

// also we support self defined the seperator
// 123@456
thsplite(123456, '@')
```