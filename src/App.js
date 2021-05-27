import React, { useState } from "react";
import { Provider } from "react-redux";
import store from "./store";
import "./App.css";
// import RegisterForm from "./components/pages/RegisterForm";
import TableForm from "./components/pages/TableForm";
import AddPersonModal from "./components/pages/AddPersonModal";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <AddPersonModal />
        <TableForm />
      </Provider>
    </div>
  );
}

export default App;
