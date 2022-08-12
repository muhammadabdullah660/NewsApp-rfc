import React, { Component } from "react";
import NewsItem from "../NewsItem/NewsItem";
import Spinner from "../Spinner/Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
export class News extends Component {
  static defaultProps = {
    country: "us",
    pageSize: 5,
    category: "general",
  };
  static propTypes = {
    country: PropTypes.string,
    category: PropTypes.string,
    pageSize: PropTypes.number,
  };
  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalResults: 0,
    };
    document.title = `NewsApp - ${this.capitalizeFirstLetter(
      this.props.category
    )}`;
  }
  async componentDidMount() {
    this.dataFetch();
  }
  async dataFetch() {
    this.props.setProgress(20);
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    data = await data.json();
    this.setState({
      articles: data.articles,
      totalResults: data.totalResults,
      loading: false,
    });
    this.props.setProgress(100);
  }
  fetchMoreData = async () => {
    this.setState({
      page: this.state.page + 1,
    });
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    data = await data.json();
    this.setState({
      articles: this.state.articles.concat(data.articles),
      totalResults: data.totalResults,
    });
  };

  render() {
    return (
      <>
        <div className="container my-3 text-center">
          <h2>
            {`Top Headlines - ${this.capitalizeFirstLetter(
              this.props.category
            )}`}
          </h2>{" "}
          {this.state.loading && <Spinner />}
          <InfiniteScroll
            dataLength={this.state.articles.length}
            next={this.fetchMoreData}
            hasMore={this.state.articles.length !== this.state.totalResults}
            loader={
              <h4>
                <Spinner />
              </h4>
            }
          >
            <div className="row">
              {this.state.articles.map((element) => {
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
                      source={
                        !element.source.name ? "N/A" : element.source.name
                      }
                    />
                  </div>
                );
              })}
            </div>
          </InfiniteScroll>
        </div>
      </>
    );
  }
}

export default News;
