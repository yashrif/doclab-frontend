import React from "react";
import Search from "../../reusable/Search.jsx";
import theme from "../../styling/theme.jsx";

const SearchContainer = ({ term, setTerm, category }) => {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "1.2rem",
          marginBottom: "1.2rem",
        }}
      >
        <h3
          style={{
            fontSize: "1.5rem",
            lineHeight: "1.5",
            fontWeight: "600",
            color: `${theme.typography.colors.primaryFirst.primary}`,
          }}
        >
          {[category.slice(0, 1).toUpperCase(), category.slice(1)].join("")}
        </h3>
        <div
          style={{
            fontSize: "1.5rem",
            lineHeight: "1.5",
            display: "flex",
            alignItems: "center",
            gap: "0.8rem",
          }}
        >
          <p className="search-container-filter-title">
            View:{" "}
            <span style={{ color: "#333", fontWeight: "500" }}>Gender</span>{" "}
          </p>
          <ion-icon name="chevron-down-outline"></ion-icon>
        </div>
      </div>
      <div className="search-bar">
        <Search
          term={term}
          setTerm={setTerm}
          category={category}
          bg="#e9ecef"
        />
      </div>
    </>
  );
};

export default SearchContainer;
