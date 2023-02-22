import { DetailedHTMLProps, TimeHTMLAttributes } from "react";
import { TimeAgoProps } from ".";
import { dateParser } from "./dateParser";
import { formatter } from "./formatter";

const MINUTE = 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;
const WEEK = DAY * 7;
const MONTH = DAY * 30;
const YEAR = DAY * 365;

const Fallback = ({ date, ...props }: TimeAgoProps & DetailedHTMLProps<TimeHTMLAttributes<HTMLTimeElement>, HTMLTimeElement>) => {
  const now = Date.now();
  const then = dateParser(date).valueOf();
  const seconds = Math.round(Math.abs(now - then) / 1000);
  const suffix = then < now ? "ago" : "from now";

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

export default Fallback;
