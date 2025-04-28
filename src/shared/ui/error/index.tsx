import { Result } from "antd";
import styles from "./styles.module.scss";

const ErrorComponent = ({ error }: { error: string }) => {
  return (
    <div className={styles["error-container"]}>
      <Result status={"500"} subTitle={error} />
    </div>
  );
};

export default ErrorComponent;
