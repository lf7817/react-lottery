import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import PropTypes  from 'prop-types'

import './style.css'

@inject('store')
@observer
class AwardNum extends Component {

  static propTypes = {
    store: PropTypes.object.isRequired
  }

  render() {
    const store = this.props.store
    return (
      <div>
        <span className="item-left">
          名额&nbsp;&nbsp;
          {
            store.currentAward ? 
              <em>{store.currentAward.last}/{store.currentAward.num}</em> :
              <em>0/0</em>
          }
        </span>
      </div>
    )
  }
}

export default AwardNum
