import React, { Component } from 'react';
import FilmButton from './FilmButton';
import './ButtonBar.css';

class ButtonBar extends Component {
  constructor(props){
    super(props);
    this._sendCrawl = this._sendCrawl.bind(this);
  }
  _sendCrawl(crawl){
    this.props._sendCrawl(crawl)
  }
  render() {
    return (
      <div id="ButtonBar">
        <FilmButton filmID={1} sendCrawl={this._sendCrawl}>
          The Phantom Menace
        </FilmButton>
        <FilmButton filmID={2} sendCrawl={this._sendCrawl}>
          Attack of the Clones
        </FilmButton>
        <FilmButton filmID={3} sendCrawl={this._sendCrawl}>
          Revenge of the Sith
        </FilmButton>
        <FilmButton filmID={4} sendCrawl={this._sendCrawl}>
          A New Hope
        </FilmButton>
        <FilmButton filmID={5} sendCrawl={this._sendCrawl}>
          The Empire Strikes Back
        </FilmButton>
        <FilmButton filmID={6} sendCrawl={this._sendCrawl}>
          Return of the Jedi
        </FilmButton>
        <FilmButton filmID={7} sendCrawl={this._sendCrawl}>
          The Force Awakens
        </FilmButton>
      </div>
    )
  }
}
export default ButtonBar;
