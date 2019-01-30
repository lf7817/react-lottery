/*
 * @Author: lifan
 * @Date: 2019-01-30 15:26:29
 * @Last Modified by: lifan
 * @Last Modified time: 2019-01-30 16:12:55
 */
import React, { FunctionComponent, memo } from 'react';
import styles from './style.module.scss';

interface ICongratulationProps {
  name: string;
  hideHandler: () => void;
}

const Congratulation: FunctionComponent<ICongratulationProps> = ({ name, hideHandler }) => {
  return (
    <div className={styles.congratulation} onClick={hideHandler}>
      <div className={styles.content}>
        <span className={styles.text}>中奖礼品: {name}</span>
      </div>
    </div>
  );
};

export default memo(Congratulation);
