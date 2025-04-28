import { Spin } from "antd";
import styles from "./styles.module.scss";

function Spinner() {
  return (
    <div className={styles["spin-container"]}>
      <Spin />
    </div>
  );
}

export default Spinner;
