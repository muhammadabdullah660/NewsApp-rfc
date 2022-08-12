import React, { useEffect, useState } from "react";
import NewsItem from "../NewsItem/NewsItem";
import Spinner from "../Spinner/Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
const News = (props) => {
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  // document.title = `NewsApp - ${capitalizeFirstLetter(
  //   props.category
  // )}`;
  const [articles, setarticles] = useState([]);
  const [loading, setloading] = useState(true);
  const [page, setpage] = useState(1);
  const [totalResults, settotalResults] = useState(0);

  useEffect(() => {
    dataFetch();
  }, []);

  const dataFetch = async () => {
    props.setProgress(20);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    setloading(true);
    let data = await fetch(url);
    data = await data.json();
    setarticles(data.articles);
    settotalResults(data.totalResults);
    setloading(false);
    props.setProgress(100);
  };
  const fetchMoreData = async () => {
    setpage(page + 1);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    let data = await fetch(url);
    data = await data.json();
    setarticles(articles.concat(data.articles));
    settotalResults(data.totalResults);
  };

  return (
    <>
      <div className="container my-3 text-center">
        <h2>{`Top Headlines - ${capitalizeFirstLetter(props.category)}`}</h2>{" "}
        {loading && <Spinner />}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={
            <h4>
              <Spinner />
            </h4>
          }
        >
          <div className="row">
            {articles.map((element) => {
              return (
                <div
                  className="col-lg-4 col-md-4 col-sm-6 col-xs-12"
                  key={element.url}
                >
                  <NewsItem
                    title={element.title.slice(0, 50)}
                    description={
                      element.description !== null
                        ? element.description.slice(0, 80) + "..."
                        : "..."
                    }
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                    author={!element.author ? "Unknown" : element.author}
                    date={element.publishedAt}
                    source={!element.source.name ? "N/A" : element.source.name}
                  />
                </div>
              );
            })}
          </div>
        </InfiniteScroll>
      </div>
    </>
  );
};

News.defaultProps = {
  country: "us",
  pageSize: 5,
  category: "general",
};
News.propTypes = {
  country: PropTypes.string,
  category: PropTypes.string,
  pageSize: PropTypes.number,
};

export default News;
