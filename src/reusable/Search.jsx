import React from "react";

const Search = ({ term, setTerm, category }) => {
  return (
    <>
      <style>
        {`
          #search:hover,
          // #search:active,
          #search:focus {
            box-shadow: 0 0 .4rem .2rem rgba(0, 0, 0, 0.1);
          }
        `}
      </style>
      <input
        id="search"
        style={{
          fontFamily: "inherit",
          fontSize: "1.6rem",
          width: "100%",
          padding: "0.8rem 1.6rem",
          backgroundColor: "#e9ecef",
          border: "none",
          borderRadius: "0.9rem",
          transition: "all 0.3s ",
        }}
        type="text"
        placeholder={`Search ${category}`}
        value={term}
        onChange={(e) => setTerm(e.target.value)}
      />
    </>
  );
};

export default Search;
