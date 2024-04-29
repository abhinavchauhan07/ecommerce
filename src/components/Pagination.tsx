
import React from 'react';
import './Pagination.css'; 

const Pagination = ({ currentPage, handleNextPage,totalPages, handlePrevPage, value, offsetChange}:any) => {
  const totalPageCount = Math.ceil(90 / value); 

  const renderPages = () => {
    const pages = [];
    const maxPagesToShow = 5;
    let startPage = currentPage - 2;
    let endPage = currentPage + 2;

    if (startPage < 1) {
      startPage = 1;
      endPage = Math.min(totalPageCount, maxPagesToShow);
    }

    if (endPage > totalPageCount) {
      endPage = totalPageCount;
      startPage = Math.max(1, totalPageCount - maxPagesToShow + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <button key={i} onClick={() => handlePageChange(i)} className={currentPage === i ? 'active' : ''}>
          {i}
        </button>
      );
    }

    if (startPage > 1) {
      pages.unshift(
        <button key="prev-dots" onClick={() => handlePageChange(startPage - 1)}>
          ...
        </button>
      );
    }

    if (endPage < totalPageCount) {
      pages.push(
        <button key="next-dots" onClick={() => handlePageChange(endPage + 1)}>
          ...
        </button>
      );
    }

    return pages;
  };

  const handlePageChange = (pageNumber: number) => {
    if (pageNumber !== currentPage) {

      if (pageNumber < currentPage) {
        handlePrevPage();
      } else {
        handleNextPage();
      }
    }
  };

  return (
    <div className="pagination-container"> 
      <button  className="bttns" onClick={handlePrevPage} disabled={currentPage === 1}>
        Previous
      </button>
      <div className="pagination"> 
        {totalPages>1 &&renderPages()}
      </div>
      <button className="bttns" onClick={handleNextPage} disabled={currentPage * value >= 90||totalPages==1}>
        Next
      </button>
      <select  name="offset" id="offset" onChange={offsetChange}>
        <option value="10" defaultValue={10} >10</option>
        <option value="20">20</option>
        <option value="30">30</option>
      </select>
    </div>
  );
};

export default Pagination;
