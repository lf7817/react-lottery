/*
 * @Author: lifan
 * @Date: 2019-01-26 08:51:44
 * @Last Modified by: lifan
 * @Last Modified time: 2020-01-20 10:52:02
 */
import cn from "classnames";
import QueueAnim from "rc-queue-anim";
import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import Congratulation from "../components/Congratulation";
import Pig from "../components/Pig";
import WinnerList from "../components/Winner";
import { DESIGN_HEIGHT, DESIGN_WIDTH } from "../constants";
import { AwardId } from "../constants/award";
import { People } from "../constants/people";
import * as actions from "../store/actions";
import { AppState } from "../store/reducers";
import { Awards } from "../store/reducers/award";
import { Cur } from "../store/reducers/cur";
import { Winner } from "../store/reducers/winnerList";
import json2Excel from "../utils/json2excel";
import styles from "./style.module.scss";

interface AppProps {
  pool: People[];
  cur: Cur;
  run: boolean;
  congratulation: boolean;
  award: Awards[];
  dispatch: Dispatch;
  winnerList: Winner[];
}

class App extends PureComponent<AppProps> {
  private readonly $refApp: React.RefObject<HTMLDivElement> = React.createRef();
  // private timer: any = null;
  public calcMainContainerSize = () => {
    requestAnimationFrame(() => {
      if (!this.$refApp.current) {
        return;
      }

      const bWidth = document.documentElement.clientWidth;
      const bHeight = document.documentElement.clientHeight;
      const ratio = DESIGN_HEIGHT / DESIGN_WIDTH; // 设计稿比例
      let scale = 1;
      const wHeight = bWidth * ratio; // 期望高度
      // const wWidth = bHeight / ratio; // 期望宽度

      if (bHeight < wHeight) {
        // 以真实高度为基准等比例缩放
        scale = bHeight / DESIGN_HEIGHT;
      } else {
        scale = bWidth / DESIGN_WIDTH;
      }

      const rw = DESIGN_WIDTH * scale;
      const rh = DESIGN_HEIGHT * scale;

      this.$refApp.current.style.margin = `${(bHeight - rh) / 2}px ${(bWidth - rw) / 2}px`;
      this.$refApp.current.style.height = DESIGN_HEIGHT + "px";
      this.$refApp.current.style.width = DESIGN_WIDTH + "px";
      this.$refApp.current.style.transform = `scale(${scale})`;
    });
  };

  public componentDidMount() {
    this.calcMainContainerSize();
    window.addEventListener("resize", this.calcMainContainerSize);

    if (this.props.run) {
      this.props.dispatch(actions.run(true));
    }
  }

  public runHandler = (flag: boolean) => {
    this.props.dispatch(actions.run(flag));
  };

  public resetHandler = () => {
    const { dispatch, run } = this.props;

    if (!run) {
      if (window.confirm("确认重置？")) {
        dispatch(actions.reset());
      }
    }
  };

  public exportHandler = () => {
    const { award, winnerList } = this.props;
    const arr = [
      { A: "姓名", B: "手机号", C: "奖项", D: "奖品" },
      ...winnerList.map(item => ({
        A: item.name,
        B: item.phone,
        C: award[item.awardId].title,
        D: award[item.awardId].name,
      })),
    ];
    json2Excel(arr, ["A", "B", "C", "D"], "获奖名单");
  };

  public awardIdChangeHandler = () => {
    const { cur, dispatch, run } = this.props;

    if (run) {
      return;
    }

    if (typeof cur.awardId === "undefined" || cur.awardId === 0) {
      dispatch(actions.updateAwardId(4));
    } else {
      dispatch(actions.updateAwardId((cur.awardId - 1) as AwardId));
    }
  };

  public hideHandler = () => {
    this.props.dispatch(actions.congratulation(false));
  };

  public render() {
    const { cur, run, winnerList, award, congratulation } = this.props;
    const { name, awardId } = cur;
    const list = winnerList.filter(item => item.awardId === awardId);

    return (
      <div className={styles.app} ref={this.$refApp} id="main-content">
        <QueueAnim type="scaleBig" delay={600}>
          <div key={awardId} className={cn(styles.title, styles[`title-${awardId}`])} />
        </QueueAnim>
        <QueueAnim type="scaleX" delay={600}>
          <div
            key={awardId}
            className={cn(styles.awardType, styles[`awardType-${awardId}`])}
            onClick={this.awardIdChangeHandler}
          />
        </QueueAnim>
        <Pig name={name} run={run} runHandler={this.runHandler} />
        <QueueAnim delay={300}>
          {typeof awardId !== "undefined" ? (
            <WinnerList
              key={1}
              award={award[awardId]}
              list={list}
              resetHandler={this.resetHandler}
              exportHandler={this.exportHandler}
            />
          ) : null}
        </QueueAnim>
        {congratulation && typeof awardId !== "undefined" ? (
          <Congratulation name={award[awardId].name} hideHandler={this.hideHandler} person={cur.name} />
        ) : null}
      </div>
    );
  }
}

const mapState = (state: AppState) => ({
  pool: state.pool,
  cur: state.cur,
  run: state.run,
  congratulation: state.congratulation,
  award: state.award,
  winnerList: state.winnerList,
});

const mapDispath = (dispatch: Dispatch) => ({
  dispatch,
});

export default connect(mapState, mapDispath)(App);
