import { CondensationType } from "../MasterOfWeather";
import { Condensation } from "./Condensation";

type Props = {
  containerHeight: number;
};

export function SnowFlakes(props: Props) {
  const snowFlakeCss = `
    border-radius: 50%;
    background-color: white;
    box-shadow: 0 0 8px #fff;
  `;

  return (
    <Condensation
      type={CondensationType.SNOW}
      containerHeight={props.containerHeight}
      css={snowFlakeCss}
    />
  );
}
