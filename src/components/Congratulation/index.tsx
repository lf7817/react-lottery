/*
 * @Author: lifan
 * @Date: 2019-01-30 15:26:29
 * @Last Modified by: lifan
 * @Last Modified time: 2019-01-30 16:51:04
 */
import React, { FunctionComponent, memo } from 'react';
import styles from './style.module.scss';

interface ICongratulationProps {
  name: string;
  person: string;
  hideHandler: () => void;
}

const Congratulation: FunctionComponent<ICongratulationProps> = ({ name, person, hideHandler }) => {
  return (
    <div className={styles.congratulation} onClick={hideHandler}>
      <div className={styles.content}>
        <span className={styles.text}>{person}: {name}</span>
      </div>
    </div>
  );
};

export default memo(Congratulation);
