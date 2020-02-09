import React from 'react'
import PropTypes from 'prop-types'

import './style.scss'
import Mute from '../../componentsEx/Mute'
import Clear from '../../componentsEx/Clear'

const Header = ({ closeWebchat, preferences, logoStyle, voice, clearButton }) => (
  <div
    className="RecastAppHeader"
    style={{
      color: preferences.complementaryColor,
      backgroundColor: preferences.accentColor,
    }}
  >
    {/*<img className="RecastAppHeader--logo" src={preferences.headerLogo} style={logoStyle} />*/}

    {voice ? <Mute /> : null}
    <div className="RecastAppHeader--title">{preferences.headerTitle}</div>
    {clearButton ? <Clear /> : null}
    <div className="RecastAppHeader--btn" onClick={closeWebchat}>
      <img src="https://cdn.recast.ai/webchat/close.svg" />
    </div>
  </div>
)

Header.propTypes = {
  closeWebchat: PropTypes.func,
  preferences: PropTypes.object,
  logoStyle: PropTypes.object,
}

export default Header
