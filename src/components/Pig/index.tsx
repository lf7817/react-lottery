/*
 * @Author: lifan
 * @Date: 2019-01-27 20:48:12
 * @Last Modified by: lifan
 * @Last Modified time: 2020-01-20 10:51:56
 */
import React, { Component } from "react";
import uuid from "uuid/v4";
import styles from "./style.module.scss";

interface PigProps {
  name: string; // 这里默认名字最长为三个字
  run: boolean;
  runHandler: (flag: boolean) => void;
}

interface PigState {
  nameList: string[];
}

export default class Pig extends Component<PigProps, PigState> {
  public static getDerivedStateFromProps(props: PigProps) {
    const { name } = props;
    const nameList = name.split("");

    if (nameList.length === 2) {
      nameList.splice(1, 0, "");
    }

    return {
      nameList,
    };
  }

  public state = {
    nameList: [],
  };

  public shouldComponentUpdate(nextProps: PigProps, nextState: PigState) {
    const { run, name } = this.props;
    const { nameList } = this.state;

    if (nextProps.run !== run || nextProps.name !== name || nextState.nameList !== nameList) {
      return true;
    }

    return false;
  }

  public clickHandler = () => {
    this.props.runHandler(!this.props.run);
  };

  public render() {
    const { nameList } = this.state;
    const { run } = this.props;

    return (
      <div className={styles.pig}>
        <div className={styles.eye} style={{ display: run ? "block" : "none" }} />
        <div className={styles.nose} onClick={this.clickHandler} />
        {nameList.map((item, index) => (
          <span key={uuid()} className={styles[`name-${index}`]}>
            {item}
          </span>
        ))}
      </div>
    );
  }
}
