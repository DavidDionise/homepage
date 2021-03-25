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
};

export const config: Config = {
  snowflakes: {
    quantity: 100,
    minSize: 7,
    maxSize: 20,
    minDuration: 4,
    maxDuration: 12,
    numAnimations: 10,
    minHorizontalDisplacement: 0,
    maxHorizontalDisplacement: 500,
  },
};
