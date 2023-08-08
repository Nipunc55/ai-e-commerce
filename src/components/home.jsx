
import "bootstrap/dist/css/bootstrap.min.css";
import SearchBar from "./home/searchBar";
import HorizontalDropdowns from "./home/dropdownList"
import CardGrid from "./home/cardGrid"

function Home() {
 

  return (
    <>
      <SearchBar />
      <HorizontalDropdowns />
      <CardGrid />
    </>
  );
}

export default Home;
