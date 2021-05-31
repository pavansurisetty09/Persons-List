import React, { useState } from "react";
import { Provider } from "react-redux";
import store from "./store";
import "./App.css";
// import RegisterForm from "./components/pages/RegisterForm";
import TableForm from "./components/pages/TableForm";
import AddPersonModal from "./components/pages/AddPersonModal";
import PaginationForm from "./components/pages/PaginationForm";

// import Demo from "./components/Demo";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <AddPersonModal />
        <TableForm />
        {/* <Demo /> */}
      </Provider>
    </div>
  );
}

export default App;
