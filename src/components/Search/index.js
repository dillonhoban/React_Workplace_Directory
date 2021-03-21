import React from "react";
import "./index.css";

export default function Search({ onChange }) {
    return (
        <div className="searchbar p-3 mb-0 text-center">
            <input type="text" placeholder="Search" onChange={onChange}></input>
        </div>
    );
};