import { Breakpoint } from "../types/ui";

function mediaQuery(min?: Breakpoint, max?: Breakpoint): string {
  const minWidthQuery = min ? `(min-width: ${min})` : null;
  const maxWidthQuery = max ? `(max-width: ${max})` : null;

  switch (true) {
    case min == null && max == null:
      throw new Error("Must include either min or max for media query");
    case min == null:
      return `@media ${maxWidthQuery}`;
    case max == null:
      return `@media ${minWidthQuery}`;
    default:
      return `@media ${minWidthQuery} and ${maxWidthQuery}`;
  }
}

export { mediaQuery };
