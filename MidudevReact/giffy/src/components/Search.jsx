import { useState } from "react";


const Search = ({ setKeyword }) => {
    return (
        <form className="container__search flex__column--center">
            <input 
                type="text"
                id="input__search"
                className="input__search"
            />
            <button 
                className="btn__search"  
                type="submit" 
                value="Submit"
            >
                Search
            </button>
        </form>
    )
}

export default Search
