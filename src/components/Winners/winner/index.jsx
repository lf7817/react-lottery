import React from 'react'

const Winner = ({ name, pic, id, title, awardImage}) => (
  <li className="app-winners-list-item">
    <div className="avatar">
      <img src={pic} alt=""/>
      <i className={`contribution-item-icon${id}`}></i>
    </div>
    <div className="content">
      <span className="winner-name">{name}</span>
      <span className="award-name1">{title}</span>
    </div>
    <img src={awardImage} className="award-image-s" alt=""/>
  </li>
)

export default Winner
