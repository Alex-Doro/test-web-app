import { NewProjectStep } from "../NewProject/interfaces/new-project-step";
import Step from "./Step/Step";

import styles from "./Steps.module.scss";

const Steps: React.FC<{ steps: NewProjectStep[] }> = ({ steps }) => {
  return (
    <div className={styles.root}>
      {steps.map(step => {
        return (
          <Step key={step.name} status={step.status}>
            {step.name}
          </Step>
        );
      })}
    </div>
  );
};

export default Steps;
