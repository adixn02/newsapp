const Header = ({ allnews, setSearchinput, setFilterData, searchinput, setSearchvalue }) => {

    function filteritem() {
      const filteredNews = allnews.filter((news) => {
        return news.title.toLowerCase().includes(searchinput.toLowerCase());
      });
      setFilterData(filteredNews); 
    }
  
function livalues(e){
setSearchvalue(e.target.innerText)
}

    return (
      <div className="d-flex align-items-center justify-content-between p-3">
        <h2>News App</h2>
        <ul className="d-flex list-unstyled gap-2 align-items-center">
          <li className="m-2 nav-items p-2" onClick={livalues}>Breaking News</li>
          <li className="m-2 nav-items p-2" onClick={livalues}>World News</li>
          <li className="m-2 nav-items p-2" onClick={livalues}>Politics</li>
          <li className="m-2 nav-items p-2" onClick={livalues}>Entertainment</li>
          <li className="m-2 nav-items p-2" onClick={livalues}>Sports</li>
        </ul>
        <div className="searchbox d-flex align-items-center">
          <input
            type="text"
            placeholder="Search..."
            onChange={(e) => {
              setSearchinput(e.target.value);
            }}
          />
          <button
            className="m-2 btn btn-primary"
            onClick={() => {
              setSearchvalue(searchinput); 
              filteritem(); 
            }}
          >
            Search
          </button>
        </div>
      </div>
    );
  };
  
  export default Header;
  