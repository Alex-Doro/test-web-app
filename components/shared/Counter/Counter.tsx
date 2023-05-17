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
      <Button variant="secondary" className={styles.counterBtn}>
        -
      </Button>
      <Input name={name} id={name} type="number" className={styles.counter} />
      <Button variant="secondary" className={styles.counterBtn}>
        +
      </Button>
    </div>
  );
};

export default Counter;
