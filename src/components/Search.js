import React from "react";
 

function Search(props) {

 
    
  return (
    <div className="container main text-center bg-dark py-3 rounded">
      <form
      onSubmit={props.handleSearchChange}
      >
     
        <input
          onChange={props.handleInputChange}
          value={props.Search}
          name="search"
          type="text"
          className="form-control col-md-3 mx-auto text-center"
          placeholder="Search for an employee"
          id="search"

        />
        <button
         type="submit"
         
          className="btn btn-primary mt-3"
        >
          Search
        </button>
        <button
         type="sort"
         onClick={props.sortName}
          className="btn btn-success mt-3 mx-3"
        >
          Sort
        </button>
      </form>
    </div>
  );
}

export default Search;
