import React, { useState } from "react";

import InfoForm from "./components/form/InfoForm";
import ResultCard from "./components/resultCard/ResultCard";

import "./App.css";

function App() {
  const [userList, setUserList] = useState([]);

  return (
    <>
      <InfoForm userList={userList} setUserList={setUserList} />
      {userList.map((user) => (
        <div className="card-container">
          <ResultCard user={user} key={user.id} />
        </div>
      ))}
    </>
  );
}

export default App;
