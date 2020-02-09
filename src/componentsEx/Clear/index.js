import React, { Component } from 'react'
import { connect } from 'react-redux'
import { removeAllMessages } from '../../actions/messages'
import './style.scss'

@connect(
  state => ({ isReady: state.conversation.conversationId }),
  {
    removeAllMessages,
  },
)
class Clear extends Component {
  onClick = () => {
    this.props.removeAllMessages()
    console.log(document.getElementsByClassName('solexp-imageLoading'))
    Array.prototype.slice
      .call(document.getElementsByClassName('solexp-imageLoading'))
      .forEach(function(item) {
        item.parentNode.removeChild(item)
      })
  }
  render() {
    return (
      <div onClick={this.onClick} className="clearButton">
        Clear
      </div>
    )
  }
}

export default Clear
