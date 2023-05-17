import cn from "classnames";

import styles from "../NewProject.module.scss";

import Button from "@/components/shared/Button/Button";
import RadioButton from "@/components/shared/RadioButton/RadioButton";

const DUMMY_RADIO = [
  "Grow My Community",
  "Activate Existing Members",
  "Understand My Members",
];

const ProjectDetails: React.FC<{
  handleStepChange: (stepNumber: number) => void;
}> = ({ handleStepChange }) => {
  return (
    <div className={styles.step}>
      <div className={styles.titleContainer}>
        <p className={cn("sub-title", styles.subTitle)}>Project Details</p>
        <h2 className={styles.title}>
          What is your main goal with AlphaQuest?
        </h2>
      </div>
      {DUMMY_RADIO.map(item => {
        return <RadioButton key={item} value={item} name="goal" />;
      })}
      <RadioButton value="Other" name="goal" />
      <div className={styles.buttonWrapper}>
        <Button variant="secondary" onClick={() => handleStepChange(0)}>
          Back
        </Button>
        <Button onClick={() => handleStepChange(2)}>Continue</Button>
      </div>
    </div>
  );
};

export default ProjectDetails;
