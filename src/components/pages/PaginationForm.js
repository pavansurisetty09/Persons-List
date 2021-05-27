import React, { Fragment } from "react";
import { Pagination, Button } from "react-bootstrap";
import "../../App.css";

function PaginationForm({
  currentPage,
  pageNumbers,
  paginate,
  nextPage,
  prevPage,
  handleLoadMore,
  renderPageNumbers,
  pageDecrementBtn,
  pageIncrementBtn,
}) {
  return (
    <Fragment>
      <Pagination>
        <Pagination.First onClick={prevPage} />

        {pageDecrementBtn}
        {renderPageNumbers}
        {pageIncrementBtn}

        {/* <Pagination.Item
          className={currentPage === pageNumbers[0] ? "active" : ""}
          onClick={() => paginate(pageNumbers[0])}
          key={pageNumbers[pageNumbers]}
        >
          <a
            style={{
              color: currentPage === pageNumbers[0] && "white",
              textDecoration: "none",
            }}
            href="!#"
          >
            {pageNumbers[0]}
          </a>
        </Pagination.Item>
        <Pagination.Item
          className={currentPage === pageNumbers[1] ? "active" : null}
          onClick={() => paginate(pageNumbers[1])}
          key={pageNumbers[1]}
        >
          <a
            style={{
              color: currentPage === pageNumbers[1] && "white",
              textDecoration: "none",
            }}
            href="!#"
          >
            {pageNumbers[1]}
          </a>
        </Pagination.Item>
        {currentPage === pageNumbers[2] ? (
          <Pagination.Item
            className={currentPage === pageNumbers[2] ? "active" : null}
            onClick={() => paginate(pageNumbers[2])}
            key={pageNumbers[2]}
          >
            <a
              style={{
                color: currentPage === pageNumbers[2] && "white",
                textDecoration: "none",
              }}
              href="!#"
            >
              {pageNumbers[2]}
            </a>
          </Pagination.Item>
        ) : (
          <Pagination.Ellipsis />
        )}

        <>
          <Pagination.Item
            className={currentPage === pageNumbers[4] ? "active" : null}
            onClick={() => paginate(pageNumbers[4])}
            key={pageNumbers[4]}
          >
            <a
              style={{
                color: currentPage === pageNumbers[4] && "white",
                textDecoration: "none",
              }}
              href="!#"
            >
              {pageNumbers[4]}
            </a>
          </Pagination.Item>
        </>

        <Pagination.Ellipsis />
        <Pagination.Item
          className={
            currentPage === pageNumbers[pageNumbers.length - 2]
              ? "active"
              : null
          }
          onClick={() => paginate(pageNumbers[pageNumbers.length - 2])}
          key={pageNumbers[pageNumbers.length - 2]}
        >
          <a
            style={{
              color:
                currentPage === pageNumbers[pageNumbers.length - 2] && "white",
              textDecoration: "none",
            }}
            href="!#"
          >
            {pageNumbers[pageNumbers.length - 2]}
          </a>
        </Pagination.Item>
        <Pagination.Item
          className={
            currentPage === pageNumbers[pageNumbers.length - 1]
              ? "active"
              : null
          }
          onClick={() => paginate(pageNumbers[pageNumbers.length - 1])}
          key={pageNumbers[pageNumbers.length - 1]}
        >
          <a
            style={{
              color:
                currentPage === pageNumbers[pageNumbers.length - 1] && "white",
              textDecoration: "none",
            }}
            href="!#"
          >
            {pageNumbers[pageNumbers.length - 1]}
          </a>
        </Pagination.Item> */}
        <Pagination.Last onClick={nextPage} />
      </Pagination>
    </Fragment>
  );
}

export default PaginationForm;
