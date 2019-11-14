import React, { Component } from 'react';
import FeedsImport from './api';
import Logo from '../../images/y18.gif';
import UpVote from './upVote';
import extractDomain  from 'extract-domain';
import TimeAgo from 'react-timeago'

class Feeds extends Component {
  constructor() {
    super()
    this.state = {
      feeds: [],
      load: false,
      page: 0,
      totalPages: 0
    }
  }

  componentDidMount() {
    this.getFeedsData(this.state.page)
  }

  // Fetching Feed data
  getFeedsData = async (page) => {
    this.setState({load: true});
    let response = await FeedsImport(page);
    let {data} = response;
    if ( data.length !== 0) {
      this.setState({feeds: [...this.state.feeds, ...data.hits]})
    }
    this.setState({load: false, totalPages: data.nbPages});
  }

  // Pager
  nextItems = () => {
    this.getFeedsData(this.state.page + 1)
    this.setState({page: this.state.page + 1});
  }

  // Extracting domain name from url
  getDomain = (url) => {
    if (url !== null) {
      return extractDomain(url);
    }
  }

  feedsTemplate() {
    return (
      <div className='feeds'>
        {
          this.state.feeds.map((items) => {
            return (
              <ul key={items.objectID}>
                <li className='num-comments'>{items.num_comments ? items.num_comments : 0}</li>
                <li className='up-score'><UpVote score={items.relevancy_score} id={items.objectID} /></li>
                <li className='title'>{items.title}
                  <span className='base-url grey'>
                    {items.url && 
                      <a href={items.url}>({this.getDomain(items.url)}) </a>
                    }
                     by</span>
                    <span>{`${items.author}`}</span>
                    <span className='grey'>
                      <TimeAgo date={items.created_at} />
                    </span>
                </li>
              </ul>
            )   
          })
        }
        {
          this.state.totalPages !== this.state.page &&
          <>
            <ul>
              <li className='num-comments'></li>
              <li className='up-score'></li>
              <li className='title more' onClick={this.nextItems}>More</li>
            </ul>
          </>
        }
      </div>
    )
  }

  render() {
    return (
      <div className='feeds-wrapper'>
        <ul className='header'>
          <li className='logo'><img src={Logo} alt="load" /></li>
          <li className='label top-label'>top</li>
          <li className='label new-label'>new</li>
        </ul>
        {
          this.feedsTemplate()
        }
        {
          this.state.load &&
          <div className='loading'>Loading...</div>
        }
      </div>
    )
  }
}

export default Feeds;