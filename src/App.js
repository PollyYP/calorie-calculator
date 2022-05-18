import React, { useState } from "react";
import "./App.css";

import InfoForm from "./components/form/InfoForm";
import ResultCard from "./components/resultCard/ResultCard";

function App() {
  const [userList, setUserList] = useState([]);

  return (
    <>
      <InfoForm userList={userList} setUserList={setUserList} />
      <ResultCard userList={userList} />
    </>
  );
}

export default App;
