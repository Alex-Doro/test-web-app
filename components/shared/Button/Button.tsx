import cn from "classnames";

import styles from "./Button.module.scss";

const Button: React.FC<{
  variant?: "primary" | "secondary";
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
  children: React.ReactNode;
}> = ({ variant = "primary", type = "button", onClick, children }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={cn("text", styles.root, {
        [styles.primary]: variant === "primary",
        [styles.secondary]: variant === "secondary",
      })}
    >
      {children}
    </button>
  );
};

export default Button;
