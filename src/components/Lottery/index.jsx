import React, { Component } from 'react'
import { observable, action, runInAction } from 'mobx'
import { observer, inject } from 'mobx-react'
import PropTypes  from 'prop-types'
import SetAward from './SetAward'
import AwardNum from './AwardNum'
import Image from './Image'
import Congratulation from './Congratulation'
import { message } from 'antd'

import './style.css'

@inject('store')
@observer
class Lottery extends Component {

  static propTypes = {
    height: PropTypes.number,
    store: PropTypes.object.isRequired
  }

  @observable index = 0
  @observable isShowCongratulation = false

  getRandomNum () {
    const { peopleList } = this.props.store
    const len = peopleList.length
    return Math.floor(Math.random() * len)
  }

  @action("开始抽奖")
  handlerStart = () => {
    const store = this.props.store
    if (!store.currentAward) {
      message.info('请先选择奖项')
      return
    }

    if (store.currentAward.last === 0) {
      message.info('该奖项已抽完！')
      return
    }    
    store.start(this.index)
    this.index = this.getRandomNum()
    this.timer = setInterval(() => {
      runInAction(() => {
        this.index = this.getRandomNum()
      }, 50)
    })
  }

  @action("停止抽奖")
  handlerStop = () => {
    const { stop, currentAwardId} = this.props.store
    clearInterval(this.timer)
    stop(this.index, currentAwardId)
    this.isShowCongratulation = true
    setTimeout(() => {
      runInAction(() => {
        this.isShowCongratulation = false
      })
    }, 2000)
  }

  @action
  componentDidMount () {
    this.index = this.getRandomNum()
  }

  render() {
    const store = this.props.store
    const { currentAward, currentAwardId, peopleList, status } = store

    return (
      <div className="app-lottery" style={{height: this.props.height}}>
        <div className="lottery-top">
          <SetAward />
          {
            currentAward ?
            <AwardNum last={currentAward.last} num={currentAward.num}/> :
            <AwardNum last={0} num={0}/>
          }
        </div>
        <div className="lottery-middle">
          {
            currentAward ? 
              <Image url={currentAward.pic} name={currentAward.name}/> :
              <Image url="./assets/images/award.png" name="神秘大礼" />
          }
          {
            peopleList ? 
              <Image url={`https://q.qlogo.cn/g?b=qq&nk=${peopleList[this.index].qq}&s=100`} name={peopleList[this.index].name}/> :
              <Image url="./assets/images/people/default.png" name="幸运儿" />
          }
        </div>
        {
          status === 0 ?
          <button className="lottery-button" disabled={this.isShowCongratulation} onClick={this.handlerStart}>
            开始抽奖
          </button> :
          <button className="lottery-button-stop" onClick={this.handlerStop}>
            停止
          </button>
        }
        {
          this.isShowCongratulation && <Congratulation awardId={currentAwardId}/>
        }
      </div>
    )
  }
}

export default Lottery
