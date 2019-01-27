/*
 * @Author: lifan
 * @Date: 2019-01-27 14:11:59
 * @Last Modified by: lifan
 * @Last Modified time: 2019-01-27 15:04:48
 */
import React, { FunctionComponent, memo } from 'react';
import styles from './style.module.scss';

interface ITitleProps {
  awardId?: number; // 奖品id
}

const Title: FunctionComponent<ITitleProps> = ({ awardId }) => (
  <div className={styles.title}>
    {
      typeof awardId === 'undefined' ?
      <p>1</p> :
      <p>2</p>
    }
  </div>
);

export default memo(Title);
