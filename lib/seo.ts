export const SITE_URL = "https://www.abbasataie.com";

/** Converts "m:ss" or "h:mm:ss" to ISO 8601 duration (e.g. PT2M5S). */
export function toIsoDuration(duration: string): string {
  const parts = duration.split(":").map(Number);
  if (parts.some((n) => Number.isNaN(n))) return "PT0S";

  if (parts.length === 3) {
    const [hours, minutes, seconds] = parts;
    return `PT${hours}H${minutes}M${seconds}S`;
  }

  const [minutes, seconds] = parts;
  return `PT${minutes}M${seconds}S`;
}

/** Converts a year string to an ISO 8601 date. */
export function yearToIsoDate(year: string): string {
  return `${year}-01-01`;
}
