import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { store } from 'store'

import { getChannelPreferences } from 'actions/channel'
import App from 'containers/App'

const idChatDiv = 'recast-webchat-div'

if (!document.getElementById(idChatDiv)) {
  const element = document.createElement('div')
  element.id = idChatDiv
  document.body.appendChild(element)
}

const root = document.getElementById(idChatDiv)

const script = document.currentScript || document.getElementById('recast-webchat')

const channelId = script.getAttribute('channelId')
const token = script.getAttribute('token')

//SolExp
const fileDrop = script.getAttribute('fileDrop') === 'true'
const clearButton = script.getAttribute('clearButton') === 'true'
const voice = script.getAttribute('voice') === 'true'

if (root && channelId && token) {
  getChannelPreferences(channelId, token).then(preferences => {
    ReactDOM.render(
      <Provider store={store}>
        <App
          token={token}
          channelId={channelId}
          preferences={preferences}
          fileDrop={fileDrop}
          voice={voice}
          clearButton={clearButton}
        />
      </Provider>,
      root,
    )
  })
}
