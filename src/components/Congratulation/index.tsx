/*
 * @Author: lifan
 * @Date: 2019-01-30 15:26:29
 * @Last Modified by: lifan
 * @Last Modified time: 2020-01-20 10:37:53
 */
import React, { FunctionComponent, memo } from "react";
import styles from "./style.module.scss";

interface CongratulationProps {
  name: string;
  person: string;
  hideHandler: () => void;
}

const Congratulation: FunctionComponent<CongratulationProps> = ({ name, person, hideHandler }) => {
  return (
    <div className={styles.congratulation} onClick={hideHandler}>
      <div className={styles.content}>
        <span className={styles.text}>
          {person}: {name}
        </span>
      </div>
    </div>
  );
};

export default memo(Congratulation);
