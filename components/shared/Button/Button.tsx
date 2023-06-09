import cn from "classnames";
import Link from "next/link";

import styles from "./Button.module.scss";

const Button: React.FC<{
  variant?: "primary" | "secondary";
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
  className?: string;
  children: React.ReactNode;
}> = ({
  variant = "primary",
  type = "button",
  onClick,
  className,
  children,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={cn("text", styles.root, className, {
        [styles.primary]: variant === "primary",
        [styles.secondary]: variant === "secondary",
      })}
    >
      {children}
    </button>
  );
};

export default Button;
