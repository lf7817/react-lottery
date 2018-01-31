import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import PropTypes  from 'prop-types'
import SetAward from './SetAward'
import AwardNum from './AwardNum'
import Image from './Image'

import './style.css'

@inject('store')
@observer
class Lottery extends Component {

  static propTypes = {
    height: PropTypes.number,
    store: PropTypes.object.isRequired
  }

  render() {
    const store = this.props.store
    const { currentAward } = store

    return (
      <div className="app-lottery" style={{height: this.props.height}}>
        <div className="lottery-top">
          <SetAward />
          <AwardNum />
        </div>
        <div className="lottery-middle">
          {
            currentAward ? 
              <Image url={currentAward.pic} name={currentAward.name}/> :
              <Image url="./assets/images/award.png" name="神秘大礼" />
          }
          {
            currentAward ? 
              <Image url={currentAward.pic} name={currentAward.name}/> :
              <Image url="./assets/images/award.png" name="神秘大礼" />
          }
        </div>
        <button className="lottery-button">开始抽奖</button>
      </div>
    )
  }
}

export default Lottery
