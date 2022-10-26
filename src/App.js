import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Chart from "./Chat";
import CreateUser from "./CreateUser";

function App() {
  const [user, setUser] = useState("");

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/chart" element={<Chart user={user} />} />
          <Route path="/" element={<CreateUser setUser={setUser} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
