# `tc.js` - Time Convert (Javascript Package)

**very** simple module that converts time. (Ex; ms -> seconds)

```bash
npm install @jacobhumston/tc.js
```

Documentation can be found at https://jacobhumston.github.io/tc.js/globals

# Examples

Here is an example of how to convert time:

```js
import { convert, floorConvert, roundConvert } from '@jacobhumston/tc.js';

const time = { minutes: 300, seconds: 30, milliseconds: 500 }; // Units of time to convert

console.log(convert(time).hours); // 5.008472222222222
console.log(roundConvert(time, 2).hours); // 5.01
console.log(floorConvert(time).hours); // 5
console.log(convertTo(time, 'seconds')); // 18030.5 (Same as "convert(time).seconds")
```

You can also use a chain to simplify adding and subtracting units of time.

```js
import { ChainConvert } from '@jacobhumston/tc.js';

const chain = new ChainConvert();
chain.add({ minutes: 1 }).subtract({ seconds: 30 }).add({ hours: 1 });

console.log(chain.floorConvert().seconds); // 3630
```

There is also some utility functions included in the package.

```js
import { createInterval, createTimeout } from '@jacobhumston/tc.js';

// Create a simple timeout
createTimeout(
    function () {
        console.log('2 seconds is up!');
    },
    { seconds: 2 }
);

// Create a simple counter
let count = 0;
createInterval(
    function () {
        count++;
        console.log(`Count: ${count}`); // Add 1 to the counter every minute
    },
    { minutes: 1 }
);
```
