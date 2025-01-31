import Newscard from "./newscard";
import { useEffect, useState } from "react";

const Main = ({ searchvalue, filterdata, setFilterData, setAllnews }) => {

  async function getData() {
    try {
      let api = `https://newsapi.org/v2/everything?q=${searchvalue}&apiKey=19a77405de244190ac8331dd7f2b04fc`;
      let response = await fetch(api);
      let data = await response.json();
      let articles = data.articles;
      console.log(articles)
      setAllnews(articles); 
      setFilterData(articles);
    } catch (e) {
      console.error(e);
    }
  }

  useEffect(() => {
    getData();
  }, [searchvalue]); 

  return (
    <div className="newsarea container">
      {filterdata && filterdata.length > 0 ? (
        filterdata.map((news, index) => <Newscard key={index} news={news} />)
      ) : (
        <p>loading...</p>
      )}
    </div>
  );
};

export default Main;
