import {useState} from "react";
import Header from "./components/Header";
import Search from "./components/Search";
import Table from "./components/Table";
import Footer from "./components/Footer";


export default function App() {
  const [searchValue, setSearch] = useState("");
  
  return (
    <div className="App">
      <Header />
        <Search onChange = {event => setSearch(event.target.value)} />
        <Table query = {searchValue} /> 
        <Footer />
    </div>
  );
}
