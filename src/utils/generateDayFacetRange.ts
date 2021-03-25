import { config } from "../config";
import { DayFacet } from "../components/Hero/MasterOfTime";
import { range } from "./range";

export function generateDayFacetRange(facet: DayFacet): Array<number> {
  const { facetDurations } = config.time;
  const startingHour = getStartingHour(facet);
  return range(startingHour, facetDurations[facet] + startingHour).map(
    (hour) => hour % 24
  );
}

function getStartingHour(facet: DayFacet): number {
  const { morningHour, facetDurations } = config.time;

  switch (facet) {
    case DayFacet.MORNING:
      return morningHour;
    case DayFacet.MID_DAY:
      return (
        getStartingHour(DayFacet.MORNING) + facetDurations[DayFacet.MORNING]
      );
    case DayFacet.EVENING:
      return (
        getStartingHour(DayFacet.MID_DAY) + facetDurations[DayFacet.MID_DAY]
      );
    case DayFacet.NIGHT:
      return (
        getStartingHour(DayFacet.EVENING) + facetDurations[DayFacet.EVENING]
      );
  }
}
