import React, { useEffect, useState, Fragment } from "react";
import { Table, Button, Form, Col, Pagination } from "react-bootstrap";
import "@fortawesome/fontawesome-free/css/all.min.css";
import PaginationForm from "./PaginationForm";
import { connect } from "react-redux";
import {
  getPersons,
  deletePerson,
  setCurrent,
  updatePerson,
  showModal,
} from "../../actions/personAction";
import "bootstrap/dist/css/bootstrap.min.css";
import SetCustomItems from "./SetCustomItems";

function TableForm({ showModal, getPersons, deletePerson, setCurrent, data }) {
  const [search, setSearch] = useState("");
  const [sortCol, setSortCol] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");
  const [currentPage, setCurrentPage] = useState(1);
  const [personsPerPage, setPersonsPerPage] = useState(3);
  const pageNumbers = [];
  const [pageNumberLimit, setPageNumberLimit] = useState(3);
  const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(5);
  const [minPageNumberLimit, setminPageNumberLimit] = useState(0);

  //Get Persons

  useEffect(() => {
    getPersons();
  }, []);

  //Update Person to server

  const onEdit = (e) => {
    showModal();
    setCurrent(e.target.id);
  };

  // Delete Person from server

  const onDelete = (e) => {
    deletePerson(e.target.id);
    console.log("Person Deleted");
  };

  // Search Person from server

  const searchPerson = (e) => {
    setSearch(e.target.value);
  };

  // Filtering

  const filter = () => {
    return data.filter((person) => {
      return ["firstName", "lastName", "age", "gender"].some((key) => {
        return (person[key] + "")
          .toLowerCase()
          .includes(search.toLocaleLowerCase());
      });
    });
  };

  // Sort Handling
  const sortHandler = (colName) => {
    let sortingOrder = sortCol !== colName ? "" : sortOrder;
    setSortOrder(sortingOrder == "asc" ? "desc" : "asc");
  };
  const sort = (a, b) => (a[sortCol] + "").localeCompare(b[sortCol] + "");

  const clickSortButton = (name) => {
    sortHandler(name);
    setSortCol(name);
  };

  const sortList = (list) => {
    if (sortCol) {
      let dir = sortOrder || "asc";
      return list.sort((a, b) => {
        if (isNaN || !isNaN(a[sortCol])) {
          return dir == "asc" ? sort(a, b) : sort(b, a);
        } else {
          return dir == "asc"
            ? a[sortCol] - b[sortCol]
            : b[sortCol] - [sortCol];
        }
      });
    }
    return list;
  };

  //Search List
  let list = search === "" ? data : filter();

  //Sort List
  list = sortList(list);

  //Pagination

  //Get Current Persons
  const indexOfLastPerson = currentPage * personsPerPage;
  const indexOfFirstPerson = indexOfLastPerson - personsPerPage;
  const currentPersons = list.slice(indexOfFirstPerson, indexOfLastPerson);

  for (let i = 1; i <= Math.ceil(data.length / personsPerPage); i++) {
    pageNumbers.push(i);
  }

  //Pagination EventHandlers

  const paginate = (e) => {
    setCurrentPage(Number(e.target.id));
  };

  const nextPage = () => {
    if (currentPage <= pageNumbers.length - 1)
      setCurrentPage((page) => page + 1);

    if (currentPage + 1 > maxPageNumberLimit) {
      setmaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  };

  const prevPage = () => {
    // if (currentPage > pageNumbers[0]) setCurrentPage((page) => page - 1);
    if (currentPage > 1) setCurrentPage((page) => page - 1);
    if ((currentPage - 2) % pageNumberLimit == 0) {
      setmaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  };

  const btnIncrementClick = () => {
    setmaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
    setminPageNumberLimit(minPageNumberLimit + pageNumberLimit);
  };
  const btnDecrementClick = () => {
    if (currentPage > 5) {
      setmaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  };

  let pageIncrementBtn = null;
  if (pageNumbers.length > maxPageNumberLimit) {
    pageIncrementBtn = <Pagination.Ellipsis onClick={btnIncrementClick} />;
  }

  let pageDecrementBtn = null;
  if (minPageNumberLimit >= -1) {
    pageDecrementBtn = <Pagination.Ellipsis onClick={btnDecrementClick} />;
  }

  const renderPageNumbers = pageNumbers.map((number) => {
    if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
      return (
        <Pagination>
          <Pagination.Item
            key={number}
            id={number}
            onClick={paginate}
            className={currentPage == number ? "active" : null}
          >
            {pageNumbers[number - 1]}
          </Pagination.Item>
        </Pagination>
      );
    } else {
      return null;
    }
  });
  return (
    <div className="table__selection">
      <Form.Group
        style={{ marginTop: "5%" }}
        as={Col}
        controlId="formGridPassword"
      >
        <Form.Control
          type="type"
          className="search__bar"
          placeholder="Search Person..."
          onChange={searchPerson}
          value={search}
        />
      </Form.Group>

      <Table className="table__selection" striped bordered hover>
        <thead style={{ backgroundColor: "#99c2ff" }}>
          <tr style={{ textAlign: "center" }}>
            <th
              style={{ cursor: "pointer" }}
              onClick={() => clickSortButton("firstName")}
            >
              First Name
              <span className="sort">
                <button
                  style={{ border: "none", backgroundColor: "transparent" }}
                >
                  {sortCol === "firstName"
                    ? sortOrder === "asc"
                      ? "🠕"
                      : "🠗"
                    : ""}
                </button>
              </span>
            </th>
            <th
              style={{ cursor: "pointer" }}
              onClick={() => clickSortButton("lastName")}
            >
              Last Name
              <span>
                <button
                  style={{ border: "none", backgroundColor: "transparent" }}
                >
                  {sortCol === "lastName"
                    ? sortOrder === "asc"
                      ? "🠕"
                      : " 🠗 "
                    : ""}
                </button>
              </span>
            </th>
            <th
              style={{ cursor: "pointer" }}
              onClick={() => clickSortButton("gender")}
            >
              Gender
              <span>
                <button
                  style={{ border: "none", backgroundColor: "transparent" }}
                >
                  {sortCol === "gender"
                    ? sortOrder === "asc"
                      ? "🠕"
                      : "🠗"
                    : ""}
                </button>
              </span>
            </th>
            <th
              style={{ cursor: "pointer" }}
              onClick={() => clickSortButton("age")}
            >
              Age
              <span>
                <button
                  style={{ border: "none", backgroundColor: "transparent" }}
                >
                  {sortCol === "age" ? (sortOrder === "asc" ? "🠕" : "🠗") : ""}
                </button>
              </span>
            </th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>

        {currentPersons.map((res) => (
          <tr key={res._id} style={{ textAlign: "center" }}>
            <td>{res.firstName}</td>
            <td>{res.lastName}</td>
            <td>{res.gender}</td>
            <td>{res.age}</td>
            <td>
              {
                <Button
                  style={{
                    marginRight: "10px",
                    padding: "7px 25px",
                  }}
                  onClick={onEdit}
                  id={res._id}
                >
                  Edit
                </Button>
              }
            </td>

            <td>
              {
                <Button
                  className="btn-danger"
                  as="input"
                  type="reset"
                  value="Delete"
                  id={res._id}
                  onClick={onDelete}
                />
              }
            </td>
          </tr>
        ))}
      </Table>
      <PaginationForm
        nextPage={nextPage}
        prevPage={prevPage}
        renderPageNumbers={renderPageNumbers}
        pageIncrementBtn={pageIncrementBtn}
        pageDecrementBtn={pageDecrementBtn}
      />
      <SetCustomItems setPersonsPerPage={setPersonsPerPage} />
    </div>
  );
}

const mapStateToProps = (state) => ({
  data: state.person.person,
  current: state.current,
  modalShow: state.person.show,
});

export default connect(mapStateToProps, {
  getPersons,
  deletePerson,
  setCurrent,
  updatePerson,
  deletePerson,
  showModal,
})(TableForm);
