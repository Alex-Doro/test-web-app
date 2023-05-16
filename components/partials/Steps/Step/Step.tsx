import { NewProjectStepStatus } from "../../NewProject/enums/new-project-step";
import cn from "classnames";

import styles from "./Step.module.scss";

const Step: React.FC<{
  children: React.ReactNode;
  status: NewProjectStepStatus;
}> = ({ children, status }) => {
  const stepClassName = cn("text", styles.root, {
    [styles.incomplete]: status === NewProjectStepStatus.Incomplete,
    [styles.current]: status === NewProjectStepStatus.Current,
    [styles.completed]: status === NewProjectStepStatus.Completed,
  });

  return (
    <div className={stepClassName}>
      <span className={styles.stepName}>{children}</span>
    </div>
  );
};

export default Step;
