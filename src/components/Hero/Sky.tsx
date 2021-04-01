import { useContext, useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { config } from "../../config";
import { DayFacet, TimeContext } from "./MasterOfTime";
import cx from "classnames";

export function Sky() {
  const weatherContext = useContext(TimeContext);
  const [isFirstDay, setIsFirstDay] = useState(true);
  const isDark = [DayFacet.EVENING, DayFacet.NIGHT].includes(
    weatherContext.facet
  );

  useEffect(() => {
    if (isFirstDay && weatherContext.facet === DayFacet.NIGHT) {
      setIsFirstDay(false);
    }
  }, [weatherContext.facet, isFirstDay]);

  return <StyledSky className={cx({ dark: isDark, firstDay: isFirstDay })} />;
}

const gettingDark = keyframes`
  from {
    background-color: ${config.ui.colors.secondary.light};
  }

  to {
    background-color: ${config.ui.colors.secondary.dark};
  }
`;

const gettingLight = keyframes`
  from {
    background-color: ${config.ui.colors.secondary.dark};
  }

  to {
    background-color: ${config.ui.colors.secondary.light};
  }
`;

const StyledSky = styled.div`
  height: 100%;
  background-color: ${config.ui.colors.secondary.light};
  &:not(.firstDay) {
    animation: ${gettingLight}
      ${config.time.facetDurations[DayFacet.MORNING] *
      config.time.hourDuration}s
      forwards;
  }

  &.dark {
    animation: ${gettingDark}
      ${config.time.facetDurations[DayFacet.EVENING] *
      config.time.hourDuration}s
      forwards;
  }
`;
