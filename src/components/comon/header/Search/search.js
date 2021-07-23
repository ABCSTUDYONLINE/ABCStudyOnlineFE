import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { ReactSearchAutocomplete } from "react-search-autocomplete";

function Search() {
  const items = [
    {
      id: 0,
      name: "Cobol",
    },
    {
      id: 1,
      name: "JavaScript",
    },
    {
      id: 2,
      name: "Basic",
    },
    {
      id: 3,
      name: "PHP",
    },
    {
      id: 4,
      name: "Java",
    },
  ];
  const [keyWord, setKeyWord] = useState("");
  const history = useHistory();

  const handleOnSearch = (string, results) => {
    // onSearch will have as the first callback parameter
    // the string searched and for the second the results.
    console.log(string, results);
    setKeyWord(string);
  };

  const handleOnHover = (result) => {
    // the item hovered
    console.log(result);
  };

  const handleOnSelect = (item) => {
    // the item selected
    console.log(item);
  };

  const handleOnFocus = () => {
    console.log("Focused");
  };
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      console.log("do validate", keyWord);
      history.push(`/search/${keyWord}`);
      window.scrollTo({ top: 0 });
    }
  };

  return (
    <div style={{ width: 400 }} onKeyDown={handleKeyDown}>
      <ReactSearchAutocomplete
        items={items}
        onSearch={handleOnSearch}
        onHover={handleOnHover}
        onSelect={handleOnSelect}
        onFocus={handleOnFocus}
        autoFocus
      />
    </div>
  );
}
export default Search;
