import React, { Fragment } from "react";
import { Pagination } from "react-bootstrap";
import "../../App.css";

function PaginationForm({
  nextPage,
  prevPage,
  renderPageNumbers,
  pageDecrementBtn,
  pageIncrementBtn,
  pageNumbers,
  paginate,
  currentPage,
}) {
  return (
    <Fragment>
      <Pagination>
        <Pagination.First onClick={prevPage} />
        {renderPageNumbers[0]}
        {renderPageNumbers[1]}
        {pageDecrementBtn}
        {renderPageNumbers.slice(2, -2)}
        {pageIncrementBtn}

        <Pagination.Item
          key={pageNumbers[pageNumbers.length - 2]}
          id={pageNumbers[pageNumbers.length - 2]}
          onClick={paginate}
          className={
            currentPage == pageNumbers[pageNumbers.length - 2] ? "active" : null
          }
        >
          {pageNumbers[pageNumbers.length - 2]}
        </Pagination.Item>

        <Pagination.Item
          key={pageNumbers[pageNumbers.length - 1]}
          id={pageNumbers[pageNumbers.length - 1]}
          onClick={paginate}
          className={
            currentPage == pageNumbers[pageNumbers.length - 1] ? "active" : null
          }
        >
          {pageNumbers[pageNumbers.length - 1]}
        </Pagination.Item>

        <Pagination.Last onClick={nextPage} />
      </Pagination>
    </Fragment>
  );
}

export default PaginationForm;
