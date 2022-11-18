import React from 'react';
import PropTypes from 'prop-types';
import './search.css';


const Search = ({ search, updateSearchValue, manageSubmit }) =>
(
    <div className="main-search">
        {/* Submitted by pressing enter */}
        <form
            onSubmit={(event) => {
                event.preventDefault();
                manageSubmit();
            }}
        >
            <input className="search-bar"
                placeholder="Search Input"
                value={search}
                // With the event we get the new value and we will transmit this new value to the state
                onChange={(event) => {
                    console.log(event.currentTarget.value);
                    updateSearchValue(event.currentTarget.value);
                }}
            />
        </form>
    </div>
);
//Validates the expected type
Search.propTypes = {
    search: PropTypes.string.isRequired,
    updateSearchValue: PropTypes.func.isRequired,
    manageSubmit: PropTypes.func.isRequired,
};

export default Search;