import { CondensationType } from "./components/Hero/MasterOfWeather";
import { DayFacet } from "./components/Hero/MasterOfTime";
import { Breakpoint } from "./types/ui";
import { range } from "./utils/range";

const MAX_WIDTH = 1680;

export type Config = {
  ui: {
    breakpoints: {
      [Breakpoint.MOBILE]: number;
      [Breakpoint.TABLET]: number;
      [Breakpoint.DESKTOP_SMALL]: number;
      [Breakpoint.DESKTOP_LARGE]: number;
    };
    heroImageWidths: {
      [Breakpoint.MOBILE]: number;
      [Breakpoint.TABLET]: number;
      [Breakpoint.DESKTOP_SMALL]: number;
      [Breakpoint.DESKTOP_LARGE]: number;
    };
    maxWidth: number;
  };
  condensation: {
    [CondensationType.RAIN]: CondensationConfig;
    [CondensationType.SNOW]: CondensationConfig;
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
    breakpoints: {
      [Breakpoint.MOBILE]: 414,
      [Breakpoint.TABLET]: 768,
      [Breakpoint.DESKTOP_SMALL]: 1024,
      [Breakpoint.DESKTOP_LARGE]: 1440,
    },
    heroImageWidths: {
      [Breakpoint.MOBILE]: 500,
      [Breakpoint.TABLET]: 800,
      [Breakpoint.DESKTOP_SMALL]: 1200,
      [Breakpoint.DESKTOP_LARGE]: MAX_WIDTH,
    },
  },
  condensation: {
    [CondensationType.SNOW]: {
      minQuantity: 70,
      maxQuantity: 90,
      dimensions: range(3, 8).map((n) => ({ width: n, height: n })),
      minFallDuration: 4,
      maxFallDuration: 12,
      numAnimations: 10,
      minHorizontalDisplacement: 0,
      maxHorizontalDisplacement: 300,
      maxDelay: 5,
    },
    [CondensationType.RAIN]: {
      minQuantity: 150,
      maxQuantity: 140,
      dimensions: [
        { width: 0.3, height: 20 },
        { width: 0.4, height: 30 },
        { width: 0.6, height: 40 },
        { width: 0.6, height: 50 },
      ],
      minFallDuration: 1,
      maxFallDuration: 1.5,
      numAnimations: 5,
      minHorizontalDisplacement: 0,
      maxHorizontalDisplacement: 0,
      maxDelay: 1,
    },
  },
  time: {
    hourDuration: 0.5,
    morningHour: 4,
    facetDurations: {
      [DayFacet.MORNING]: 6,
      [DayFacet.MID_DAY]: 4,
      [DayFacet.EVENING]: 5,
      [DayFacet.NIGHT]: 9,
    },
  },
};

type CondensationConfig = {
  minQuantity: number;
  maxQuantity: number;
  dimensions: Array<CondensationDimensions>;
  minFallDuration: number;
  maxFallDuration: number;
  numAnimations: number;
  minHorizontalDisplacement: number;
  maxHorizontalDisplacement: number;
  maxDelay: number;
};

type CondensationDimensions = {
  width: number;
  height: number;
};
