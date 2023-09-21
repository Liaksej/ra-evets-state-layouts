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
    <div className="w-full flex justify-end p-4">
      <button className="p-1 flex items-center" onClick={() => onSwitch()}>
        <span className="material-icons md-dark md-32 ">{icon}</span>
      </button>
    </div>
  );
};
