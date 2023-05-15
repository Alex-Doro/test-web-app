import { useSelector } from "react-redux";

import { RootState } from "@/store";
import Steps from "../Steps/Steps";

const NewProject = () => {
  const newProjectState = useSelector((state: RootState) => state.newProject);

  console.log(newProjectState);

  return (
    <>
      <Steps steps={newProjectState.steps}></Steps>
      <h1>New Project</h1>
    </>
  );
};

export default NewProject;
