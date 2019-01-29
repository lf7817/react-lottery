/*
 * @Author: lifan
 * @Date: 2019-01-29 16:47:47
 * @Last Modified by: lifan
 * @Last Modified time: 2019-01-29 23:00:27
 */
import React, { FunctionComponent, memo } from 'react';
import { IAwards } from '../../store/reducers/award';
import { IWinner } from '../../store/reducers/winnerList';
import styles from './style.module.scss';

interface IWinnerProps {
  award: IAwards;
  list: IWinner[];
  resetHandler: () => void;
}

const Winner: FunctionComponent<IWinnerProps> = ({ award, list, resetHandler }) => (
  <div className={styles.winner}>
    <div className={styles.title}>
      <span>获奖名单</span>
      <span>{award.last} / {award.sum}</span>
    </div>
    <div className={styles.list}>
      {
        list.map((item) => (
          <div key={item.phone} className={styles.item}>
            <div className={styles.left}>
              <span className={styles.name}>{item.name}</span>
              <span className={styles.awardTitle}>{award.title}</span>
            </div>
            <img src={award.image} alt={award.name} width={45} height={45} />
          </div>
        ))
      }
    </div>
    <div className={styles.opera}>
      <button onClick={resetHandler}>重置</button>
      <button>导出</button>
    </div>
  </div>
);

export default memo(Winner);
