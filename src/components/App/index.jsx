import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import Lottery from '../Lottery'
import Winners from '../Winners'
import { Row, Col } from 'antd'

import './style.css'

@inject('store')
@observer
class App extends Component {

  componentDidMount () {
    window.addEventListener('resize', this.resizeHandle)
  }

  resizeHandle = () => {
    this.props.store.resizeContentHeight()
  }

  render() {
    const store = this.props.store
    return (
      <div className="app-container">
        <h1 className="app-title">2018年中苏科技年会大抽奖</h1>
        <Row type="flex" justify="center" gutter={24}>
          <Col span={12}>
            <Lottery height={store.contentHeight} />
          </Col>
          <Col span={6}>
            <Winners height={store.contentHeight} />
          </Col>
        </Row>
      </div>
    )
  }
}

export default App
