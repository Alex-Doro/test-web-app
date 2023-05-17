import cn from "classnames";
import { useRef } from "react";
import { useFormContext } from "react-hook-form";

import styles from "./Counter.module.scss";

import Button from "../Button/Button";
import Input from "../Input/Input";

const Counter: React.FC<{
  name: string;
}> = ({ name }) => {
  const form = useFormContext();

  const handleCounter = (action: "increment" | "decrement") => {
    if (action === "increment") {
      form.setValue(name, form.getValues(name) + 1);
    }
    if (action === "decrement") {
      if (form.getValues(name) === 0) return;
      form.setValue(name, form.getValues(name) - 1);
    }
  };

  return (
    <div className={styles.root}>
      <Button
        variant="secondary"
        className={styles.counterBtn}
        onClick={() => handleCounter("decrement")}
      >
        -
      </Button>
      <Input name={name} id={name} type="number" className={styles.counter} />
      <Button
        variant="secondary"
        className={styles.counterBtn}
        onClick={() => handleCounter("increment")}
      >
        +
      </Button>
    </div>
  );
};

export default Counter;
