import news from "../assets/news.png"
const Newscard = ({news})=>{
    return(
        <div className="card m-3 newsCard">
            <img src={news.urlToImage} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{news.title}</h5>
                <p className="card-text">{news.content}</p>
                <a href={news.url} target="_blank" className="btn btn-primary">Read full news 	&#62;&#62;</a>
            </div>
            <span className="m-2">Source : {news.source.name}</span>
        </div>
    )
}

export default Newscard;