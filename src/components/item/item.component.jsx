import React from 'react';
import './item.scss';
import {useState} from 'react';

const Item = (props) => {
  const [hover, setHover] = useState(false);

  const openInNewTab = (url) => {
      const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
      if (newWindow) newWindow.opener = null
  }
  const hoverStyle = {
    "transform": "scale(1.2)",
    "transition": "1s"
  };
  const normalStyle = {
    "transition": "1s"
  }

  const onMouseEnter = () => {
    setHover(true)
  }

  const onMouseLeave = () => {
    setHover(false)
  }
  return (
    <div className="photo-item" key={props.id}>
      <img src={props.link} alt="photo-item" style={hover ? hoverStyle : normalStyle} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} 
   onClick={() => { openInNewTab(props.link) }}/>
    </div>
  )

}

export default Item;