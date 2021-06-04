import {
  GET_PERSONS,
  GET_PERSON,
  ADD_PERSON,
  UPDATE_PERSON,
  DELETE_PERSON,
  SET_CURRENT,
  CLEAR_CURRENT,
  SHOW_MODAL,
  CLOSE_MODAL,
  SET_PAGENUMBERS,
} from "../actions/types";

const initialState = {
  person: [],
  current: null,
  currentPerson: {},
  show: false,
  pageNumbers: [],
};

// eslint-disable-next-line
export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_PERSON:
      return {
        ...state,
        person: [...state.person, action.payload],
      };
    case GET_PERSONS:
      return {
        ...state,
        person: action.payload,
      };
    case GET_PERSON:
      return {
        ...state,
        currentPerson: action.payload,
      };
    case UPDATE_PERSON:
      return {
        ...state,
        person: state.person.map((person) =>
          person._id === action.payload._id ? action.payload : person
        ),
      };
    case DELETE_PERSON:
      return {
        ...state,
        person: state.person.filter((person) => person._id !== action.payload),
      };
    case SET_CURRENT:
      return {
        ...state,
        current: action.payload,
      };
    case CLEAR_CURRENT:
      return {
        ...state,
        current: null,
      };
    case SHOW_MODAL:
      return {
        ...state,
        show: true,
      };
    case CLOSE_MODAL:
      return {
        ...state,
        show: false,
      };
    case SET_PAGENUMBERS:
      return {
        ...state,
        pageNumbers: [],
      };
    default:
      return state;
  }
};
