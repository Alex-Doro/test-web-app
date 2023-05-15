import { NewProjectStepStatus } from "../enums/new-project-step";

export interface NewProjectStep {
  name: string;
  status: NewProjectStepStatus;
}
