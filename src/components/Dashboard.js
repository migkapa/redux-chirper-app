import React, { Component } from 'react';
import { connect } from 'react-redux';

class Dashboard extends Component {
  render() {
    return (
      <div>
        <h3 className='center'>Your timeline</h3>
        <ul className='dashboard-list'>
          {this.props.tweetIds.map(id => (
            <li key={id}>TWEET ID: {id}</li>
          ))}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { tweets } = state;

  return {
    tweetIds: Object.keys(tweets).sort(
      (a, b) => tweets[b].timestampt - tweets[a].timestampt
    )
  };
}

export default connect(mapStateToProps)(Dashboard);
