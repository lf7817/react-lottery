/*
 * @Author: lifan
 * @Date: 2019-01-26 08:51:44
 * @Last Modified by: lifan
 * @Last Modified time: 2019-01-28 22:43:55
 */
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import Pig from '../components/Pig';
import Title from '../components/Title';
import { DESIGN_HEIGHT, DESIGN_WIDTH } from '../constants';
import { IPeople } from '../constants/people';
import * as actions from '../store/actions';
import { IState } from '../store/reducers';
import { ICur } from '../store/reducers/cur';
import styles from './style.module.scss';

interface IAppProps {
  pool: IPeople[];
  cur: ICur;
  dispatch: Dispatch;
}

class App extends PureComponent<IAppProps> {
  private readonly $refApp: React.RefObject<HTMLDivElement> = React.createRef();

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
    // setInterval(() => {
    //   const { pool } = this.props;
    //   const cur = pool[Math.floor(Math.random() * pool.length)];
    //   this.props.dispatch(actions.updateCurrentPerson(cur));
    // }, 30);
  }

  public render() {
    const { cur } = this.props;

    return (
      <div className={styles.app} ref={this.$refApp}>
        <Title awardId={undefined} />
        <Pig name={cur.name} />
      </div>
    );
  }
}

const mapState = (state: IState) => ({
  pool: state.pool,
  cur: state.cur,
});

const mapDispath = (dispatch: Dispatch) => ({
  dispatch,
});

export default connect(
  mapState,
  mapDispath,
)(App);
