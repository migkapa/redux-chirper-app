import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleNewTweet } from '../actions/tweets';

class NewTweet extends Component {
  state = {
    text: ''
  };

  handleChange = e => {
    const text = e.target.value;

    this.setState(() => ({
      text
    }));
  };

  handleSubmit = e => {
    e.preventDefault();

    const { text } = this.state;
    const { dispatch, id } = this.props;

    dispatch(handleNewTweet(text, id));

    this.setState(() => ({
      text: ''
    }));
  };

  render() {
    const { text } = this.state;

    const tweetLeft = 280 - text.length;

    return (
      <div>
        <h3 className='center'>Compose new Tweet</h3>
        <form className='new-tweet' onSubmit={this.handleSubmit}>
          <textarea
            placeholder="What's happening?"
            value={text}
            onChange={this.handleChange}
            className='textarea'
            maxLength={280}
          />
          {tweetLeft <= 100 && <div className='tweet-length'>{tweetLeft}</div>}
          <button className='btn' type='submit' disabled={text === ''}>
            Submit
          </button>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  const { id } = ownProps;

  return {
    id
  };
}

//export default connect(mapStateToProps)(NewTweet);
export default connect(mapStateToProps)(NewTweet);
