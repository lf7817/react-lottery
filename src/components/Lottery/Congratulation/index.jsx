import React from 'react'
import { Transition } from 'react-transition-group'
import './style.css'

const duration = 300;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0
}

const transitionStyles = {
  entering: { opacity: 0 },
  entered: { opacity: 1 },
};

// const Congratulation = ({in: inProp, awardId}) => (
//   <Transition in={inProp} timeout={duration}>
//   {
//     (state) => (
//       <div className="app-congratulation" style={{
//         ...defaultStyle,
//         ...transitionStyles[state]
//       }}>
//         <div className={`c${awardId}`}></div>
//       </div>
//     )
//   }
//   </Transition>
// )

const Congratulation = ({in: inProp, awardId}) => (
    <div className="app-congratulation">
      <div className={`c${awardId}`}></div>
    </div>
  )

export default Congratulation
