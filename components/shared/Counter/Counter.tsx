import cn from "classnames";

import styles from "./Counter.module.scss";
import { useFormContext } from "react-hook-form";
import Button from "../Button/Button";
import Input from "../Input/Input";

const Counter: React.FC<{
  name: string;
}> = ({ name }) => {
  const form = useFormContext();

  return (
    <div className={styles.root}>
      <Button variant="secondary" style={{ maxWidth: "48px" }}>
        -
      </Button>
      <Input name={name} id={name} type="number" className={styles.counter} />
      <Button variant="secondary" style={{ maxWidth: "48px" }}>
        +
      </Button>
    </div>
  );
};

export default Counter;
