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
    colors: {
      primary: {
        light: string;
        med: string;
        dark: string;
      };
      secondary: {
        light: string;
        med: string;
        dark: string;
      };
    };
    fonts: {
      title: string;
      regular: string;
    };
  };
  condensation: {
    [CondensationType.RAIN]: CondensationConfig;
    [CondensationType.SNOW]: CondensationConfig;
  };
  time: {
    hourDuration: number;
    weatherTransitionDuration: number;
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
      [Breakpoint.MOBILE]: 768,
      [Breakpoint.TABLET]: 1024,
      [Breakpoint.DESKTOP_SMALL]: 1440,
      [Breakpoint.DESKTOP_LARGE]: MAX_WIDTH,
    },
    colors: {
      primary: {
        dark: "hsl(221, 44%, 28%)",
        med: "hsl(220, 44%, 36%)",
        light: "hsl(210, 66%, 70%)",
      },
      secondary: {
        light: "hsl(308, 96%, 90%)",
        med: "hsl(308, 96%, 41%)",
        dark: "hsl(308, 86%, 20%)",
      },
    },
    fonts: {
      title: "Bungee Hairline",
      regular: "Roboto",
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
      minLightness: 90,
      maxLightness: 100,
      minOpacity: 0.85,
      maxOpacity: 1,
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
      minFallDuration: 1.5,
      maxFallDuration: 2.5,
      numAnimations: 20,
      minHorizontalDisplacement: 0,
      maxHorizontalDisplacement: 0,
      maxDelay: 2,
      minLightness: 75,
      maxLightness: 95,
      minOpacity: 0.1,
      maxOpacity: 0.6,
    },
  },
  time: {
    hourDuration: 2.5,
    weatherTransitionDuration: 5,
    morningHour: 4,
    facetDurations: {
      [DayFacet.MORNING]: 3,
      [DayFacet.MID_DAY]: 5,
      [DayFacet.EVENING]: 7,
      [DayFacet.NIGHT]: 9,
    },
  },
};

export type CondensationConfig = {
  minQuantity: number;
  maxQuantity: number;
  dimensions: Array<CondensationDimensions>;
  minFallDuration: number;
  maxFallDuration: number;
  numAnimations: number;
  minHorizontalDisplacement: number;
  maxHorizontalDisplacement: number;
  maxDelay: number;
  minHue?: number;
  maxHue?: number;
  minSaturation?: number;
  maxSaturation?: number;
  minLightness?: number;
  maxLightness?: number;
  minOpacity?: number;
  maxOpacity?: number;
};

type CondensationDimensions = {
  width: number;
  height: number;
};
