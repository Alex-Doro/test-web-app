import cn from "classnames";
import { useFormContext } from "react-hook-form";

import styles from "./RadioButton.module.scss";

const RadioButton: React.FC<{ value: string; name: string }> = ({
  value,
  name,
}) => {
  const form = useFormContext();
  const currentCheckedButton = form.watch(name);

  return (
    <label htmlFor={value} className={cn("text", styles.root)}>
      <div
        className={cn(styles.radio, {
          [styles.checked]: currentCheckedButton === value,
        })}
      ></div>
      <input
        {...form.register(name)}
        id={value}
        type="radio"
        value={value}
        name={name}
        className={styles.radioInput}
      />
      {value}
    </label>
  );
};

export default RadioButton;
