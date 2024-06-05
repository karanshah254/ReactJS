import React, { Component } from 'react'
import NewItem from './NewItem'

export class News extends Component {

    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
            page: 1
        }
    }

    async componentDidMount() {
        let url = "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=6607553cdd904fe5b83691aab58ba233&page=1&pageSize=15";
        let data = await fetch(url);
        let parseData = await data.json();
        // console.log(parseData);
        this.setState({ articles: parseData.articles, totalArticles: parseData.totalResults });
    }

    handleNextClick = async () => {
        if (this.state.page + 1 > Math.ceil(this.state.totalResults / 15)) {

        } else {
            let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=6607553cdd904fe5b83691aab58ba233&page=${this.state.page + 1}&pageSize=15`;
            let data = await fetch(url);
            let parseData = await data.json();
            // console.log(parseData);
            this.setState({
                page: this.state.page + 1,
                articles: parseData.articles
            })
        }
    }

    handlePreviousClick = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=6607553cdd904fe5b83691aab58ba233&page=${this.state.page - 1}&pageSize=15`;
        let data = await fetch(url);
        let parseData = await data.json();
        // console.log(parseData);
        this.setState({
            page: this.state.page - 1,
            articles: parseData.articles
        })
    }

    render() {
        return (
            <div className='container my-3'>
                <h1 style={{ height: '50px', fontFamily: 'Inter' }}>NewsMonkey - Top Headlines</h1>
                <div className="row">
                    {this.state.articles.map((element) => {
                        return (
                            <div className="col-md-4" key={element.url}>
                                <NewItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.urlToImage} newsUrl={element.url} />
                            </div>
                        );
                    })}
                </div>
                <div className="container d-flex justify-content-between my-3">
                    <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePreviousClick}>&larr; Previous</button>
                    <button type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
                </div>
            </div>
        )
    }
}

export default News;