import axios from "axios";
import {
  ADD_PERSON,
  GET_PERSONS,
  GET_PERSON,
  UPDATE_PERSON,
  DELETE_PERSON,
  SET_CURRENT,
  CLEAR_CURRENT,
  SHOW_MODAL,
  CLOSE_MODAL,
  SET_PAGENUMBERS,
} from "./types";

// Add Persons to Server

export const addPerson = (person) => async (dispatch) => {
  try {
    const res = await axios.post("/persons", person);
    dispatch({
      type: ADD_PERSON,
      payload: res.data,
    });
  } catch (err) {
    console.error(err);
  }
};

// Get Persons from Server

export const getPersons = () => async (dispatch) => {
  try {
    const res = await axios.get("/persons");

    dispatch({
      type: GET_PERSONS,
      payload: res.data,
    });
  } catch (err) {
    console.error(err);
  }
};

export const updatePerson = (person) => async (dispatch) => {
  console.log(person._id);
  try {
    const res = await axios.put(`/persons/${person._id}`, person);
    dispatch({
      type: UPDATE_PERSON,
      payload: res.data,
    });
    console.log(res.data);
  } catch (err) {
    console.error(err);
  }
};

// Set Current Person to Edit
export const setCurrent = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`/persons/${id}`);
    dispatch({
      type: SET_CURRENT,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};

// Delete Person from Server

export const deletePerson = (id) => async (dispatch) => {
  try {
    await axios.delete(`/persons/${id}`);
    dispatch({
      type: DELETE_PERSON,
      payload: id,
    });
  } catch (err) {
    console.log("err");
  }
};

// Clear Current person
export const clearCurrent = () => {
  return {
    type: CLEAR_CURRENT,
  };
};

// Show Modal

export const showModal = () => {
  return {
    type: SHOW_MODAL,
  };
};

// Close Modal

export const closeModal = () => {
  return {
    type: CLOSE_MODAL,
  };
};

// // Set PageNumbers

// export const setPageNumbers = () => {
//   return {
//     type: SET_PAGENUMBERS,
//   };
// };
