import styles from "./FormWrapper.module.scss";
import global from "../globalComponentStyles.module.scss";
import clsx from "clsx";

type Props = {
  children: React.ReactNode;
};

const FormWrapper: React.FC<Props> = ({ children }) => {
  return (
    <div className={clsx(styles.container, global.contentWrapper)}>
      {children}
    </div>
  );
};

export default FormWrapper;
