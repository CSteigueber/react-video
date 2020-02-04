import React from 'react';

function Search (props) {
    return (
        <div>
            <input type="text" id="search" placeholder="Search a movie"/>
            <button onClick={props.event}>Search</button>
        </div>
    );
};

export default Search;