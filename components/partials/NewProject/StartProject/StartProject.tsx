import cn from "classnames";

import Input from "@/components/shared/Input/Input";
import styles from "./StartProject.module.scss";
import Chips from "@/components/shared/Chips/Chips";
import Button from "@/components/shared/Button/Button";
import { useFormContext } from "react-hook-form";

const DUMMY_CHIPS = [
  "NFT",
  "GameFi",
  "DeFi",
  "DAO",
  "SocialFi",
  "Metaverse",
  "Tools",
  "Ecosystem",
  "Others",
];

const StartProject: React.FC = () => {
  return (
    <div className={styles.root}>
      <div className={styles.titleContainer}>
        <p className={cn("sub-title", styles.subTitle)}>
          To Create Quest you need firstly create Project
        </p>
        <h2 className={styles.title}>Add New Project</h2>;
      </div>
      <Input
        type="text"
        name="projectName"
        id="projectName"
        label="Project Name (It can be changed later)"
        placeholder="Enter a project name"
      />
      <Input
        type="text"
        name="projectURL"
        id="projectURL"
        label="Project URL (It cannot be changed after creation)"
        placeholder="Alphaguilty.io/awesomenftpunch"
      />
      <Chips
        label="Project Category (It cannot be changed after creation)"
        chips={DUMMY_CHIPS}
      />
      <Button>Add Project</Button>
    </div>
  );
};

export default StartProject;
