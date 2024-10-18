[**@jacobhumston/tc.js**](../README.md) • **Docs**

---

[@jacobhumston/tc.js](../globals.md) / ChainConvert

# Class: ChainConvert

A class that chains conversions together.

## Constructors

### new ChainConvert()

> **new ChainConvert**(`time`): [`ChainConvert`](ChainConvert.md)

Creates a new chain.

#### Parameters

• **time**: [`AvailableConversions`](../interfaces/AvailableConversions.md) = `{}`

The time to chain.

#### Returns

[`ChainConvert`](ChainConvert.md)

#### Defined in

[chain.ts:15](https://github.com/jacobhumston/tc.js/blob/d10529ca342d5eaf02c25b075d22688b5dfd3995/src/chain.ts#L15)

## Methods

### add()

> **add**(`time`): [`ChainConvert`](ChainConvert.md)

Adds time to this chain.
This does not modify the total, instead it's by unit.
For example, if you add 2 minutes, only the amount of minutes will be increased.

#### Parameters

• **time**: [`AvailableConversions`](../interfaces/AvailableConversions.md)

The time to add.

#### Returns

[`ChainConvert`](ChainConvert.md)

#### Defined in

[chain.ts:77](https://github.com/jacobhumston/tc.js/blob/d10529ca342d5eaf02c25b075d22688b5dfd3995/src/chain.ts#L77)

---

### addTotal()

> **addTotal**(`time`, `unit`): [`ChainConvert`](ChainConvert.md)

Adds time to the total of this chain.
Note that this will modify the total, not the individual units.
This will convert your unites in the process.

#### Parameters

• **time**: `number`

The time to add.

• **unit**: `"microseconds"` \| `"milliseconds"` \| `"seconds"` \| `"minutes"` \| `"hours"` \| `"days"` \| `"weeks"` \| `"months"` \| `"years"` \| `"decades"` \| `"centuries"`

The unit of the time to add.

#### Returns

[`ChainConvert`](ChainConvert.md)

#### Defined in

[chain.ts:153](https://github.com/jacobhumston/tc.js/blob/d10529ca342d5eaf02c25b075d22688b5dfd3995/src/chain.ts#L153)

---

### clone()

> **clone**(): [`ChainConvert`](ChainConvert.md)

Clones this chain.

#### Returns

[`ChainConvert`](ChainConvert.md)

#### Defined in

[chain.ts:134](https://github.com/jacobhumston/tc.js/blob/d10529ca342d5eaf02c25b075d22688b5dfd3995/src/chain.ts#L134)

---

### convert()

> **convert**(): `Record`\<`"microseconds"` \| `"milliseconds"` \| `"seconds"` \| `"minutes"` \| `"hours"` \| `"days"` \| `"weeks"` \| `"months"` \| `"years"` \| `"decades"` \| `"centuries"`, `number`\>

Converts the time values of this chain.

#### Returns

`Record`\<`"microseconds"` \| `"milliseconds"` \| `"seconds"` \| `"minutes"` \| `"hours"` \| `"days"` \| `"weeks"` \| `"months"` \| `"years"` \| `"decades"` \| `"centuries"`, `number`\>

#### Defined in

[chain.ts:36](https://github.com/jacobhumston/tc.js/blob/d10529ca342d5eaf02c25b075d22688b5dfd3995/src/chain.ts#L36)

---

### convertTo()

> **convertTo**(`unit`): `number`

Convert the time values from this chain to a specific unit.

#### Parameters

• **unit**: `"microseconds"` \| `"milliseconds"` \| `"seconds"` \| `"minutes"` \| `"hours"` \| `"days"` \| `"weeks"` \| `"months"` \| `"years"` \| `"decades"` \| `"centuries"`

The unit to get.

#### Returns

`number`

The value of the unit.

#### Defined in

[chain.ts:59](https://github.com/jacobhumston/tc.js/blob/d10529ca342d5eaf02c25b075d22688b5dfd3995/src/chain.ts#L59)

---

### convertTotTotal()

> **convertTotTotal**(): `number`

Convert to the total amount of microseconds from this chain.

#### Returns

`number`

The total amount of microseconds.

#### Defined in

[chain.ts:67](https://github.com/jacobhumston/tc.js/blob/d10529ca342d5eaf02c25b075d22688b5dfd3995/src/chain.ts#L67)

---

### divide()

> **divide**(`time`): [`ChainConvert`](ChainConvert.md)

Divides time in this chain.
This does not modify the total, instead it's by unit.
For example, if you divide minutes by 2, only the amount of minutes will be divided.

#### Parameters

• **time**: [`AvailableConversions`](../interfaces/AvailableConversions.md)

The time to divide.

#### Returns

[`ChainConvert`](ChainConvert.md)

#### Defined in

[chain.ts:116](https://github.com/jacobhumston/tc.js/blob/d10529ca342d5eaf02c25b075d22688b5dfd3995/src/chain.ts#L116)

---

### divideTotal()

> **divideTotal**(`time`, `unit`): [`ChainConvert`](ChainConvert.md)

Divides the total of this chain.
Note that this will modify the total, not the individual units.
This will convert your unites in the process.

#### Parameters

• **time**: `number`

The time to divide.

• **unit**: `"microseconds"` \| `"milliseconds"` \| `"seconds"` \| `"minutes"` \| `"hours"` \| `"days"` \| `"weeks"` \| `"months"` \| `"years"` \| `"decades"` \| `"centuries"`

The unit of the time to divide.

#### Returns

[`ChainConvert`](ChainConvert.md)

#### Defined in

[chain.ts:189](https://github.com/jacobhumston/tc.js/blob/d10529ca342d5eaf02c25b075d22688b5dfd3995/src/chain.ts#L189)

---

### floorConvert()

> **floorConvert**(): `Record`\<`"microseconds"` \| `"milliseconds"` \| `"seconds"` \| `"minutes"` \| `"hours"` \| `"days"` \| `"weeks"` \| `"months"` \| `"years"` \| `"decades"` \| `"centuries"`, `number`\>

Floors the time values of this chain to the nearest whole number.

#### Returns

`Record`\<`"microseconds"` \| `"milliseconds"` \| `"seconds"` \| `"minutes"` \| `"hours"` \| `"days"` \| `"weeks"` \| `"months"` \| `"years"` \| `"decades"` \| `"centuries"`, `number`\>

#### Defined in

[chain.ts:50](https://github.com/jacobhumston/tc.js/blob/d10529ca342d5eaf02c25b075d22688b5dfd3995/src/chain.ts#L50)

---

### get()

> **get**(): `Record`\<`"microseconds"` \| `"milliseconds"` \| `"seconds"` \| `"minutes"` \| `"hours"` \| `"days"` \| `"weeks"` \| `"months"` \| `"years"` \| `"decades"` \| `"centuries"`, `number`\>

Gets the time values of this chain.

#### Returns

`Record`\<`"microseconds"` \| `"milliseconds"` \| `"seconds"` \| `"minutes"` \| `"hours"` \| `"days"` \| `"weeks"` \| `"months"` \| `"years"` \| `"decades"` \| `"centuries"`, `number`\>

#### Defined in

[chain.ts:22](https://github.com/jacobhumston/tc.js/blob/d10529ca342d5eaf02c25b075d22688b5dfd3995/src/chain.ts#L22)

---

### getUnit()

> **getUnit**(`unit`): `number`

Get a specific unit from this chain.

#### Parameters

• **unit**: `"microseconds"` \| `"milliseconds"` \| `"seconds"` \| `"minutes"` \| `"hours"` \| `"days"` \| `"weeks"` \| `"months"` \| `"years"` \| `"decades"` \| `"centuries"`

#### Returns

`number`

#### Defined in

[chain.ts:29](https://github.com/jacobhumston/tc.js/blob/d10529ca342d5eaf02c25b075d22688b5dfd3995/src/chain.ts#L29)

---

### multiply()

> **multiply**(`time`): [`ChainConvert`](ChainConvert.md)

Multiplies time in this chain.
This does not modify the total, instead it's by unit.
For example, if you multiply minutes by 2, only the amount of minutes will be multiplied.

#### Parameters

• **time**: [`AvailableConversions`](../interfaces/AvailableConversions.md)

The time to multiply.

#### Returns

[`ChainConvert`](ChainConvert.md)

#### Defined in

[chain.ts:103](https://github.com/jacobhumston/tc.js/blob/d10529ca342d5eaf02c25b075d22688b5dfd3995/src/chain.ts#L103)

---

### multiplyTotal()

> **multiplyTotal**(`time`, `unit`): [`ChainConvert`](ChainConvert.md)

Multiplies the total of this chain.
Note that this will modify the total, not the individual units.
This will convert your unites in the process.

#### Parameters

• **time**: `number`

The time to multiply.

• **unit**: `"microseconds"` \| `"milliseconds"` \| `"seconds"` \| `"minutes"` \| `"hours"` \| `"days"` \| `"weeks"` \| `"months"` \| `"years"` \| `"decades"` \| `"centuries"`

The unit of the time to multiply.

#### Returns

[`ChainConvert`](ChainConvert.md)

#### Defined in

[chain.ts:177](https://github.com/jacobhumston/tc.js/blob/d10529ca342d5eaf02c25b075d22688b5dfd3995/src/chain.ts#L177)

---

### reset()

> **reset**(): [`ChainConvert`](ChainConvert.md)

Resets the time in this chain.

#### Returns

[`ChainConvert`](ChainConvert.md)

#### Defined in

[chain.ts:126](https://github.com/jacobhumston/tc.js/blob/d10529ca342d5eaf02c25b075d22688b5dfd3995/src/chain.ts#L126)

---

### roundConvert()

> **roundConvert**(`precision`?): `Record`\<`"microseconds"` \| `"milliseconds"` \| `"seconds"` \| `"minutes"` \| `"hours"` \| `"days"` \| `"weeks"` \| `"months"` \| `"years"` \| `"decades"` \| `"centuries"`, `number`\>

Rounds the time values of this chain to the specified precision.

#### Parameters

• **precision?**: `number`

#### Returns

`Record`\<`"microseconds"` \| `"milliseconds"` \| `"seconds"` \| `"minutes"` \| `"hours"` \| `"days"` \| `"weeks"` \| `"months"` \| `"years"` \| `"decades"` \| `"centuries"`, `number`\>

#### Defined in

[chain.ts:43](https://github.com/jacobhumston/tc.js/blob/d10529ca342d5eaf02c25b075d22688b5dfd3995/src/chain.ts#L43)

---

### subtract()

> **subtract**(`time`): [`ChainConvert`](ChainConvert.md)

Subtracts time from this chain.
This does not modify the total, instead it's by unit.
For example, if you subtract 2 minutes, only the amount of minutes will be decreased.

#### Parameters

• **time**: [`AvailableConversions`](../interfaces/AvailableConversions.md)

The time to subtract.

#### Returns

[`ChainConvert`](ChainConvert.md)

#### Defined in

[chain.ts:90](https://github.com/jacobhumston/tc.js/blob/d10529ca342d5eaf02c25b075d22688b5dfd3995/src/chain.ts#L90)

---

### subtractTotal()

> **subtractTotal**(`time`, `unit`): [`ChainConvert`](ChainConvert.md)

Subtracts time from the total of this chain.
Note that this will modify the total, not the individual units.
This will convert your unites in the process.

#### Parameters

• **time**: `number`

The time to subtract.

• **unit**: `"microseconds"` \| `"milliseconds"` \| `"seconds"` \| `"minutes"` \| `"hours"` \| `"days"` \| `"weeks"` \| `"months"` \| `"years"` \| `"decades"` \| `"centuries"`

The unit of the time to subtract.

#### Returns

[`ChainConvert`](ChainConvert.md)

#### Defined in

[chain.ts:165](https://github.com/jacobhumston/tc.js/blob/d10529ca342d5eaf02c25b075d22688b5dfd3995/src/chain.ts#L165)

---

### toJSON()

> **toJSON**(): `string`

Converts this chain to a JSON string.
This is the same as calling `JSON.stringify(chain.get())`.

#### Returns

`string`

#### Defined in

[chain.ts:142](https://github.com/jacobhumston/tc.js/blob/d10529ca342d5eaf02c25b075d22688b5dfd3995/src/chain.ts#L142)
