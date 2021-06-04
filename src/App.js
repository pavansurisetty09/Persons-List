import React, { useState } from "react";
import { Provider } from "react-redux";
import store from "./store";
import "./App.css";
import TableForm from "./components/pages/TableForm";
import AddPersonModal from "./components/pages/AddPersonModal";

// import Demo from "./components/Demo";

function App() {
  return (
    <div className="bg">
      <Provider store={store}>
        <AddPersonModal />
        <TableForm />
      </Provider>
    </div>
  );
}

export default App;
