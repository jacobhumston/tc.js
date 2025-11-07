[**@jacobhumston/tc.js**](../README.md)

---

[@jacobhumston/tc.js](../globals.md) / createTimeout

# Function: createTimeout()

> **createTimeout**(`handler`, `time`): `number`

Defined in: [util.ts:10](https://github.com/jacobhumston/tc.js/blob/02ac7b9a1510a60d4dd0b79092623ee0625f9edf/src/util.ts#L10)

A wrapper for `setTimeout` that uses [`convertTo`](convertTo.md) for the timeout argument.

## Parameters

### handler

`TimerHandler`

Your timeout handler.

### time

[`AvailableConversions`](../interfaces/AvailableConversions.md)

The timeout.

## Returns

`number`

Response of the created timeout.
