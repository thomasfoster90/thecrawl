import React, { Component } from 'react';
import './App.css';
import ButtonBar from './ButtonBar';
import TextDisplay from "./TextDisplay";

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      crawl:""
    }
    this._setCrawl=this._setCrawl.bind(this)
  }

  _setCrawl(crawl){
    this.setState({
      crawl:crawl
    })
  }
  render() {
    return (
      <div className="App">
      <div className="App-header">
        <h2>Star Wars Crawl</h2>
        <ButtonBar _sendCrawl={this._setCrawl}/>
      </div>
      <div className="crawl">
        <TextDisplay crawl={this.state.crawl} />
      </div>
      </div>
    );
  }
}

export default App;
