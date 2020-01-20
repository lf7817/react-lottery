/*
 * @Author: lifan
 * @Date: 2019-01-29 16:47:47
 * @Last Modified by: lifan
 * @Last Modified time: 2020-01-20 10:40:22
 */
import "rc-texty/assets/index.css";
import Texty from "rc-texty";
import React, { PureComponent } from "react";
import { Awards } from "../../store/reducers/award";
import { Winner } from "../../store/reducers/winnerList";
import styles from "./style.module.scss";

interface WinnerProps {
  award: Awards;
  list: Winner[];
  resetHandler: () => void;
  exportHandler: () => void;
}

export default class WinnerList extends PureComponent<WinnerProps> {
  public readonly $refList: React.RefObject<HTMLDivElement> = React.createRef();

  public getSnapshotBeforeUpdate(prevProps: WinnerProps) {
    if (this.props.list.length > prevProps.list.length) {
      const oDiv = this.$refList.current;

      if (oDiv) {
        return oDiv.scrollHeight - oDiv.scrollTop;
      }

      return null;
    }

    return null;
  }

  public componentDidUpdate(nextProps: WinnerProps, state: any, snapShop: number) {
    if (snapShop !== null) {
      const oDiv = this.$refList.current;

      if (oDiv) {
        oDiv.scrollTop = oDiv.scrollHeight - snapShop;
      }
    }
  }

  public componentDidMount() {
    this.initListScrollTop();
  }

  public initListScrollTop() {
    const oDiv = this.$refList.current;

    if (oDiv) {
      oDiv.scrollTop = oDiv.scrollHeight - oDiv.clientHeight;
    }
  }

  public render() {
    const { award, list, resetHandler, exportHandler } = this.props;
    return (
      <div className={styles.winner}>
        <div className={styles.title}>
          <span>获奖名单</span>
          <span>
            {award.last} / {award.sum}
          </span>
        </div>
        <div ref={this.$refList} className={styles.list}>
          {list.map(item => (
            <div key={item.phone} className={styles.item} title={award.title}>
              <div className={styles.left}>
                <Texty type="flash" mode="smooth" className={styles.name}>
                  {item.name}
                </Texty>
                <Texty type="flash" mode="smooth" className={styles.awardTitle}>
                  {award.name}
                </Texty>
              </div>
              <img src={award.image} alt={award.name} width={45} height={45} />
            </div>
          ))}
        </div>
        <div className={styles.opera}>
          <button onClick={resetHandler}>重置</button>
          <button onClick={exportHandler}>导出</button>
        </div>
      </div>
    );
  }
}
