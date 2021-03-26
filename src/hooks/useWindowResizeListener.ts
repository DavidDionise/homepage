import { Maybe } from "./../types/common";
import { Breakpoint } from "./../types/ui";
import { useEffect, useState } from "react";
import { config } from "../config";

const DEBOUNCE_AMOUNT = 500;

export function useWindowResizeListener() {
  const [breakPoint, setBreakPoint] = useState(getBreakpoint());
  const [timerId, setTimerId] = useState<Maybe<NodeJS.Timeout>>(null);

  useEffect(() => {
    function handler() {
      const newTimerId = setTimeout(() => {
        console.log(">> HIT");
        const newBreakpoint = getBreakpoint();
        if (newBreakpoint != breakPoint) {
          setBreakPoint(newBreakpoint);
        }
      }, DEBOUNCE_AMOUNT);
      setTimerId(newTimerId);
    }

    window.addEventListener("resize", handler);

    return () => {
      window.removeEventListener("resize", handler);
      if (timerId) {
        clearTimeout(timerId);
      }
    };
  }, [breakPoint, timerId]);

  return breakPoint;
}

function getBreakpoint(): Breakpoint {
  switch (true) {
    case window.innerWidth < config.ui.breakpoints[Breakpoint.TABLET]:
      return Breakpoint.MOBILE;
    case window.innerWidth < config.ui.breakpoints[Breakpoint.DESKTOP_SMALL]:
      return Breakpoint.TABLET;
    case window.innerWidth < config.ui.breakpoints[Breakpoint.DESKTOP_LARGE]:
      return Breakpoint.DESKTOP_SMALL;
    default:
      return Breakpoint.DESKTOP_LARGE;
  }
}
