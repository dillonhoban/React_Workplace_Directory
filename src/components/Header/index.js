import React from 'react';
import "./index.css";

function Header() {
    return (
        <div className="jumbotron text-center header-container mb-0">
            <h1>Employee Directory</h1>
            <p>Click on the carrots to filter by heading or use the search bar to narrow your results.</p>
        </div>
    );
}

export default Header;