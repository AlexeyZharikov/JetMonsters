import React from 'react';
import './pagination.scss'

const Pagination = ({imagesPerPage, totalImages, paginate}) => {
  const pageNumbersArr = [];
  for (let i = 1; i <= (totalImages / imagesPerPage); i++) {
    pageNumbersArr.push(i)
  }
  const pageNumbers = pageNumbersArr.map(item => <div className='page-number' key={item}>
    <a href="!#" className="page-linl" onClick={() => paginate(item)}>{item}</a>
  </div>)
  return (
    <div className="pagination">
      <div className="pagination-list">
        {pageNumbers}
      </div>
    </div>
  )
}

export default Pagination;