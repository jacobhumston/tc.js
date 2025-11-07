[**@jacobhumston/tc.js**](../README.md)

---

[@jacobhumston/tc.js](../globals.md) / ChainConvert

# Class: ChainConvert

Defined in: [chain.ts:7](https://github.com/jacobhumston/tc.js/blob/5b9d9fa89398660ade834853067160dea3c28dda/src/chain.ts#L7)

A class that chains conversions together.

## Constructors

### Constructor

> **new ChainConvert**(`time`): `ChainConvert`

Defined in: [chain.ts:15](https://github.com/jacobhumston/tc.js/blob/5b9d9fa89398660ade834853067160dea3c28dda/src/chain.ts#L15)

Creates a new chain.

#### Parameters

##### time

[`AvailableConversions`](../interfaces/AvailableConversions.md) = `{}`

The time to chain.

#### Returns

`ChainConvert`

## Methods

### add()

> **add**(`time`): `ChainConvert`

Defined in: [chain.ts:82](https://github.com/jacobhumston/tc.js/blob/5b9d9fa89398660ade834853067160dea3c28dda/src/chain.ts#L82)

Adds time to this chain.
This does not modify the total, instead it's by unit.
For example, if you add 2 minutes, only the amount of minutes will be increased.

#### Parameters

##### time

[`AvailableConversions`](../interfaces/AvailableConversions.md)

The time to add.

#### Returns

`ChainConvert`

---

### addTotal()

> **addTotal**(`time`, `unit`): `ChainConvert`

Defined in: [chain.ts:158](https://github.com/jacobhumston/tc.js/blob/5b9d9fa89398660ade834853067160dea3c28dda/src/chain.ts#L158)

Adds time to the total of this chain.
Note that this will modify the total, not the individual units.
This will convert your unites in the process.

#### Parameters

##### time

`number`

The time to add.

##### unit

The unit of the time to add.

`"microseconds"` | `"milliseconds"` | `"seconds"` | `"minutes"` | `"hours"` | `"days"` | `"weeks"` | `"months"` | `"years"` | `"decades"` | `"centuries"`

#### Returns

`ChainConvert`

---

### clone()

> **clone**(): `ChainConvert`

Defined in: [chain.ts:139](https://github.com/jacobhumston/tc.js/blob/5b9d9fa89398660ade834853067160dea3c28dda/src/chain.ts#L139)

Clones this chain.

#### Returns

`ChainConvert`

---

### convert()

> **convert**(): `Record`\<`"microseconds"` \| `"milliseconds"` \| `"seconds"` \| `"minutes"` \| `"hours"` \| `"days"` \| `"weeks"` \| `"months"` \| `"years"` \| `"decades"` \| `"centuries"`, `number`\>

Defined in: [chain.ts:37](https://github.com/jacobhumston/tc.js/blob/5b9d9fa89398660ade834853067160dea3c28dda/src/chain.ts#L37)

Converts the time values of this chain.
Uses [`convert`](../functions/convert.md).

#### Returns

`Record`\<`"microseconds"` \| `"milliseconds"` \| `"seconds"` \| `"minutes"` \| `"hours"` \| `"days"` \| `"weeks"` \| `"months"` \| `"years"` \| `"decades"` \| `"centuries"`, `number`\>

---

### convertTo()

> **convertTo**(`unit`): `number`

Defined in: [chain.ts:63](https://github.com/jacobhumston/tc.js/blob/5b9d9fa89398660ade834853067160dea3c28dda/src/chain.ts#L63)

Convert the time values from this chain to a specific unit.
Uses [`convertTo`](../functions/convertTo.md).

#### Parameters

##### unit

The unit to get.

`"microseconds"` | `"milliseconds"` | `"seconds"` | `"minutes"` | `"hours"` | `"days"` | `"weeks"` | `"months"` | `"years"` | `"decades"` | `"centuries"`

#### Returns

`number`

The value of the unit.

---

### convertTotTotal()

> **convertTotTotal**(): `number`

Defined in: [chain.ts:72](https://github.com/jacobhumston/tc.js/blob/5b9d9fa89398660ade834853067160dea3c28dda/src/chain.ts#L72)

Convert to the total amount of microseconds from this chain.
Uses [`convertToTotal`](../functions/convertToTotal.md).

#### Returns

`number`

The total amount of microseconds.

---

### divide()

> **divide**(`time`): `ChainConvert`

Defined in: [chain.ts:121](https://github.com/jacobhumston/tc.js/blob/5b9d9fa89398660ade834853067160dea3c28dda/src/chain.ts#L121)

Divides time in this chain.
This does not modify the total, instead it's by unit.
For example, if you divide minutes by 2, only the amount of minutes will be divided.

#### Parameters

##### time

[`AvailableConversions`](../interfaces/AvailableConversions.md)

The time to divide.

#### Returns

`ChainConvert`

---

### divideTotal()

> **divideTotal**(`time`, `unit`): `ChainConvert`

Defined in: [chain.ts:194](https://github.com/jacobhumston/tc.js/blob/5b9d9fa89398660ade834853067160dea3c28dda/src/chain.ts#L194)

Divides the total of this chain.
Note that this will modify the total, not the individual units.
This will convert your unites in the process.

#### Parameters

##### time

`number`

The time to divide.

##### unit

The unit of the time to divide.

`"microseconds"` | `"milliseconds"` | `"seconds"` | `"minutes"` | `"hours"` | `"days"` | `"weeks"` | `"months"` | `"years"` | `"decades"` | `"centuries"`

#### Returns

`ChainConvert`

---

### floorConvert()

> **floorConvert**(): `Record`\<`"microseconds"` \| `"milliseconds"` \| `"seconds"` \| `"minutes"` \| `"hours"` \| `"days"` \| `"weeks"` \| `"months"` \| `"years"` \| `"decades"` \| `"centuries"`, `number`\>

Defined in: [chain.ts:53](https://github.com/jacobhumston/tc.js/blob/5b9d9fa89398660ade834853067160dea3c28dda/src/chain.ts#L53)

Floors the time values of this chain to the nearest whole number.
Uses [`floorConvert`](../functions/floorConvert.md).

#### Returns

`Record`\<`"microseconds"` \| `"milliseconds"` \| `"seconds"` \| `"minutes"` \| `"hours"` \| `"days"` \| `"weeks"` \| `"months"` \| `"years"` \| `"decades"` \| `"centuries"`, `number`\>

---

### get()

> **get**(): `Record`\<`"microseconds"` \| `"milliseconds"` \| `"seconds"` \| `"minutes"` \| `"hours"` \| `"days"` \| `"weeks"` \| `"months"` \| `"years"` \| `"decades"` \| `"centuries"`, `number`\>

Defined in: [chain.ts:22](https://github.com/jacobhumston/tc.js/blob/5b9d9fa89398660ade834853067160dea3c28dda/src/chain.ts#L22)

Gets the time values of this chain.

#### Returns

`Record`\<`"microseconds"` \| `"milliseconds"` \| `"seconds"` \| `"minutes"` \| `"hours"` \| `"days"` \| `"weeks"` \| `"months"` \| `"years"` \| `"decades"` \| `"centuries"`, `number`\>

---

### getUnit()

> **getUnit**(`unit`): `number`

Defined in: [chain.ts:29](https://github.com/jacobhumston/tc.js/blob/5b9d9fa89398660ade834853067160dea3c28dda/src/chain.ts#L29)

Get a specific unit from this chain.

#### Parameters

##### unit

`"microseconds"` | `"milliseconds"` | `"seconds"` | `"minutes"` | `"hours"` | `"days"` | `"weeks"` | `"months"` | `"years"` | `"decades"` | `"centuries"`

#### Returns

`number`

---

### multiply()

> **multiply**(`time`): `ChainConvert`

Defined in: [chain.ts:108](https://github.com/jacobhumston/tc.js/blob/5b9d9fa89398660ade834853067160dea3c28dda/src/chain.ts#L108)

Multiplies time in this chain.
This does not modify the total, instead it's by unit.
For example, if you multiply minutes by 2, only the amount of minutes will be multiplied.

#### Parameters

##### time

[`AvailableConversions`](../interfaces/AvailableConversions.md)

The time to multiply.

#### Returns

`ChainConvert`

---

### multiplyTotal()

> **multiplyTotal**(`time`, `unit`): `ChainConvert`

Defined in: [chain.ts:182](https://github.com/jacobhumston/tc.js/blob/5b9d9fa89398660ade834853067160dea3c28dda/src/chain.ts#L182)

Multiplies the total of this chain.
Note that this will modify the total, not the individual units.
This will convert your unites in the process.

#### Parameters

##### time

`number`

The time to multiply.

##### unit

The unit of the time to multiply.

`"microseconds"` | `"milliseconds"` | `"seconds"` | `"minutes"` | `"hours"` | `"days"` | `"weeks"` | `"months"` | `"years"` | `"decades"` | `"centuries"`

#### Returns

`ChainConvert`

---

### reset()

> **reset**(): `ChainConvert`

Defined in: [chain.ts:131](https://github.com/jacobhumston/tc.js/blob/5b9d9fa89398660ade834853067160dea3c28dda/src/chain.ts#L131)

Resets the time in this chain.

#### Returns

`ChainConvert`

---

### roundConvert()

> **roundConvert**(`precision?`): `Record`\<`"microseconds"` \| `"milliseconds"` \| `"seconds"` \| `"minutes"` \| `"hours"` \| `"days"` \| `"weeks"` \| `"months"` \| `"years"` \| `"decades"` \| `"centuries"`, `number`\>

Defined in: [chain.ts:45](https://github.com/jacobhumston/tc.js/blob/5b9d9fa89398660ade834853067160dea3c28dda/src/chain.ts#L45)

Rounds the time values of this chain to the specified precision.
Uses [`roundConvert`](../functions/roundConvert.md).

#### Parameters

##### precision?

`number`

#### Returns

`Record`\<`"microseconds"` \| `"milliseconds"` \| `"seconds"` \| `"minutes"` \| `"hours"` \| `"days"` \| `"weeks"` \| `"months"` \| `"years"` \| `"decades"` \| `"centuries"`, `number`\>

---

### subtract()

> **subtract**(`time`): `ChainConvert`

Defined in: [chain.ts:95](https://github.com/jacobhumston/tc.js/blob/5b9d9fa89398660ade834853067160dea3c28dda/src/chain.ts#L95)

Subtracts time from this chain.
This does not modify the total, instead it's by unit.
For example, if you subtract 2 minutes, only the amount of minutes will be decreased.

#### Parameters

##### time

[`AvailableConversions`](../interfaces/AvailableConversions.md)

The time to subtract.

#### Returns

`ChainConvert`

---

### subtractTotal()

> **subtractTotal**(`time`, `unit`): `ChainConvert`

Defined in: [chain.ts:170](https://github.com/jacobhumston/tc.js/blob/5b9d9fa89398660ade834853067160dea3c28dda/src/chain.ts#L170)

Subtracts time from the total of this chain.
Note that this will modify the total, not the individual units.
This will convert your unites in the process.

#### Parameters

##### time

`number`

The time to subtract.

##### unit

The unit of the time to subtract.

`"microseconds"` | `"milliseconds"` | `"seconds"` | `"minutes"` | `"hours"` | `"days"` | `"weeks"` | `"months"` | `"years"` | `"decades"` | `"centuries"`

#### Returns

`ChainConvert`

---

### toJSON()

> **toJSON**(): `string`

Defined in: [chain.ts:147](https://github.com/jacobhumston/tc.js/blob/5b9d9fa89398660ade834853067160dea3c28dda/src/chain.ts#L147)

Converts this chain to a JSON string.
This is the same as calling `JSON.stringify(chain.get())`.

#### Returns

`string`
