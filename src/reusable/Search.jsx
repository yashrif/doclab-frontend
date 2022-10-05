import React from "react";
import { Center } from "@chakra-ui/react";

const Search = ({ term, setTerm, category, bg }) => {
  const style = {
    icon: {
      "--ionicon-stroke-width": "5.2rem",
    },
  };

  return (
    <>
      <style>
        {`
          // #search:hover,
          // #search:active,
          // #search:focus {
          //   box-shadow: 0 0 .4rem .2rem rgba(0, 0, 0, 0.1);
          // }

          // ion-icon:hover, ion-icon:active {
          //   box-shadow: 0 0 .4rem .2rem rgba(0, 0, 0, 0.1);
          // }

          #search:active, #search:focus {
            box-shadow: none;
          }
        `}
      </style>
      <Center>
        <ion-icon
          style={{
            color: "#888",
            padding: "1rem 0.4rem 1rem 1.6rem",
            fontSize: "1.6rem",
            ...style.icon,
            backgroundColor: bg,
            borderTopLeftRadius: "0.9rem",
            borderBottomLeftRadius: "0.9rem",
          }}
          name="search-outline"
        ></ion-icon>
        <input
          id="search"
          style={{
            fontFamily: "inherit",
            fontSize: "1.6rem",
            width: "100%",
            padding: "0.6rem 1.6rem .6rem 0.4rem",
            backgroundColor: bg,
            border: "none",
            borderTopRightRadius: "0.9rem",
            borderBottomRightRadius: "0.9rem",
            transition: "all 0.3s ",
          }}
          type="text"
          placeholder={`Search ${category}`}
          value={term}
          onChange={(e) => {
            setTerm(e.target.value);
          }}
        />
      </Center>
    </>
  );
};

export default Search;
