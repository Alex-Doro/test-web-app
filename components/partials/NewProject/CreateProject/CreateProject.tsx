import cn from "classnames";

import styles from "../NewProject.module.scss";

import Button from "@/components/shared/Button/Button";
import Counter from "@/components/shared/Counter/Counter";
import RadioButton from "@/components/shared/RadioButton/RadioButton";
import Input from "@/components/shared/Input/Input";

const DUMMY_RADIO = ["Pre Product", "Post Product"];

const CreateProject: React.FC<{
  handleStepChange: (stepNumber: number) => void;
}> = ({ handleStepChange }) => {
  return (
    <div className={styles.step}>
      <div className={styles.titleContainer}>
        <p className={cn("sub-title", styles.subTitle)}>Create Project</p>
        <h2 className={styles.title}>
          How many full-time workers on the project?
        </h2>
        <Counter name="workersCount" />
      </div>
      <div className={styles.formSection}>
        <h2 className={styles.title}>Are you pre or post product launch?</h2>
        <div className={styles.controls}>
          {DUMMY_RADIO.map(item => {
            return <RadioButton key={item} name="projectStatus" value={item} />;
          })}
        </div>
      </div>
      <div className={styles.formSection}>
        <h2 className={styles.title}>Contact Email</h2>
        <Input
          name="email"
          id="email"
          type="text"
          placeholder="Please enter your email"
        />
      </div>
      <div className={styles.buttonWrapper}>
        <Button variant="secondary" onClick={() => handleStepChange(1)}>
          Back
        </Button>
        <Button type="submit">Create Project</Button>
      </div>
    </div>
  );
};

export default CreateProject;
