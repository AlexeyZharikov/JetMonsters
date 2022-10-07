import React from 'react';
import './images.scss';
import Item from '../item/item.component';



const Images = ({images, loading}) => {
  const ingArr = images.map(item => (<Item link={item.link} id={item.id} key={item.id}/>))
return (
  loading ? <div className='loading'>loading...</div> : ingArr
)
}


export default Images;