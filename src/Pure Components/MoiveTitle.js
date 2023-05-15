import React, { Component } from 'react'

export class MoiveTitle extends Component {
  render() {
    console.log("Movie title is rendered.");
    return (
      <div>
        <p>
            Movie title: <strong>{this.props.title}</strong>
        </p>
      </div>
    )
  }
}

export default MoiveTitle