import cn from "classnames";
import { useFormContext } from "react-hook-form";

import styles from "./Input.module.scss";

const Input: React.FC<{
  name: string;
  id: string;
  type: string;
  placeholder?: string;
  label?: string;
  className?: string;
}> = ({ name, id, type, placeholder, label, className }) => {
  const form = useFormContext();

  return (
    <div className={styles.root}>
      {label && (
        <label htmlFor={id} className={cn("text", styles.label)}>
          {label}
        </label>
      )}
      <input
        {...form.register(name)}
        className={cn("text", styles.input, className)}
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
