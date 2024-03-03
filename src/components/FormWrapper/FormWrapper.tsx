import styles from "./FormWrapper.module.scss";

type Props = {
  children: React.ReactNode;
};

const FormWrapper: React.FC<Props> = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

export default FormWrapper;
