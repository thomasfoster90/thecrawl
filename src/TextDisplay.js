import React, { Component } from 'react';
import './TextDisplay.css';

class TextDisplay extends Component {
  render(){
    console.log('crawl: ',this.props.crawl)

    return(
      <div className="crawl-container">
        <h4>{this.props.crawl}</h4>
      </div>
    )
  }
}


export default TextDisplay;
