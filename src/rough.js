<MDBRow>
  <MDBCol>
    <MDBPagination className="mb-9tra">
      <MDBPageItem>
        <MDBPageNav onClick={prevPage} aria-label="Previous">
          <span style={{ cursor: "pointer" }} aria-hidden="true">
            &laquo;
          </span>
        </MDBPageNav>
      </MDBPageItem>
      {pageNumbers.map((number) => (
        <MDBPageNav
          className={currentPage === number ? "active" : null}
          onClick={() => paginate(number)}
          key={number}
        >
          <a
            style={{
              color: currentPage === number && "white",
              textDecoration: "none",
            }}
            href="!#"
          >
            {number}
          </a>
        </MDBPageNav>
      ))}
      <MDBPageItem>
        <MDBPageNav onClick={nextPage} aria-label="Previous">
          <span style={{ cursor: "pointer" }} aria-hidden="true">
            &raquo;
          </span>
        </MDBPageNav>
      </MDBPageItem>
    </MDBPagination>
  </MDBCol>
</MDBRow>;
