/*
 * @Author: lifan
 * @Date: 2019-01-26 09:29:42
 * @Last Modified by: lifan
 * @Last Modified time: 2019-01-27 15:05:29
 */
import React, { Component } from 'react';
import { DESIGN_HEIGHT, DESIGN_WIDTH } from '../../constants';
import Title from '../Title';
import styles from './style.module.scss';

export default class App extends Component {
  private readonly $refApp: React.RefObject<HTMLDivElement> = React.createRef();
  /**
   * 计算主要容器尺寸
   */
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

  public render() {
    return (
      <div className={styles.app} ref={this.$refApp}>
        <Title awardId={undefined} />
      </div>
    );
  }
}
