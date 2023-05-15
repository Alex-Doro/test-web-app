import { useSelector } from "react-redux";

import { RootState } from "@/store";
import Steps from "../Steps/Steps";

import styles from "./NewProject.module.scss";
import StartProject from "./StartProject/StartProject";
import NewProjectLayout from "@/components/layouts/NewProjectLayout/NewProjectLayout";

const NewProject: React.FC = () => {
  const newProjectState = useSelector((state: RootState) => state.newProject);

  console.log(newProjectState);

  return (
    <div className={styles.root}>
      <Steps steps={newProjectState.steps}></Steps>
      <NewProjectLayout>
        <StartProject />
      </NewProjectLayout>
    </div>
  );
};

export default NewProject;
