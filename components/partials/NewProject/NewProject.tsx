import { useSelector } from "react-redux";

import { RootState } from "@/store";
import Steps from "../Steps/Steps";

import styles from "./NewProject.module.scss";

const NewProject = () => {
  const newProjectState = useSelector((state: RootState) => state.newProject);

  console.log(newProjectState);

  return (
    <section className={styles.root}>
      <Steps steps={newProjectState.steps}></Steps>
      <h1>New Project</h1>
    </section>
  );
};

export default NewProject;
