import React, { Fragment } from "react";
import { Pagination } from "react-bootstrap";
import "../../App.css";

function PaginationForm({
  nextPage,
  prevPage,
  renderPageNumbers,
  pageDecrementBtn,
  pageIncrementBtn,
}) {
  return (
    <Fragment>
      <Pagination>
        <Pagination.First onClick={prevPage} />
        {renderPageNumbers[0]}
        {renderPageNumbers[1]}
        {pageDecrementBtn}
        {renderPageNumbers.slice(2)}
        {pageIncrementBtn}
        <Pagination.Last onClick={nextPage} />
      </Pagination>
    </Fragment>
  );
}

export default PaginationForm;
