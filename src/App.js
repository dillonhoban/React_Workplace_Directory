import {useState} from "react";
import Header from "./components/Header";
import Search from "./components/Search";
import Table from "./components/Table";

export default function App() {
  const [searchValue, setSearch] = useState("");
  
  return (
    <div className="App">
      <Header />
        <Search onChange = {event => setSearch(event.target.value)} />
        <Table query = {searchValue} /> 
    </div>
  );
}
