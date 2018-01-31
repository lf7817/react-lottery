import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import PropTypes  from 'prop-types'

import './style.css'

@inject('store')
@observer
class Winners extends Component {

  static propTypes = {
    height: PropTypes.number,
    store: PropTypes.object.isRequired
  }

  render() {
    return (
      <div className="app-winners" style={{height: this.props.height}}>
        获奖名单
      </div>
    )
  }
}

export default Winners
