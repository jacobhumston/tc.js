# tc.js

**very** simple module that converts time. (Ex; ms -> seconds)

Documentation can be found in the [docs](/docs/globals.md) folder.

# Example

Here is an example of how to convert time:

```js
import { convert, floorConvert, roundConvert } from '../build/index.js';

const time = { minutes: 300, seconds: 30, milliseconds: 500 }; // Units of time to convert

console.log(convert(time).hours); // 5.508472222222222
console.log(roundConvert(time, 2).hours); // 5.01
console.log(floorConvert(time).hours); // 5
```

You can also use a chain to simplify adding and subtracting units of time.

```js
import { ChainConvert } from '@jacobhumston/tc.js';

const chain = new ChainConvert();
chain.add({ minutes: 1 }).subtract({ seconds: 30 }).add({ hours: 1 });

console.log(chain.floorConvert().seconds); // 3630
```
