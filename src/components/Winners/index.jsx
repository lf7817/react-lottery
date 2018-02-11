import React, { Component } from 'react'
import { observable } from 'mobx'
import { observer, inject } from 'mobx-react'
import { TransitionGroup } from 'react-transition-group'
import BounceInBottom from '../../base/BounceInBottom'
import Winner from './winner'
import PropTypes  from 'prop-types'
import { message } from 'antd'

import './style.css'

@inject('store')
@observer
class Winners extends Component {

  static propTypes = {
    height: PropTypes.number,
    store: PropTypes.object.isRequired
  }

  @observable ulContainer = null

  reStart = () => {
    if (this.props.store.status === 1) {
      message.error('抽奖过程中无法执行此操作！')
    } else {
      this.props.store.reStart()
    }
  }

  scrollToBottom = () => {
    this.ulContainer.scrollTo && this.ulContainer.scrollTo(0, 10000)
  }

  render() {
    const { winnerList, awardsList } = this.props.store

    return (
      <div className="app-winners" style={{height: this.props.height}}>
        <h2 className="app-winners-title">{`获奖名单(${winnerList.length})`}</h2>
        <ul className="app-winners-list" ref={ulContainer => this.ulContainer = ulContainer}>
          <TransitionGroup>
            {
              winnerList.map((item, index) => (
                <BounceInBottom key={index} onEntered={this.scrollToBottom}>
                  <Winner
                    id={item.awardId} 
                    name={item.name}
                    pic={`https://q.qlogo.cn/g?b=qq&nk=${item.qq}&s=100`}
                    awardImage={awardsList[item.awardId].pic}
                    title={awardsList[item.awardId].title} />
                </BounceInBottom> 
              ))
            }
            </TransitionGroup>  
        </ul>
        <div className="app-winners-list-footer">
          <button style={{cursor: 'pointer'}} onClick={this.reStart}>重新抽奖</button>
        </div>
      </div>
    )
  }
}

export default Winners
