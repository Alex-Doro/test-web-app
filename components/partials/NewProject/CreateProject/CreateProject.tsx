import cn from "classnames";

import styles from "../StartProject/StartProject.module.scss";

import Button from "@/components/shared/Button/Button";

const CreateProject: React.FC<{
  handleStepChange: (stepNumber: number) => void;
}> = ({ handleStepChange }) => {
  return (
    <div className={styles.root}>
      <div className={styles.titleContainer}>
        <p className={cn("sub-title", styles.subTitle)}>Create Project</p>
        <h2 className={styles.title}>
          How many full-time workers on the project?
        </h2>
        <h2 className={styles.title}>Are you pre or post product launch?</h2>
        <h2 className={styles.title}>Contact Email</h2>
      </div>
      <div className={styles.buttonWrapper}>
        <Button variant="secondary" onClick={() => handleStepChange(1)}>
          Back
        </Button>
        <Button type="submit">Add Project</Button>
      </div>
    </div>
  );
};

export default CreateProject;
