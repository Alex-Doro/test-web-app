import { useEffect, useState } from "react";
import cn from "classnames";

import styles from "./ProjectInfo.module.scss";

import utils from "@/utils/utils";
import { NewProject } from "../NewProject/interfaces/new-project";

const ProjectInfo = () => {
  const [projectData, setProjectData] = useState<NewProject>();

  useEffect(() => {
    if (utils.isClient()) {
      setProjectData(JSON.parse(localStorage.getItem("project")!));
    }
  }, []);

  return (
    <div className={styles.root}>
      <h2 className={styles.title}>Project Info</h2>
      <div className={styles.detailsContainer}>
        <div className={styles.detailsItem}>
          <span className={cn("sub-title", styles.subTitle)}>
            Project Name:
          </span>
          <span className={cn("text", styles.text)}>
            {projectData?.projectName}
          </span>
        </div>
        <div className={styles.detailsItem}>
          <span className={cn("sub-title", styles.subTitle)}>Project URL:</span>
          <span className={cn("text", styles.text)}>{projectData?.url}</span>
        </div>
        <div className={styles.detailsItem}>
          <span className={cn("sub-title", styles.subTitle)}>
            Project Category:
          </span>
          <span className={cn("text", styles.text)}>
            {projectData?.category.join(", ")}
          </span>
        </div>
        <div className={styles.detailsItem}>
          <span className={cn("sub-title", styles.subTitle)}>Main Goal:</span>
          <span className={cn("text", styles.text)}>{projectData?.goal}</span>
        </div>
        <div className={styles.detailsItem}>
          <span className={cn("sub-title", styles.subTitle)}>
            Number of full-time workers:
          </span>
          <span className={cn("text", styles.text)}>
            {projectData?.workersCount}
          </span>
        </div>
        <div className={styles.detailsItem}>
          <span className={cn("sub-title", styles.subTitle)}>
            Project Status:
          </span>
          <span className={cn("text", styles.text)}>
            {projectData?.projectStatus}
          </span>
        </div>
        <div className={styles.detailsItem}>
          <span className={cn("sub-title", styles.subTitle)}>
            Project Name:
          </span>
          <span className={cn("text", styles.text)}>{projectData?.email}</span>
        </div>
      </div>
    </div>
  );
};

export default ProjectInfo;
