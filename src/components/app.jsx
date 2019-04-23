import React, { Component } from 'react';
import giphy from 'giphy-api';
import SearchBar from './search_bar.jsx';
import Gif from './gif.jsx';
import GifList from './gif_list.jsx';


class App extends Component {
  constructor (props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGifId: "1xONIE9kieqf4VTX50"
    }

    this.search("french bulldog");
  }

  search = (query) => {
    //TODO: API call
    giphy('8tGIu4PIfWpY7Mpx5qCKHzRnlHbzln4Q').search({
          q: query,
          rating: 'g',
          limit: 10
          }, (error, result) => {
            this.setState ({
              gifs: result.data
            });
          });
  }

  render() {
    const gifs = [
      {id: "1xONIE9kieqf4VTX50"},
      {id: "tpGS9djTHuItG"}
    ];
    return (
      <div>
        <div className="left-scene">
          <SearchBar searchFunction={this.search}/>
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId} />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs = {this.state.gifs} />
        </div>
      </div>
    );
  }
}

export default App;
