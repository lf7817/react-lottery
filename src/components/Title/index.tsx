/*
 * @Author: lifan
 * @Date: 2019-01-27 14:11:59
 * @Last Modified by: lifan
 * @Last Modified time: 2019-01-27 20:37:17
 */
import cn from 'classnames';
import React, { FunctionComponent, memo } from 'react';
import styles from './style.module.scss';

interface ITitleProps {
  awardId?: number; // 奖品id
}

const Title: FunctionComponent<ITitleProps> = ({ awardId }) => (
  <div className={cn(styles.title, typeof awardId === 'undefined' ? styles.title_ : styles[`title_${awardId}`])} />
);

export default memo(Title);
