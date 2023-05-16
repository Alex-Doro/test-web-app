import cn from "classnames";
import { useFormContext } from "react-hook-form";

import styles from "./Chip.module.scss";

const Chip: React.FC<{
  id?: string;
  checked?: boolean;
  onChange?: () => void;
  children: string;
  name: string;
}> = ({ checked, onChange, children, name }) => {
  const form = useFormContext();

  return (
    <div className={styles.checkboxContainer}>
      <div
        className={cn("text", styles.checkbox, { [styles.checked]: checked })}
      >
        {children}
      </div>
      <input
        {...form.register(children)}
        type="checkbox"
        className={styles.checkboxInput}
      />
    </div>
  );
};

export default Chip;
