import cn from "classnames";

import styles from "./Chip.module.scss";

const Chip: React.FC<{
  id?: string;
  checked?: boolean;
  onChange?: () => void;
  children: React.ReactNode;
}> = ({ checked, onChange, children }) => {
  return (
    <div className={styles.checkboxContainer}>
      <div
        className={cn("text", styles.checkbox, { [styles.checked]: checked })}
      >
        {children}
      </div>
      <input
        type="checkbox"
        className={styles.checkboxInput}
        checked={checked}
      />
    </div>
  );
};

export default Chip;
