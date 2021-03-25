import { Context, createContext, useContext, useEffect, useState } from "react";
import { config } from "../config";
import { DefaultProps } from "../types/common";
import { generateDayFacetRange } from "../utils/generateDayFacetRange";
import { range } from "../utils/range";

export type TimeContextType = {
  hour: number;
  facet: DayFacet;
};

export enum DayFacet {
  MORNING,
  MID_DAY,
  EVENING,
  NIGHT,
}

const INITIAL_HOUR = 9;
const INITIAL_FACET = DayFacet.MORNING;

export const TimeContext: Context<TimeContextType> = createContext<TimeContextType>(
  {
    hour: INITIAL_HOUR,
    facet: INITIAL_FACET,
  }
);

export function MasterOfTime(props: DefaultProps) {
  const [hour, setHour] = useState(INITIAL_HOUR);
  const [facet, setFacet] = useState(INITIAL_FACET);

  useEffect(() => {
    const timerId = setTimeout(() => {
      const updatedHour = (hour + 1) % 24;
      setHour(updatedHour);
      setFacet(generateDayFacet(updatedHour));
    }, config.time.hourDuration * 1000);

    return () => clearTimeout(timerId);
  }, [hour]);

  const contextValue: TimeContextType = {
    hour,
    facet,
  };

  return (
    <TimeContext.Provider value={contextValue}>
      {props.children}
    </TimeContext.Provider>
  );
}

function generateDayFacet(hour: number): DayFacet {
  const value = [
    generateDayFacetRange(DayFacet.MORNING),
    generateDayFacetRange(DayFacet.MID_DAY),
    generateDayFacetRange(DayFacet.EVENING),
    generateDayFacetRange(DayFacet.NIGHT),
  ];

  switch (true) {
    case generateDayFacetRange(DayFacet.MORNING).includes(hour):
      return DayFacet.MORNING;
    case generateDayFacetRange(DayFacet.MID_DAY).includes(hour):
      return DayFacet.MID_DAY;
    case generateDayFacetRange(DayFacet.EVENING).includes(hour):
      return DayFacet.EVENING;
    case generateDayFacetRange(DayFacet.NIGHT).includes(hour):
      return DayFacet.NIGHT;
    default:
      throw new Error(`No day facet found for hour ${hour}`);
  }
}
