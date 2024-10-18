[**@jacobhumston/tc.js**](../README.md) • **Docs**

---

[@jacobhumston/tc.js](../globals.md) / roundConvert

# Function: roundConvert()

> **roundConvert**(`time`, `precision`): `Record`\<`"microseconds"` \| `"milliseconds"` \| `"seconds"` \| `"minutes"` \| `"hours"` \| `"days"` \| `"weeks"` \| `"months"` \| `"years"` \| `"decades"` \| `"centuries"`, `number`\>

Rounds the converted time values to the specified precision.

## Parameters

• **time**: [`AvailableConversions`](../interfaces/AvailableConversions.md)

The time to convert and round.

• **precision**: `number` = `2`

The precision to round the values to.

## Returns

`Record`\<`"microseconds"` \| `"milliseconds"` \| `"seconds"` \| `"minutes"` \| `"hours"` \| `"days"` \| `"weeks"` \| `"months"` \| `"years"` \| `"decades"` \| `"centuries"`, `number`\>

The rounded converted time values.

## Defined in

convert.ts:34
