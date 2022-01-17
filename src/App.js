import React, { useState } from "react";
import data from "./data";
import List from "./List";
function App() {
  const [pepole, setPepole] = useState(data);
  return (
    <main>
      <section className="container">
        <h3>birthdays today</h3>
        <List pepole={pepole} />
        <button
          onClick={() => {
            setPepole([]);
          }}
        >
          clear all
        </button>
      </section>
    </main>
  );
}

export default App;
