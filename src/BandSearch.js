import React, { Component } from "react";
import DisplayBand from "./DisplayBand";

class BandSearch extends Component {
  constructor(props) {
    super(props);

    this.getBand = this.getBand.bind(this);

    this.state = {
      band: "",
      events: [],
      artistInfo: {}
    };
  }

  async getBand(e) {
    e.preventDefault();

    const API_KEY = process.env.REACT_APP_API_KEY;

    const getArtist = await fetch(
      `https://rest.bandsintown.com/artists/${
        this.state.band
      }?app_id=${API_KEY}`
    );
    const artist = await getArtist.json();
    this.setState({
      artistInfo: artist
    });

    const res = await fetch(
      `https://rest.bandsintown.com/artists/${
        this.state.band
      }/events?app_id=${API_KEY}`
    );
    const events = await res.json();
    this.setState({
      events: events
    });
    console.log(res);
    console.log(events);
    console.log(artist);
  }

  handleChange = () => {
    this.setState({
      band: this.result.value
    });
  };

  render() {
    return (
      <div>
        <h3>Enter Band to check on tour dates</h3>
        <form>
          <input
            className="search-field"
            type="text"
            placeholder="Enter band name"
            ref={input => (this.result = input)}
            onChange={this.handleChange}
          />
          <button className="btn-search" onClick={this.getBand}>
            Search
          </button>
        </form>
        {this.state.band && this.state.events && (
          <DisplayBand
            bandData={this.state.band}
            eventData={this.state.events}
            artistData={this.state.artistInfo}
          />
        )}
      </div>
    );
  }
}

export default BandSearch;
