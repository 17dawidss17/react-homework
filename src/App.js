import NameDisplay from "./components/NameDisplay";

import React, { useEffect, useState } from "react";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
// function NameDisplay({ name }) {
//   console.log("name", name);
//   return (
//     <div className="NameDisplay">
//       <h1> To ja </h1>
//       <NameDisplay name={name} />
//     </div>
//   );
// }
// export default NameDisplay;

function App() {
  const [value, setValue] = useState("Tytuł strony");
  useEffect(() => {
    alert("Teraz był efekt!");
  }, [value]);
  return (
    <div className="App">
      <h1> {value} </h1>
      <button onClick={() => setValue("Nowy tytuł")}>Podaj nowy tytuł</button>
      <NameDisplay name="Dawid" />
    </div>
  );
}

export default App;
