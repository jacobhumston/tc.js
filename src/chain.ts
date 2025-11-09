import { convert, roundConvert, floorConvert, convertTo, convertToTotal } from './convert.js';
import { conversions, AvailableConversions } from './conversions.js';

/**
 * A class that chains conversions together.
 */
export class ChainConvert {
    /** This chain's time stored. */
    private time: Record<keyof typeof conversions, number>;

    /**
     * Creates a new chain.
     * Note that the provided time for this constructor is converted, use {@linkcode ChainConvert.add} to bypass this behavior.
     * @param time The time to chain.
     */
    constructor(time: AvailableConversions = {}) {
        this.time = convert(time);
    }

    /**
     * Gets the time values of this chain.
     */
    get() {
        return this.time;
    }

    /**
     * Get a specific unit from this chain.
     */
    getUnit(unit: keyof typeof conversions) {
        return this.time[unit];
    }

    /**
     * Converts the time values of this chain.
     * Uses {@linkcode convert}.
     */
    convert() {
        return convert(this.time);
    }

    /**
     * Rounds the time values of this chain to the specified precision.
     * Uses {@linkcode roundConvert}.
     */
    roundConvert(precision?: number) {
        return roundConvert(this.time, precision);
    }

    /**
     * Floors the time values of this chain to the nearest whole number.
     * Uses {@linkcode floorConvert}.
     */
    floorConvert() {
        return floorConvert(this.time);
    }

    /**
     * Convert the time values from this chain to a specific unit.
     * Uses {@linkcode convertTo}.
     * @param unit The unit to get.
     * @returns The value of the unit.
     */
    convertTo(unit: keyof typeof conversions) {
        return convertTo(this.time, unit);
    }

    /**
     * Convert to the total amount of microseconds from this chain.
     * Uses {@linkcode convertToTotal}.
     * @returns The total amount of microseconds.
     */
    convertTotTotal() {
        return convertToTotal(this.time);
    }

    /**
     * Adds time to this chain.
     * This does not modify the total, instead it's by unit.
     * For example, if you add 2 minutes, only the amount of minutes will be increased.
     * @param time The time to add.
     */
    add(time: AvailableConversions) {
        for (const [unit, value] of Object.entries(time) as [keyof typeof conversions, number][]) {
            this.time[unit] += value;
        }
        return this;
    }

    /**
     * Subtracts time from this chain.
     * This does not modify the total, instead it's by unit.
     * For example, if you subtract 2 minutes, only the amount of minutes will be decreased.
     * @param time The time to subtract.
     */
    subtract(time: AvailableConversions) {
        for (const [unit, value] of Object.entries(time) as [keyof typeof conversions, number][]) {
            this.time[unit] -= value;
        }
        return this;
    }

    /**
     * Multiplies time in this chain.
     * This does not modify the total, instead it's by unit.
     * For example, if you multiply minutes by 2, only the amount of minutes will be multiplied.
     * @param time The time to multiply.
     */
    multiply(time: AvailableConversions) {
        for (const [unit, value] of Object.entries(time) as [keyof typeof conversions, number][]) {
            this.time[unit] *= value;
        }
        return this;
    }

    /**
     * Divides time in this chain.
     * This does not modify the total, instead it's by unit.
     * For example, if you divide minutes by 2, only the amount of minutes will be divided.
     * @param time The time to divide.
     */
    divide(time: AvailableConversions) {
        for (const [unit, value] of Object.entries(time) as [keyof typeof conversions, number][]) {
            this.time[unit] /= value;
        }
        return this;
    }

    /**
     * Resets the time in this chain.
     */
    reset() {
        this.time = convert({});
        return this;
    }

    /**
     * Clones this chain.
     */
    clone() {
        return new ChainConvert(this.time);
    }

    /**
     * Converts this chain to a JSON string.
     * This is the same as calling `JSON.stringify(chain.get())`.
     */
    toJSON() {
        return JSON.stringify(this.time);
    }

    /**
     * Adds time to the total of this chain.
     * Note that this will modify the total, not the individual units.
     * This will convert your unites in the process.
     * @param time The time to add.
     * @param unit The unit of the time to add.
     */
    addTotal(time: number, unit: keyof typeof conversions) {
        this.time = convert({ [unit]: this.convert()[unit] + time });
        return this;
    }

    /**
     * Subtracts time from the total of this chain.
     * Note that this will modify the total, not the individual units.
     * This will convert your unites in the process.
     * @param time The time to subtract.
     * @param unit The unit of the time to subtract.
     */
    subtractTotal(time: number, unit: keyof typeof conversions) {
        this.time = convert({ [unit]: this.convert()[unit] - time });
        return this;
    }

    /**
     * Multiplies the total of this chain.
     * Note that this will modify the total, not the individual units.
     * This will convert your unites in the process.
     * @param time The time to multiply.
     * @param unit The unit of the time to multiply.
     */
    multiplyTotal(time: number, unit: keyof typeof conversions) {
        this.time = convert({ [unit]: this.convert()[unit] * time });
        return this;
    }

    /**
     * Divides the total of this chain.
     * Note that this will modify the total, not the individual units.
     * This will convert your unites in the process.
     * @param time The time to divide.
     * @param unit The unit of the time to divide.
     */
    divideTotal(time: number, unit: keyof typeof conversions) {
        this.time = convert({ [unit]: this.convert()[unit] / time });
        return this;
    }
}
