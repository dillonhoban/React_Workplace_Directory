import React, { Component } from "react";
import API from "../../utils/API";
import Table from "../Table";
import "./style.css";

function SearchForm(props) {
  return (
    <div className="form-group">
      <label htmlFor="search">Search:</label>
      <input
        onChange={props.handleInputChange}
        value={props.value}
        name="search"
        type="text"
        className="form-control"
        placeholder="Search"
        id="search"
      />
    </div>
  );
}

export default SearchForm;