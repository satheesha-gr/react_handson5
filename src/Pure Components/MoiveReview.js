import React, { Component } from 'react'
import MoiveTitle from './MoiveTitle';

export class MoiveReview extends Component {
    constructor(props) {
        super(props);
        this.state = {
          title: "KGF Chapter-2",
          isWatched: false,
        };
    }
    
    toggleResponse = () => {
        console.log("Toggled.");
        this.setState((previousState) => ({
          isWatched: !previousState.isWatched,
        }));
    };

    render() {
    const { title, isWatched } = this.state;
    return (
      <div>
        <MoiveTitle title={title} />
        <p>
          Have you watched the movie ? --{" "}
          <strong>{isWatched ? "YES" : "NO"}</strong>
        </p>
        <button onClick={this.toggleResponse}>Toggle Response</button>
      </div>
    )
  }
}

export default MoiveReview