import cn from "classnames";
import { useFormContext } from "react-hook-form";

import styles from "./Chip.module.scss";
import { ChangeEvent, useState } from "react";

const Chip: React.FC<{
  children: string;
  name: string;
}> = ({ children, name }) => {
  const [checked, setChecked] = useState(false);
  const form = useFormContext();

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);

    form.setValue(
      name,
      e.target.checked
        ? form.getValues(name)
          ? [...form.getValues(name), children]
          : [children]
        : form.getValues(name).filter((item: string) => item !== children)
    );
  };

  return (
    <div className={styles.checkboxContainer}>
      <label
        htmlFor={children}
        className={cn("text", styles.checkbox, { [styles.checked]: checked })}
      >
        {children}
      </label>
      <input
        {...(form.register(name),
        {
          onChange: e => handleOnChange(e),
        })}
        id={children}
        type="checkbox"
        className={styles.checkboxInput}
        value={children}
      />
    </div>
  );
};

export default Chip;
