import { FormProvider, useForm } from "react-hook-form";

import styles from "./NewProject.module.scss";

import Steps from "../Steps/Steps";
import StartProject from "./StartProject/StartProject";
import NewProjectLayout from "@/components/layouts/NewProjectLayout/NewProjectLayout";
import { NewProjectStepStatus } from "./enums/new-project-step";
import ProjectDetails from "./ProjectDetails/ProjectDetails";
import { useState } from "react";

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
  const [steps, setSteps] = useState(DUMMY_STEPS);

  const newProjectForm = useForm();
  console.log(newProjectForm.watch());

  const handleStepChange = (stepNumber: number) => {
    setSteps(prevState => {
      const newState = prevState.map((step, index) => {
        if (index === stepNumber) {
          return { ...step, status: NewProjectStepStatus.Completed };
        }

        if (index === stepNumber + 1) {
          return { ...step, status: NewProjectStepStatus.Current };
        }

        return step;
      });

      return newState;
    });
  };

  return (
    <div className={styles.root}>
      <Steps steps={steps}></Steps>
      <NewProjectLayout>
        <FormProvider {...newProjectForm}>
          <form
            onSubmit={newProjectForm.handleSubmit(data => console.log(data))}
          >
            {steps[0].status === NewProjectStepStatus.Current && (
              <StartProject handleStepChange={handleStepChange} />
            )}
            {steps[1].status === NewProjectStepStatus.Current && (
              <ProjectDetails />
            )}
          </form>
        </FormProvider>
      </NewProjectLayout>
    </div>
  );
};

export default NewProject;
