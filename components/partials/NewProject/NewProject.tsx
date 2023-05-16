import { FormProvider, useForm } from "react-hook-form";

import styles from "./NewProject.module.scss";

import Steps from "../Steps/Steps";
import StartProject from "./StartProject/StartProject";
import NewProjectLayout from "@/components/layouts/NewProjectLayout/NewProjectLayout";
import { NewProjectStepStatus } from "./enums/new-project-step";

const DUMMY_STEPS = [
  {
    name: "Start First Project",
    status: NewProjectStepStatus.Current,
  },
  {
    name: "Project Details",
    status: NewProjectStepStatus.Incomplete,
  },
  {
    name: "Create Project",
    status: NewProjectStepStatus.Incomplete,
  },
];

const NewProject: React.FC = () => {
  const NewProjectForm = useForm();

  return (
    <div className={styles.root}>
      <Steps steps={DUMMY_STEPS}></Steps>
      <NewProjectLayout>
        <FormProvider {...NewProjectForm}>
          <form
            onSubmit={NewProjectForm.handleSubmit((data) => console.log(data))}
          >
            <StartProject />
          </form>
        </FormProvider>
      </NewProjectLayout>
    </div>
  );
};

export default NewProject;
