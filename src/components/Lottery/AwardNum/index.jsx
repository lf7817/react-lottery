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
    return (
      <div>
        <span className="item-left">
          名额&nbsp;&nbsp;
          <em>0/2</em>
        </span>
      </div>
    )
  }
}

export default AwardNum
