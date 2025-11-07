[**@jacobhumston/tc.js**](../README.md)

---

[@jacobhumston/tc.js](../globals.md) / createTimeout

# Function: createTimeout()

> **createTimeout**(`handler`, `time`): `number`

Defined in: util.ts:10

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
