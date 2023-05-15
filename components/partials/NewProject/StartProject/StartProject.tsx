import styles from "./StartProject.module.scss";
import cn from "classnames";

const StartProject: React.FC = () => {
  return (
    <div className={styles.root}>
      <p className={cn("sub-title", styles.subTitle)}>
        To Create Quest you need firstly create Project
      </p>
      <h2 className={styles.title}>Add New Project</h2>;
    </div>
  );
};

export default StartProject;
