[**@jacobhumston/tc.js**](../README.md)

---

[@jacobhumston/tc.js](../globals.md) / convertTo

# Function: convertTo()

> **convertTo**(`time`, `unit`): `number`

Defined in: [convert.ts:51](https://github.com/jacobhumston/tc.js/blob/02ac7b9a1510a60d4dd0b79092623ee0625f9edf/src/convert.ts#L51)

Converts the provided time values to the specified unit.

## Parameters

### time

[`AvailableConversions`](../interfaces/AvailableConversions.md)

The time to convert.

### unit

The unit to convert the time to.

`"microseconds"` | `"milliseconds"` | `"seconds"` | `"minutes"` | `"hours"` | `"days"` | `"weeks"` | `"months"` | `"years"` | `"decades"` | `"centuries"`

## Returns

`number`

The converted time value.
