import { conversions, AvailableConversions } from './conversions.js';

/**
 * Converts the provided time values to all available conversions.
 * @param time The time to convert.
 * @returns The converted time values.
 */
export function convert(time: AvailableConversions) {
    let total = 0; // Microseconds.

    // Calculate the total.
    for (const [unit, value] of Object.entries(time) as [keyof typeof conversions, number][]) {
        total += value * conversions[unit];
    }

    // Calculate the conversions based on the total.
    const totals = Object.entries(conversions).reduce(
        (accumulator, [unit, conversion]) => {
            accumulator[unit as keyof typeof conversions] = total / conversion;
            return accumulator;
        },
        {} as Record<keyof typeof conversions, number>
    );

    return totals;
}

/**
 * Rounds the converted time values to the specified precision.
 * @param time The time to convert and round.
 * @param precision The precision to round the values to.
 * @returns The rounded converted time values.
 */
export function roundConvert(time: AvailableConversions, precision = 2) {
    const totals = convert(time);

    // Round the totals.
    for (const [unit, total] of Object.entries(totals) as [keyof typeof conversions, number][]) {
        totals[unit] = Number(total.toFixed(precision));
    }

    return totals;
}

/**
 * Converts the provided time values to the specified unit.
 * @param time The time to convert.
 * @param unit The unit to convert the time to.
 * @returns The converted time value.
 */
export function convertTo(time: AvailableConversions, unit: keyof typeof conversions) {
    const totals = convert(time);
    return totals[unit];
}

/**
 * Converts the provided time values to microseconds.
 * Same as `convertTo(time, 'microseconds')`.
 * @param time The time to convert.
 * @returns The total amount of microseconds.
 */
export function convertToTotal(time: AvailableConversions) {
    return convert(time).microseconds;
}

/**
 * Floors the converted time values to the nearest whole number.
 * @param time The time to convert.
 * @returns The floored converted time values.
 */
export function floorConvert(time: AvailableConversions) {
    const totals = convert(time);

    // Floor the totals.
    for (const [unit, total] of Object.entries(totals) as [keyof typeof conversions, number][]) {
        totals[unit] = Math.floor(total);
    }

    return totals;
}
