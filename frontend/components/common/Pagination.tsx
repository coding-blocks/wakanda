import React from 'react';
import _ from 'lodash';

export const Pagination = (props) => {
  const { count, currentPage, currentOffset, nextOffset, prevOffset, totalPages } = props.meta;
  const recievedFunction = props.onChange;

  function handleOnClick(pageNumber) {
    return recievedFunction(pageNumber);
  }
  const pageNumbersToShow = _.range(currentPage, totalPages - currentPage).slice(4);

  const renderNumbers = pageNumbersToShow.map((number) => {
    return (
      <div className="d-inline-block">
        <button onClick={() => handleOnClick(number)}>{number}</button>
      </div>
    );
  });

  return (
    <div className="">
      <button
        id="prev-page"
        className=""
        disabled={prevOffset === null}
        onClick={() => handleOnClick(currentPage - 1)}
      >
        Previous
      </button>
      {renderNumbers}
      <button
        id="next-page"
        className=""
        disabled={nextOffset === null}
        onClick={() => handleOnClick(currentPage + 1)}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
