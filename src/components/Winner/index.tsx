/*
 * @Author: lifan
 * @Date: 2019-01-29 16:47:47
 * @Last Modified by: lifan
 * @Last Modified time: 2019-01-29 17:07:15
 */
import React, { Component } from 'react';
import { IAwardId } from '../../constants/award';
import { IWinner } from '../../store/reducers/winnerList';
import styles from './style.module.scss';

interface IWinnerProps {
  awardId: IAwardId;
  list: IWinner[];
}

export default class Winner extends Component<IWinnerProps> {
  public render() {
    return (
      <div className={styles.winner}>
        <p className={styles.title}>获奖名单</p>
      </div>
    );
  }
}
