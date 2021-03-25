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
  dayLength: number;
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
    quantity: 25,
    minSize: 7,
    maxSize: 20,
    minDuration: 4,
    maxDuration: 12,
    numAnimations: 10,
    minHorizontalDisplacement: 0,
    maxHorizontalDisplacement: 500,
  },
  dayLength: 3,
};
