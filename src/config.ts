export type Config = {
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
