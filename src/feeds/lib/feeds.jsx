import React, { Component } from 'react';
import FeedsImport from './api';

class Feeds extends Component {
  constructor() {
    super()
    this.state = {
      feeds: [],
      load: false,
      page: 0
    }

    this.nextItems = this.nextItems.bind(this);
  }

  componentDidMount() {
    this.getFeedsData(this.state.page)
  }

  getFeedsData = async (page) => {
    this.setState({load: true});
    let response = await FeedsImport(page);
    let {data} = response;
    if ( data.length !== 0) {
      this.setState({feeds: [...this.state.feeds, ...data.hits]})
    }
    this.setState({load: false});
  }

  nextItems = () => {
    this.getFeedsData(this.state.page + 1)
    this.setState({page: this.state.page + 1});
  }

  feedsTemplate() {
    return (
      <div className='feeds-wrapper'>
        {
          this.state.feeds.map((items) => {
            return (
              <ul key={items.objectID}>
                <li className='num-comments'>{items.num_comments}</li>
                <li className='up-score'>{items.relevancy_score}</li>
                <li className='up-score'>{items.relevancy_score}</li>
                <li className='up-score'>{`${items.title} `}</li>
              </ul>
            )   
          })
        }
        {
          this.state.load &&
          <>
            <div className='loading'>Loading...</div>
          </>
        }
      </div>
    )
  }

  render() {
    console.log(this.state.feeds);
    return (
      <>
        {
          this.feedsTemplate()
        }
        <div className='more-items' onClick={this.nextItems}>More</div>
      </>
    )
  }
}

export default Feeds;