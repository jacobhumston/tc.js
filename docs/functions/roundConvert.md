[**@jacobhumston/tc.js**](../README.md)

---

[@jacobhumston/tc.js](../globals.md) / roundConvert

# Function: roundConvert()

> **roundConvert**(`time`, `precision`): `Record`\<`"microseconds"` \| `"milliseconds"` \| `"seconds"` \| `"minutes"` \| `"hours"` \| `"days"` \| `"weeks"` \| `"months"` \| `"years"` \| `"decades"` \| `"centuries"`, `number`\>

Defined in: [convert.ts:34](https://github.com/jacobhumston/tc.js/blob/02ac7b9a1510a60d4dd0b79092623ee0625f9edf/src/convert.ts#L34)

Rounds the converted time values to the specified precision.

## Parameters

### time

[`AvailableConversions`](../interfaces/AvailableConversions.md)

The time to convert and round.

### precision

`number` = `2`

The precision to round the values to.

## Returns

`Record`\<`"microseconds"` \| `"milliseconds"` \| `"seconds"` \| `"minutes"` \| `"hours"` \| `"days"` \| `"weeks"` \| `"months"` \| `"years"` \| `"decades"` \| `"centuries"`, `number`\>

The rounded converted time values.
