import cn from "classnames";

import styles from "./Input.module.scss";

const Input: React.FC<{
  name: string;
  id: string;
  type: string;
  placeholder: string;
  value: string | number;
  label?: string;
  onChange?: () => void;
}> = ({ name, id, type, placeholder, label, value, onChange }) => {
  return (
    <div className={styles.root}>
      {label && (
        <label htmlFor={id} className={cn("text", styles.label)}>
          {label}
        </label>
      )}
      <input
        className={cn("text", styles.input)}
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
