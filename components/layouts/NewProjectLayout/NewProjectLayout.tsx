import styles from "./NewProjectLayout.module.scss";

const NewProjectLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <section className={styles.root}>{children}</section>;
};

export default NewProjectLayout;
