import Steps from "../Steps/Steps";

const DUMMY_STEPS = [
  "Start First Project",
  "Project Details",
  "Create Project",
];

const NewProject = () => {
  return (
    <>
      <Steps steps={DUMMY_STEPS}></Steps>
      <h1>New Project</h1>
    </>
  );
};

export default NewProject;
