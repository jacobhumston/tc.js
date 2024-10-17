/**
 * Conversions, based on the amount of microseconds in x.
 * Note that the month conversion and beyond is an approximation.
 */
export const conversions = {
    /** The amount of microseconds in a microsecond. (Base value, so 1 of course.) */
    microseconds: 1,
    /** The amount of microseconds in a millisecond. */
    milliseconds: 1000,
    /** The amount of microseconds in a second. */
    seconds: 1e6,
    /** The amount of microseconds in a minute. */
    minutes: 6e7,
    /** The amount of microseconds in an hour. */
    hours: 3.6e9,
    /** The amount of microseconds in a day. */
    days: 8.64e10,
    /** The amount of microseconds in a week. */
    weeks: 6.048e11,
    /** The amount of microseconds in a month. */
    months: 2.629746e12,
    /** The amount of microseconds in a year. */
    years: 3.1556952e13,
    /** The amount of microseconds in a decade. */
    decades: 3.1556952e14,
    /** The amount of microseconds in a century. */
    centuries: 3.1556952e15,
};

/**
 * The available time conversions.
 * Essentially the same as {@link conversions}, but as a type with the values being optional.
 */
export interface AvailableConversions {
    /** The amount of microseconds to provide. */
    microseconds?: number;
    /** The amount of milliseconds to provide. */
    milliseconds?: number;
    /** The amount of seconds to provide. */
    seconds?: number;
    /** The amount of minutes to provide. */
    minutes?: number;
    /** The amount of hours to provide. */
    hours?: number;
    /** The amount of days to provide. */
    days?: number;
    /** The amount of weeks to provide. */
    weeks?: number;
    /** The amount of months to provide. */
    months?: number;
    /** The amount of years to provide. */
    years?: number;
    /* The amount of decades to provide. */
    decades?: number;
    /** The amount of centuries to provide. */
    centuries?: number;
}
