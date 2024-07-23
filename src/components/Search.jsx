const Search = () => {
  const searchClick = ({ setBtnClicked }) => {
    setBtnClicked(true);
  };
  return (
    <>
      <p>Hello World</p>
      <input type="text" placeholder="Search" />
      <button onClick={searchClick}>Search</button>
    </>
  );
};

export default Search;
