import React, { Component } from 'react'
import withToolTip from './withToolTip'
import './movie.css'

export class Moive extends Component {
  render() {
    return (
      <div>
        <h2 className='title'>Brahmastra</h2>
            {this.props.showToolTip && <div className='tooltip'>It was a good movie with great VFX.</div>}
      </div>
    )
  }
}

export default withToolTip(Moive)