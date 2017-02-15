import React, {Component} from "react";
import axios from 'axios';

class FilmButton extends Component{
  constructor(props) {
    super(props);
    this._handleClick = this._handleClick.bind(this);
    this._sendCrawl = this._sendCrawl.bind(this);
  }
  _handleClick(e){
    e.preventDefault();
    axios.get(`http://swapi.co/api/films/${this.props.filmID}`).then((response) => {
      var crawl = response.data.opening_crawl
      this._sendCrawl(crawl);
    })
  }

  componentDidUpdate() {

  }

  componentDidMount() {

  }

  _sendCrawl(crawl){
    this.props.sendCrawl(crawl);
  }
  render() {
    return(
      <button onClick={this._handleClick}>{this.props.children}</button>
    )
  }
}
export default FilmButton;
