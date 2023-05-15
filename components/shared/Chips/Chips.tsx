import cn from "classnames";

import Chip from "./Chip/Chip";
import styles from "./Chips.module.scss";

const Chips: React.FC<{
  chips: string[];
  label?: string;
  onChange?: () => void;
}> = ({ chips, label, onChange }) => {
  return (
    <div className={styles.root}>
      {label && (
        <label htmlFor="id" className={cn("text", styles.label)}>
          {label}
        </label>
      )}
      <div className={styles.chipsContainer}>
        {chips.map(chip => {
          return <Chip key={chip}>{chip}</Chip>;
        })}
      </div>
    </div>
  );
};

export default Chips;
