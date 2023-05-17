import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";

import styles from "./NewProject.module.scss";

import utils from "@/utils/utils";
import NewProjectLayout from "@/components/layouts/NewProjectLayout/NewProjectLayout";
import Steps from "../Steps/Steps";
import StartProject from "./StartProject/StartProject";
import { NewProjectStepStatus } from "./enums/new-project-step";
import ProjectDetails from "./ProjectDetails/ProjectDetails";
import CreateProject from "./CreateProject/CreateProject";
import { NewProject } from "./interfaces/new-project";
import { useRouter } from "next/router";

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
  const router = useRouter();

  const newProjectForm = useForm({
    defaultValues: {
      projectName: "",
      url: "",
      category: [],
      goal: "",
      workersCount: 0,
      projectStatus: "",
      email: "",
    },
  });

  const handleStepChange = (goToStep: number) => {
    setSteps(prevState => {
      const newState = prevState.map((step, index) => {
        if (index === goToStep) {
          return { ...step, status: NewProjectStepStatus.Current };
        }

        if (index === goToStep + 1) {
          return { ...step, status: NewProjectStepStatus.Incomplete };
        }

        if (index === goToStep - 1) {
          return { ...step, status: NewProjectStepStatus.Completed };
        }

        return step;
      });

      return newState;
    });
  };

  const handleSubmit = (data: NewProject) => {
    if (utils.isClient()) {
      localStorage.setItem("project", JSON.stringify(data));

      router.push("/project");
    }
  };

  return (
    <div className={styles.root}>
      <Steps steps={steps}></Steps>
      <NewProjectLayout>
        <FormProvider {...newProjectForm}>
          <form onSubmit={newProjectForm.handleSubmit(handleSubmit)}>
            {steps[0].status === NewProjectStepStatus.Current && (
              <StartProject handleStepChange={handleStepChange} />
            )}
            {steps[1].status === NewProjectStepStatus.Current && (
              <ProjectDetails handleStepChange={handleStepChange} />
            )}
            {steps[2].status === NewProjectStepStatus.Current && (
              <CreateProject handleStepChange={handleStepChange} />
            )}
          </form>
        </FormProvider>
      </NewProjectLayout>
    </div>
  );
};

export default NewProject;
