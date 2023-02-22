import { DetailedHTMLProps, TimeHTMLAttributes, useCallback, useEffect, useState } from "react";
import { TimeAgoProps } from ".";
import { dateParser } from "./dateParser";
import { formatter } from "./formatter";

const MINUTE = 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;
const WEEK = DAY * 7;
const MONTH = DAY * 30;
const YEAR = DAY * 365;

const Component = ({ date, live = true, ...props }: TimeAgoProps & DetailedHTMLProps<TimeHTMLAttributes<HTMLTimeElement>, HTMLTimeElement>) => {
  const now = useCallback(() => Date.now(), []);
  const minPeriod = 0;
  const maxPeriod = WEEK;
  const [timeNow, setTimeNow] = useState(now());

  useEffect(() => {
    if (!live) return;
    const tick = (): 0 | NodeJS.Timeout => {
      const _then = dateParser(date).valueOf();
      if (!_then) return 0;
      const seconds = Math.round(Math.abs(timeNow - _then) / 1000);
      const unboundPeriod = seconds < MINUTE ? 1000 : seconds < HOUR ? 1000 * MINUTE : seconds < DAY ? 1000 * HOUR : 1000 * WEEK;

      const period = Math.min(Math.max(unboundPeriod, minPeriod * 1000), maxPeriod * 1000);

      if (period) {
        return setTimeout(() => {
          setTimeNow(now());
        }, period);
      }
      return 0;
    };
    const timeoutId = tick();
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [date, live, maxPeriod, minPeriod, now, timeNow]);

  const then = dateParser(date).valueOf();
  const seconds = Math.round(Math.abs(timeNow - then) / 1000);
  const suffix = then < timeNow ? "ago" : "from now";

  const [value, unit] =
    seconds < MINUTE
      ? [Math.round(seconds), "second"]
      : seconds < HOUR
      ? [Math.round(seconds / MINUTE), "minute"]
      : seconds < DAY
      ? [Math.round(seconds / HOUR), "hour"]
      : seconds < WEEK
      ? [Math.round(seconds / DAY), "day"]
      : seconds < MONTH
      ? [Math.round(seconds / WEEK), "week"]
      : seconds < YEAR
      ? [Math.round(seconds / MONTH), "month"]
      : [Math.round(seconds / YEAR), "year"];

  const title = undefined;
  const _title =
    typeof title === "undefined" ? (typeof date === "string" ? date : dateParser(date).toISOString().substring(0, 16).replace("T", " ")) : title;

  return (
    <time dateTime={dateParser(date).toISOString()} {...props} title={_title}>
      {formatter(value, unit, suffix)}
    </time>
  );
};

export default Component;
