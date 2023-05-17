import cn from "classnames";

import styles from "./Counter.module.scss";
import { useFormContext } from "react-hook-form";

const Counter: React.FC<{
  name: string;
}> = ({ name }) => {
  const form = useFormContext();

  return <input {...form.register(name)} type="number" />;
};

export default Counter;
