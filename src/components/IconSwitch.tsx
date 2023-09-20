import { FunctionComponent } from "react";

interface IconSwitchProps {
  icon: string;
  onSwitch: () => void;
}

export const IconSwitch: FunctionComponent<IconSwitchProps> = ({
  icon,
  onSwitch,
}) => {
  return (
    <div className="">
      <button onClick={() => onSwitch()}>
        <span className="material-icons md-dark md-32">{icon}</span>
      </button>
    </div>
  );
};
