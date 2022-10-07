import React from 'react';
import './gallery.scss';
import Pagination from '../pagination/pagination';
import {picture} from './picture-schema';
import { useState, useEffect } from 'react';
import Images from '../images/images.component';

const Gallery = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [imagesPerPage, setimagesPerPage] = useState(12);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchImages = async() => {
      setLoading(true);
      for (let i = 0; i < 36; i++) {
        images.push(i)
        const res = await fetch(`https://picsum.photos/600?random=${i+1}`);
        images[i] = new picture(res.url, i + 1);
      }
      setLoading(false)
    }
    fetchImages()
  }, []);

  
  
  const lastImageIndex = currentPage * imagesPerPage;
  const firstIamgeIndex = lastImageIndex - imagesPerPage;
  const currentImage = images.slice(firstIamgeIndex, lastImageIndex);

  const paginate = page => setCurrentPage(page);

  return (
    <div className='gallery'>
      <div className="container">
        <div className="gallery-inner">
        <Images images={currentImage} loading={loading}/>
        </div>
        <Pagination imagesPerPage={imagesPerPage} totalImages={images.length} paginate={paginate}/>
      </div>
    </div>
  )
}

export default Gallery;