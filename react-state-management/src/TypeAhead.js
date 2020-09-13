import React, { useState, useEffect } from "react";
import { from } from "rxjs";
import { debounceTime } from "rxjs/operators";
// import debounce from "./debaounce";
import List from "./List";
let TypeAhead = () => {
  let [items, setItems] = useState([]);
  let [keyword, setKeyword] = useState("");
  //   let debouncedSetKeyword = debounce(setKeyword, 500);
  //   function onInputChange(value) {
  //     debouncedSetKeyword(value);
  //     // setKeyword(value);
  //   }
  let keywordStream = from([keyword]);
  keywordStream.pipe(debounceTime(5000)).subscribe((k) => {
    console.log(k);
  });
  useEffect(() => {
    // console.log(keyword);
    if (keyword.length) {
      let newItems = [...items, keyword];
      setItems(newItems);
    }
  }, [keyword]);
  return (
    <div>
      <div>TypeAhead</div>
      <div>
        <input
          type="text"
          placeholder="Type here"
          onChange={(e) => {
            setKeyword(e.target.value);
          }}
        />
        {keyword.length ? <List items={items} /> : null}
      </div>
    </div>
  );
};

export default TypeAhead;
