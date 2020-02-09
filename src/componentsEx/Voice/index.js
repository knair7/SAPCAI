import React, { Component } from 'react'
import './style.scss'

//import axios from 'axios';
var outcomes;
class Voice extends Component {
  state = {}
  render() {
    return (
      <button className="voice-button" onClick={this.onClick}>
        <img
          className="voice-button-image"
          src="https://recastimages-sdcinnovation.dispatcher.hana.ondemand.com/microphone.png"
        />
      </button>
    )
  }

  onClick = evt => {
    var that = this
    var isButton = $(evt.target).is(':button')
    if (isButton) {
      // if clicked on outer button node, get child mic image
      var btImg = evt.target.childNodes[1] //get mic image
      !$(btImg).hasClass('Rec') ? $(btImg).addClass('Rec') : $(btImg).removeClass('Rec')
    } else {
      // if clicked on inner mic image
      var btImg = evt.target
      !$(btImg).hasClass('Rec') ? $(btImg).addClass('Rec') : $(btImg).removeClass('Rec')
    }
    var recognition = new (window.SpeechRecognition ||
      window.webkitSpeechRecognition ||
      window.mozSpeechRecognition ||
      window.msSpeechRecognition)()

    recognition.lang = 'en-US'
    recognition.interimResults = false
    recognition.maxAlternatives = 5
    recognition.start()
    recognition.onresult = function(event) {
      var text = event.results[0][0].transcript
      text = text.charAt(0).toUpperCase() + text.slice(1) 

      that.props.onSubmit({
        type: 'text',
        content: text,
      })
    } 

   
    recognition.onend = function() {
      console.log('Speech recognition finished')
      $('.Rec').removeClass('Rec')
    }
  }
}

export default Voice
