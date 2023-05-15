import { useSelector } from "react-redux";
import { FormProvider, useForm } from "react-hook-form";
import { RootState } from "@/store";

import Steps from "../Steps/Steps";
import StartProject from "./StartProject/StartProject";
import NewProjectLayout from "@/components/layouts/NewProjectLayout/NewProjectLayout";

import styles from "./NewProject.module.scss";

const NewProject: React.FC = () => {
  const newProjectState = useSelector((state: RootState) => state.newProject);
  const NewProjectForm = useForm();

  console.log(newProjectState);

  return (
    <div className={styles.root}>
      <Steps steps={newProjectState.steps}></Steps>
      <NewProjectLayout>
        <FormProvider {...NewProjectForm}>
          <form
            onSubmit={NewProjectForm.handleSubmit(data => console.log(data))}
          >
            <StartProject />
          </form>
        </FormProvider>
      </NewProjectLayout>
    </div>
  );
};

export default NewProject;
