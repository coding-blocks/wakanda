import React from 'react';
import _ from 'lodash';

export const Pagination = (props: { meta; onChange }) => {
  const { count, currentPage, currentOffset, nextOffset, prevOffset, totalPages } = props.meta;
  const recievedFunction = props.onChange;

  function handleOnClick(pageNumber) {
    return recievedFunction(pageNumber);
  }
  const pageNumbersToShow = _.range(currentPage, totalPages + 1).slice(0, 4);

  const renderNumbers = pageNumbersToShow.map((number) => {
    return (
      <div className="d-inline-block px-2 d-flex">
        <button
          key={number}
          className={number === currentPage ? 'button button-solid button-orange round' : 'my-auto'}
          onClick={() => handleOnClick(number)}
        >
          {number}
        </button>
      </div>
    );
  });

  return (
    <div className="d-flex justify-content-between flex-nowrap">
      <button
        id="prev-page"
        className="button button-dashed button-primary mx-3 br-5"
        disabled={prevOffset === null}
        onClick={() => handleOnClick(currentPage - 1)}
      >
        Previous
      </button>
      {renderNumbers}
      <button
        id="next-page"
        className="button button-dashed button-primary mx-3 br-5"
        disabled={nextOffset === null}
        onClick={() => handleOnClick(currentPage + 1)}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
