/*
 * @Author: lifan
 * @Date: 2019-01-26 09:29:42
 * @Last Modified by: lifan
 * @Last Modified time: 2019-01-26 14:41:14
 */
import React, { Component } from 'react';
import { DESIGN_HEIGHT, DESIGN_WIDTH } from '../../constants';
import styles from './style.module.scss';

export default class App extends Component {
  private readonly $refApp: React.RefObject<HTMLDivElement> = React.createRef();
  /**
   * 计算主要容器尺寸
   */
  public calcMainContainerSize = () => {
    setTimeout(() => {
      if (!this.$refApp.current) {
        return;
      }

      const bWidth = document.documentElement.clientWidth;
      const bHeight = document.documentElement.clientHeight;
      const ratio = DESIGN_HEIGHT / DESIGN_WIDTH; // 设计稿比例
      let scale = 1;
      let origin = 'center center';
      const wHeight = bWidth * ratio; // 期望高度
      const wWidth = bHeight / ratio; // 期望宽度

      // tslint:disable-next-line:prefer-conditional-expression
      if (bHeight < wHeight) { // 以真实高度为基准等比例缩放
        scale = bHeight / DESIGN_HEIGHT;
        origin = '0 0';
      } else {
        scale = bWidth / DESIGN_WIDTH;
        origin = '0 0';
      }

      // if (bWidth < wWidth) {
      //   scale = bWidth / DESIGN_WIDTH;
      //   origin = '0 0';
      // }

      this.$refApp.current.style.height = DESIGN_HEIGHT + 'px';
      this.$refApp.current.style.width = DESIGN_WIDTH + 'px';
      this.$refApp.current.style.transformOrigin = origin;
      this.$refApp.current.style.transform = `scale(${scale})`;
    }, 0);
  }

  public componentDidMount() {
    this.calcMainContainerSize();
    window.addEventListener('resize', this.calcMainContainerSize);
  }

  public render() {
    return (
      <div className={styles.app} ref={this.$refApp}>
        lottery
      </div>
    );
  }
}
