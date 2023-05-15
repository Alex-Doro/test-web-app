import Step from "./Step/Step";

const Steps: React.FC<{ steps: string[] }> = ({ steps }) => {
  return (
    <>
      {steps.map(step => {
        return <Step key={step}>{step}</Step>;
      })}
    </>
  );
};

export default Steps;
