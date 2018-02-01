import React, { PureComponent } from 'react'
import PropTypes  from 'prop-types'

import './style.css'

class AwardNum extends PureComponent {

  static propTypes = {
    last: PropTypes.number.isRequired,
    num: PropTypes.number.isRequired
  }

  render() {
    const { last, num } = this.props
    return (
      <div>
        <span className="item-left">
          名额&nbsp;&nbsp;
          <em>{last}/{num}</em>
        </span>
      </div>
    )
  }
}

export default AwardNum
