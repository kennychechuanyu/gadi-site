const DASH = /[\u2013\u2014-]/;

export function zonedToUtc(date: Date, hhmm: string, timeZone: string): Date {
  const [h, m] = hhmm.split(":").map(Number);
  const guess = Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(), h, m);
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone,
    hourCycle: "h23",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  })
    .formatToParts(new Date(guess))
    .reduce<Record<string, string>>((acc, p) => {
      acc[p.type] = p.value;
      return acc;
    }, {});
  const seenAsUtc = Date.UTC(+parts.year, +parts.month - 1, +parts.day, +parts.hour, +parts.minute);
  return new Date(guess - (seenAsUtc - guess));
}

export interface Span {
  start: string;
  end?: string;
}

export function toInstants(raw: string | undefined, date: Date | undefined, timeZone: string): Span | null {
  if (!raw || !date) return null;
  const times = raw.match(/\d{1,2}:\d{2}/g);
  if (!times) return null;
  const start = zonedToUtc(date, times[0], timeZone);
  const end = times.length > 1 && DASH.test(raw) ? zonedToUtc(date, times[1], timeZone) : undefined;
  if (end && end.getTime() < start.getTime()) end.setUTCDate(end.getUTCDate() + 1);
  return { start: start.toISOString(), end: end?.toISOString() };
}

interface Dated {
  date: Date;
  endDate?: Date;
  time?: string;
  timezone: string;
}

export function eventEnd({ date, endDate, time, timezone }: Dated): Date {
  const day = 24 * 60 * 60 * 1000;
  if (endDate) return new Date(endDate.getTime() + day);
  const span = toInstants(time, date, timezone);
  return new Date(span?.end ?? date.getTime() + day);
}

export function hasEnded(event: Dated, now = new Date()): boolean {
  return eventEnd(event).getTime() < now.getTime();
}

export function wallClock(iso: string, timeZone: string): string {
  return new Intl.DateTimeFormat("en-GB", { timeZone, hour: "2-digit", minute: "2-digit", hourCycle: "h23" }).format(new Date(iso));
}

export function zoneName(iso: string, timeZone: string): string {
  return (
    new Intl.DateTimeFormat("en-GB", { timeZone, timeZoneName: "short" })
      .formatToParts(new Date(iso))
      .find((p) => p.type === "timeZoneName")?.value ?? timeZone
  );
}
