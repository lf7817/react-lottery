/*
 * @Author: lifan
 * @Date: 2019-01-27 20:48:12
 * @Last Modified by: lifan
 * @Last Modified time: 2019-01-27 23:07:57
 */
import cn from 'classnames';
import React, { Component } from 'react';
// tslint:disable-next-line:no-submodule-imports
import uuid from 'uuid/v4';
import styles from './style.module.scss';

interface IPigProps {
  name: string; // 这里默认名字最长为三个字
}

interface IPigState {
  nameList: string[];
}

export default class Pig extends Component<IPigProps, IPigState> {
  public static getDerivedStateFromProps(props: IPigProps) {
    const { name } = props;
    const nameList = name.split('');

    if (nameList.length === 2) {
      nameList.splice(1, 0, '');
    }

    return {
      nameList,
    };
  }

  public state = {
    nameList: [],
  };

  public render() {
    const { nameList } = this.state;

    return (
      <div className={styles.pig}>
        <div className={styles.eye} style={{ display: 'none' }}/>
        {
          nameList.map((item, index) => (
            <span key={uuid()} className={styles[`name-${index}`]}>{item}</span>
          ))
        }
      </div>
    );
  }
}
