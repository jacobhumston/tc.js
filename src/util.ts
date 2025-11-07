import { AvailableConversions } from './conversions.js';
import { convertTo } from './convert.js';

/**
 * A wrapper for {@linkcode setTimeout} that uses {@linkcode convertTo} for the timeout argument.
 * @param handler Your timeout handler.
 * @param time The timeout.
 * @returns Response of the created timeout.
 */
export function createTimeout(
    handler: Parameters<typeof setTimeout>[0],
    time: AvailableConversions
): ReturnType<typeof setTimeout> {
    return setTimeout(handler, convertTo(time, 'milliseconds'));
}

/**
 * A wrapper for {@linkcode setInterval} that uses {@linkcode convertTo} for the timeout argument.
 * @param handler Your interval handler.
 * @param time The timeout.
 * @returns Response of the created internal.
 */
export function createInterval(
    handler: Parameters<typeof setInterval>[0],
    time: AvailableConversions
): ReturnType<typeof setInterval> {
    return setInterval(handler, convertTo(time, 'milliseconds'));
}
