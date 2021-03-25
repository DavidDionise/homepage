import { DayFacet } from "./Hero/MasterOfTime";
import { Breakpoint } from "./types/ui";

const MAX_WIDTH = 1680;

export type Config = {
  ui: {
    heroImageWidths: {
      [Breakpoint.MOBILE]: number;
      [Breakpoint.TABLET]: number;
      [Breakpoint.DESKTOP_SMALL]: number;
      [Breakpoint.DESKTOP_LARGE]: number;
    };
    maxWidth: number;
  };
  snowflakes: {
    quantity: number;
    minSize: number;
    maxSize: number;
    minDuration: number;
    maxDuration: number;
    numAnimations: number;
    minHorizontalDisplacement: number;
    maxHorizontalDisplacement: number;
  };
  time: {
    hourDuration: number;
    morningHour: number;
    facetDurations: {
      [DayFacet.MORNING]: number;
      [DayFacet.MID_DAY]: number;
      [DayFacet.EVENING]: number;
      [DayFacet.NIGHT]: number;
    };
  };
};

export const config: Config = {
  ui: {
    maxWidth: MAX_WIDTH,
    heroImageWidths: {
      [Breakpoint.MOBILE]: 500,
      [Breakpoint.TABLET]: 800,
      [Breakpoint.DESKTOP_SMALL]: 1200,
      [Breakpoint.DESKTOP_LARGE]: MAX_WIDTH,
    },
  },
  snowflakes: {
    quantity: 50,
    minSize: 3,
    maxSize: 10,
    minDuration: 4,
    maxDuration: 12,
    numAnimations: 10,
    minHorizontalDisplacement: 0,
    maxHorizontalDisplacement: 500,
  },
  time: {
    hourDuration: 0.3,
    morningHour: 4,
    facetDurations: {
      [DayFacet.MORNING]: 6,
      [DayFacet.MID_DAY]: 4,
      [DayFacet.EVENING]: 5,
      [DayFacet.NIGHT]: 9,
    },
  },
};
