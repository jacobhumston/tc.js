[**@jacobhumston/tc.js**](../README.md)

---

[@jacobhumston/tc.js](../globals.md) / createInterval

# Function: createInterval()

> **createInterval**(`handler`, `time`): `number`

Defined in: util.ts:23

A wrapper for `setInterval` that uses [`convertTo`](convertTo.md) for the timeout argument.

## Parameters

### handler

`TimerHandler`

Your interval handler.

### time

[`AvailableConversions`](../interfaces/AvailableConversions.md)

The timeout.

## Returns

`number`

Response of the created internal.
