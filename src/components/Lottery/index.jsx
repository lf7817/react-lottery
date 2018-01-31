import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import PropTypes  from 'prop-types'
import SetAward from './SetAward'
import AwardNum from './AwardNum'

import './style.css'

@inject('store')
@observer
class Lottery extends Component {

  static propTypes = {
    height: PropTypes.number,
    store: PropTypes.object.isRequired
  }

  render() {
    return (
      <div className="app-lottery" style={{height: this.props.height}}>
        <div className="lottery-top">
          <SetAward />
          <AwardNum />
        </div>
      </div>
    )
  }
}

export default Lottery
