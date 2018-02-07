import React from 'react'
import { CSSTransition } from 'react-transition-group'
import './style.css'

const BounceInBottom = ({ children, ...props}) => (
  <CSSTransition 
    {...props} 
    timeout={300}
    classNames="bounce-in-bottom">
    {children}
  </CSSTransition>
)

export default BounceInBottom
