import { CondensationType } from "./components/MasterOfWeather";
import { DayFacet } from "./components/Hero/MasterOfTime";
import { Breakpoint } from "./types/ui";

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
      minQuantity: 20,
      maxQuantity: 50,
      minSize: 3,
      maxSize: 10,
      minFallDuration: 4,
      maxFallDuration: 12,
      numAnimations: 10,
      minHorizontalDisplacement: 0,
      maxHorizontalDisplacement: 500,
    },
    [CondensationType.RAIN]: {
      minQuantity: 20,
      maxQuantity: 50,
      minSize: 3,
      maxSize: 10,
      minFallDuration: 4,
      maxFallDuration: 12,
      numAnimations: 10,
      minHorizontalDisplacement: 0,
      maxHorizontalDisplacement: 500,
    },
  },
  time: {
    hourDuration: 3,
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
  minSize: number;
  maxSize: number;
  minFallDuration: number;
  maxFallDuration: number;
  numAnimations: number;
  minHorizontalDisplacement: number;
  maxHorizontalDisplacement: number;
};
