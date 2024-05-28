import { useState } from "react";

const SearchItem = (props) => {
  const [tDataSave, setTDataSave] = useState(true);
  const dataSave = () => {
    if (tDataSave) {
      props.setArrayHolder(props.dataState);
      setTDataSave(false);
    }
  };
  return (
    <form className="input-group d-flex p-0" role="search">
      <span className="input-group-text">🔍 》</span>
      <input
        className="form-control p-3"
        type="search"
        placeholder="جستجو کنید .."
        aria-label="Search"
        onChange={props.searchFilterFunction}
        onClick={dataSave}
      />
    </form>
  );
};

export default SearchItem;
