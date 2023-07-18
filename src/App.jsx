import {useState} from "react";
import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import SearchBar from "./assets/component/searchBar";
import HorizontalDropdowns from "./assets/component/dropdownList";
import CardGrid from "./assets/component/cardGrid";

// import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
// import {icon} from "@fortawesome/fontawesome-svg-core/import.macro";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div class='main-container'>
        <div className='container-sm'>
          <SearchBar />
          <HorizontalDropdowns />
          <CardGrid />
        </div>
      </div>
    </>
  );
}

export default App;
