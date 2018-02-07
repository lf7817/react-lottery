import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import { TransitionGroup } from 'react-transition-group'
import BounceInBottom from '../../base/BounceInBottom'
import Winner from './winner'
import PropTypes  from 'prop-types'

import './style.css'

@inject('store')
@observer
class Winners extends Component {

  static propTypes = {
    height: PropTypes.number,
    store: PropTypes.object.isRequired
  }

  reStart = () => {
    this.props.store.reStart()
  }

  render() {
    const { winnerList, awardsList } = this.props.store

    return (
      <div className="app-winners" style={{height: this.props.height}}>
        <h2 className="app-winners-title">{`获奖名单(${winnerList.length})`}</h2>
        <TransitionGroup component="ul" className="app-winners-list">
          {
            winnerList.map((item, index) => (
              <BounceInBottom key={index} >
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
        <div className="app-winners-list-footer">
          <button style={{cursor: 'pointer'}} onClick={this.reStart}>重新抽奖</button>
        </div>
      </div>
    )
  }
}

export default Winners
