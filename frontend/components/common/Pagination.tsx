import React from 'react';

export const Pagination = (props: { meta; onChange }) => {
  const { count, currentPage, currentOffset, nextOffset, prevOffset, totalPages } = props.meta;
  const recievedFunction = props.onChange;

  function handleOnClick(pageNumber) {
    return recievedFunction(pageNumber);
  }
  const pageNumbersToShow = [...new Array(totalPages)].map((_, i) => i + 1);

  const renderNumbers = pageNumbersToShow.map((number) => {
    return (
      <div className="all-center">
        <button
          key={number}
          className={
            number === currentPage
              ? 'pagination-number pagination-number--current'
              : 'pagination-number'
          }
          onClick={() => handleOnClick(number)}
        >
          {number}
        </button>
      </div>
    );
  });

  return (
    <div className="row no-gutters align-items-center justify-content-center mt-20">
      <button
        id="prev-page"
        className="pagination-button-prev"
        disabled={prevOffset === null}
        onClick={() => handleOnClick(currentPage - 1)}
      >
        Previous
      </button>
      {renderNumbers}
      <button
        id="next-page"
        className="pagination-button-next"
        disabled={nextOffset === null}
        onClick={() => handleOnClick(currentPage + 1)}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
