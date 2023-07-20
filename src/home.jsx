import {useState} from "react";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import SearchBar from "./assets/component/searchBar";
import HorizontalDropdowns from "./assets/component/dropdownList";
import CardGrid from "./assets/component/cardGrid";

function Home() {
  const [count, setCount] = useState(0);

  return (
    <>
      <SearchBar />
      <HorizontalDropdowns />
      <CardGrid />
    </>
  );
}

export default Home;
