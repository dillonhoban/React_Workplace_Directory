import React, { useMemo, useState, useEffect } from "react";
// import ReactTable from "react-table-6";  
// import "react-table-6/react-table.css";
import Footer from "./components/Footer";
import Table from "../components/Table";
import Header from "./components/Header";
import Search from "./components/Search";
import axios from "axios";
// import 'react-table-6/react-table.css';
import Bootstrap from "bootstrap/dist/css/bootstrap.min.css";

function App() {
    const [ searchTerm, setSearchTerm ] = useState("");
    const [ sorted, setSorted] = useState(false);
    const [ data, setEmployees ] = useState(employees);

    function handleSearchTerm(event)  {
        setSearchTerm(event.target.value)
    }

    function handleSortByName() {
        // Sorting the array by first name ascending or descending
        if (!sorted) {
            setEmployees(data.sort((a, b) => (a.name > b.name) ? 1 : -1));
            setSorted(true);
        } else {
            setEmployees(data.sort((a, b) => (a.name > b.name) ? -1 : 1));
            setSorted(false);
        }
    }

    // the filteredEmployees variable only stores employee names that start with with the matching string you type
    const filteredEmployees = data.filter(employee => employee.name.toLowerCase().startsWith(searchTerm.toLowerCase()));
    return (
        <div>
            <Header/>
                <h1 className="title text-5xl text-gray-800 mt-16">Employee Directory</h1>
                <p className="mb-16 text-md">Search for an employee or sort by Name or Category.</p>
                {/*the handleSearchTerm method and searchTerm state get passed down to the Navigation component via props with the onSearch and searchTerm props*/}
                <Navigation
                    onSearch={handleSearchTerm}
                    searchTerm={searchTerm}
                    handleSortByName={handleSortByName}
                    handleSortByDept={handleSortByDept}
                />
                {/* the employees array gets the filteredEmployees data via the data prop */}
                <EmployeeCardList data={filteredEmployees}/>
            <Footer/>
        </div>
    )
}

export default App;