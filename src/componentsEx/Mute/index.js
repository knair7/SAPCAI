import React, { Component } from 'react'
import './style.scss'

class Mute extends Component {
  state = {}
  render() {
    return (
      <div className="RecastAppHeader--btn--sound">
        {JSON.parse(localStorage.getItem('recast_soundOn')) ? (
          <img
            className="RecastAppHeader--btn--sound--icon"
            src="https://recastimages-sdcinnovation.dispatcher.hana.ondemand.com/speaker.png"
            onClick={this.onClick}
          />
        ) : (
          <img
            className="RecastAppHeader--btn--sound--icon"
            src="https://recastimages-sdcinnovation.dispatcher.hana.ondemand.com/mute.png"
            onClick={this.onClick}
          />
        )}
      </div>
    )
  }

  onClick = evt => {
    if (JSON.parse(localStorage.getItem('recast_soundOn'))) {
      document.getElementsByClassName('RecastAppHeader--btn--sound--icon')[0].src =
        'https://recastimages-sdcinnovation.dispatcher.hana.ondemand.com/mute.png'
      localStorage.setItem('recast_soundOn', 'false')
      speechSynthesis.cancel()
    } else {
      document.getElementsByClassName('RecastAppHeader--btn--sound--icon')[0].src =
        'https://recastimages-sdcinnovation.dispatcher.hana.ondemand.com/speaker.png'
      localStorage.setItem('recast_soundOn', 'true')
      speechSynthesis.resume()
    }
  }
}

export default Mute
