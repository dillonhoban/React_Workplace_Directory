import React, { useMemo, useState, useEffect } from "react";
// import ReactTable from "react-table-6";  
// import "react-table-6/react-table.css";
import Footer from "./components/Footer";
import Table from "./components/Table";
import Header from "./components/Header";
import Search from "./components/Search";

function App() {
    return (
        <div>
            <Header/>
                <Search/>
                <Table/>
            <Footer/>
        </div>
    )
}

export default App;