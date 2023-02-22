"use client";
import { DetailedHTMLProps, TimeHTMLAttributes, useEffect, useState } from "react";
import Component from "./Component";
import Fallback from "./Fallback";

export interface TimeAgoProps {
  date: string | number | Date;
  live?: boolean;
}

const TimeAgo = ({ date, live = true, ...props }: TimeAgoProps & DetailedHTMLProps<TimeHTMLAttributes<HTMLTimeElement>, HTMLTimeElement>) => {
  const [hydratated, setHydratated] = useState(false);

  useEffect(() => {
    setHydratated(true);
  }, []);

  if (!hydratated) {
    return <Fallback suppressHydrationWarning date={date} {...props} />;
  }

  return <Component date={date} live={live} {...props} />;
};

export default TimeAgo;
