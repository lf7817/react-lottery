import React, { PureComponent } from 'react'
import PropTypes  from 'prop-types'

class Winner extends PureComponent {

  static propTypes = {
    height: PropTypes.number,
  }

  render() {
    const { name, pic, id, title} = this.props
    return (
      <li className="app-winners-list-item">
        <div className="avatar">
          <img src={pic} alt=""/>
          <i className={`contribution-item-icon${id}`}></i>
        </div>
        <div className="content">
          <span className="winner-name">{name}</span>
          <span className="award-name1">{title}</span>
        </div>
        
      </li>
    )
  }
}

export default Winner
