const Search = ({setSearchInfo, searchInfo, contacts}) => {
  console.log('Contacts:', contacts);

  //onChange eventt to handle the change in search input
  const searchChange = (event) =>{
    setSearchInfo(event.target.value)
  }

  return (
    <>
    <div className="d-flex justify-content-center align-items-center p-3 flex-column">
      <p className="lead">Search Contacts:</p>
      <input type="text" placeholder="Search" onChange={searchChange} value={searchInfo}  className="form-control w-25"/>
      </div>
    </>
  );
};

export default Search;
