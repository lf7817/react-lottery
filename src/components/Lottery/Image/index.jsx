import React, { PureComponent } from 'react'
import PropTypes  from 'prop-types'

import './style.css'

class Image extends PureComponent {

  static propTypes = {
    url: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }

  render() {
    return (
      <div className="award-detail">
        <div className="award-image image-border">
          <img src={process.env.PUBLIC_URL + this.props.url} alt={this.props.name}/>
        </div>
        <p className="award-name">{this.props.name}</p>
      </div>
    )
  }
}

export default Image
