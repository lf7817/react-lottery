/*
 * @Author: lifan
 * @Date: 2019-01-29 16:47:47
 * @Last Modified by: lifan
 * @Last Modified time: 2019-01-30 16:48:54
 */
import debounce from 'lodash.debounce';
import QueueAnim from 'rc-queue-anim';
import Texty from 'rc-texty';
// tslint:disable-next-line:no-submodule-imports
import 'rc-texty/assets/index.css';
import React, { FunctionComponent, memo } from 'react';
import { IAwards } from '../../store/reducers/award';
import { IWinner } from '../../store/reducers/winnerList';
import styles from './style.module.scss';

interface IWinnerProps {
  award: IAwards;
  list: IWinner[];
  resetHandler: () => void;
  exportHandler: () => void;
}

const Winner: FunctionComponent<IWinnerProps> = ({ award, list, resetHandler, exportHandler }) => {
  const onEnd = debounce((e: any) => {
    const parentNode = e.target.parentNode;
    if (parentNode) {
      parentNode.scrollTo(0, 20000);
    }
  }, 500);

  return (
    <div className={styles.winner}>
      <div className={styles.title}>
        <span>获奖名单</span>
        <span>{award.last} / {award.sum}</span>
      </div>
      <QueueAnim className={styles.list} onEnd={onEnd}>
        {
          list.map((item) => (
            <div key={item.phone} className={styles.item} title={award.title}>
              <div className={styles.left}>
                <Texty type="flash" mode="smooth" className={styles.name}>{item.name}</Texty>
                <Texty type="flash" mode="smooth" className={styles.awardTitle}>{award.name}</Texty>
              </div>
              <img src={award.image} alt={award.name} width={45} height={45} />
            </div>
          ))
        }
      </QueueAnim>
      <div className={styles.opera}>
        <button onClick={resetHandler}>重置</button>
        <button onClick={exportHandler}>导出</button>
      </div>
    </div>
  );
};

export default memo(Winner);
