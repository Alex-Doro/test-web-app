import cn from "classnames";

import styles from "./Button.module.scss";

const Button: React.FC<{
  variant?: "primary" | "secondary";
  type?: "button" | "submit" | "reset" | undefined;
  style?: any;
  onClick?: () => void;
  children: React.ReactNode;
}> = ({ variant = "primary", type = "button", onClick, style, children }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={cn("text", styles.root, {
        [styles.primary]: variant === "primary",
        [styles.secondary]: variant === "secondary",
      })}
      style={style}
    >
      {children}
    </button>
  );
};

export default Button;
