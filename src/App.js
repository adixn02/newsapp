import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './componens/header';
import Searchbar from './componens/searchbar';
import Main from './componens/main';
import { useState } from 'react';

function App() {
  let [searchinput, setSearchinput] = useState(""); 
  let [searchvalue, setSearchvalue] = useState("All News Area"); 
  let [filterdata, setFilterData] = useState([]); 
  let [allnews, setAllnews] = useState([]); 

  return (
    <div className="App">
      <Header
        setSearchinput={setSearchinput}
        searchinput={searchinput}
        setSearchvalue={setSearchvalue}
        setFilterData={setFilterData}
        allnews={allnews}
      />
      <Searchbar searchvalue={searchvalue} />
      <Main
        allnews={allnews}
        setAllnews={setAllnews}
        searchvalue={searchvalue}
        filterdata={filterdata}
        setFilterData={setFilterData}
      />
    </div>
  );
}

export default App;
