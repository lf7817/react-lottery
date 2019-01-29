/*
 * @Author: lifan
 * @Date: 2019-01-26 08:51:44
 * @Last Modified by: lifan
 * @Last Modified time: 2019-01-29 16:58:33
 */
import cn from 'classnames';
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import Pig from '../components/Pig';
import Winner from '../components/Winner';
import { DESIGN_HEIGHT, DESIGN_WIDTH } from '../constants';
import { IAwardId } from '../constants/award';
import { IPeople } from '../constants/people';
import * as actions from '../store/actions';
import { IState } from '../store/reducers';
import { ICur } from '../store/reducers/cur';
import { IWinner } from '../store/reducers/winnerList';
import styles from './style.module.scss';

interface IAppProps {
  pool: IPeople[];
  cur: ICur;
  run: boolean;
  dispatch: Dispatch;
  winnerList: IWinner[];
}

class App extends PureComponent<IAppProps> {
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
      const wWidth = bHeight / ratio; // 期望宽度

      // tslint:disable-next-line:prefer-conditional-expression
      if (bHeight < wHeight) { // 以真实高度为基准等比例缩放
        scale = bHeight / DESIGN_HEIGHT;
      } else {
        scale = bWidth / DESIGN_WIDTH;
      }

      const rw = DESIGN_WIDTH * scale;
      const rh = DESIGN_HEIGHT * scale;

      this.$refApp.current.style.margin = `${(bHeight - rh) / 2}px ${(bWidth - rw) / 2}px`;
      this.$refApp.current.style.height = DESIGN_HEIGHT + 'px';
      this.$refApp.current.style.width = DESIGN_WIDTH + 'px';
      this.$refApp.current.style.transform = `scale(${scale})`;
    });
  }

  public componentDidMount() {
    this.calcMainContainerSize();
    window.addEventListener('resize', this.calcMainContainerSize);
  }

  public runHandler = (flag: boolean) => {
    this.props.dispatch(actions.run(flag));
  }

  public awardIdChangeHandler = () => {
    const { cur, dispatch, run } = this.props;

    if (run) {
      return;
    }

    if (typeof cur.awardId === 'undefined' || cur.awardId === 0) {
      dispatch(actions.updateAwardId(4));
    } else {
      dispatch(actions.updateAwardId((cur.awardId - 1) as IAwardId));
    }
  }

  public render() {
    const { cur, run, winnerList } = this.props;
    const { name, phone, awardId } = cur;

    return (
      <div className={styles.app} ref={this.$refApp}>
        <div
          className={cn(styles.title, styles[`title-${awardId}`])}
        />
        <div
          className={cn(styles.awardType, styles[`awardType-${awardId}`])}
          onClick={this.awardIdChangeHandler}
        />
        <Pig name={name} run={run} runHandler={this.runHandler}/>
        {
          typeof awardId !== 'undefined' ?
            <Winner awardId={awardId} list={winnerList} /> :
            null
        }
      </div>
    );
  }
}

const mapState = (state: IState) => ({
  pool: state.pool,
  cur: state.cur,
  run: state.run,
  winnerList: state.winnerList,
});

const mapDispath = (dispatch: Dispatch) => ({
  dispatch,
});

export default connect(
  mapState,
  mapDispath,
)(App);
