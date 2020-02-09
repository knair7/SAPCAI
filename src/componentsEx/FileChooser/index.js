import React, { Component } from 'react'
import './style.scss'

const fileUploadURL = ''
class FileChooser extends Component {
  state = {}
  render() {
    return (
      <div className="file-chooser-container">
        <input
          className="hidden-file-input"
          accept="image/*"
          type="file"
          onChange={this.onChange}
        />
        <button className="file-chooser-button" onClick={this.onClick}>
          <img
            className="file-chooser-button-image"
            src="https://recastimages-sdcinnovation.dispatcher.hana.ondemand.com/file.png"
          />
        </button>
      </div>
    )
  }

  onClick = evt => {
    $('.hidden-file-input').click()
  }

  onChange = evt => {
    var that = this
    evt = evt || event
    evt.preventDefault()
    let dataTransferItemsList = []
    if (evt.dataTransfer) {
      const dt = evt.dataTransfer
      if (dt.files && dt.files.length) {
        dataTransferItemsList = dt.files
      } else if (dt.items && dt.items.length) {
        // During the drag even the dataTransfer.files is null
        // but Chrome implements some drag store, which is accesible via dataTransfer.items
        dataTransferItemsList = dt.items
      }
    } else if (evt.target && evt.target.files) {
      dataTransferItemsList = evt.target.files
    }

    var messageContainer = document.getElementsByClassName('RecastAppLive--message-container')[0]
    var div = document.createElement('div')
    div.className = 'RecastAppMessageContainer user solexp-imageLoading'
    div.innerHTML =
      '<div class="RecastAppMessage user"><img class="RecastAppMessage--logo visible" src="https://cdn.recast.ai/webchat/user.png"><div class="solexp-RecastAppImageContainer"><div class="solexp-Loader"></div><img class="solexp-RecastAppImage" style="width:15rem; height:auto; filter: grayscale(100%); border: 4px solid #f6f6f6;"></img></div></div>'

    var botDiv = document.createElement('div')
    botDiv.className = 'RecastAppMessageContainer bot solexp-botLoading'
    botDiv.innerHTML =
      '<div class="RecastAppMessage bot"><img class="RecastAppMessage--logo visible" src="https://cdn.recast.ai/webchat/bot.png"><img src="https://cdn.recast.ai/webchat/istyping.gif"></div>'

    messageContainer.append(div)

    let reader = new FileReader()
    var img, loader
    reader.readAsDataURL(dataTransferItemsList[0])
    reader.onloadend = function() {
      document.getElementsByClassName('RecastAppChat-FileDrop')[0].style.background = 'transparent'

      img = document.getElementsByClassName('solexp-RecastAppImage')[0]
      img.src = reader.result
      img.className = ''

      loader = img.previousSibling
      loader.style.display = 'block'

      var objDiv = document.getElementsByClassName('RecastAppLive')[0]
      objDiv.scrollTop = objDiv.scrollHeight
    }

    var timestamp = new Date()
    var re = /(?:\.([^.]+))?$/
    var filename = timestamp.getTime() + '.' + re.exec(dataTransferItemsList[0].name)[1]

    var form = new FormData()
    form.append('file', dataTransferItemsList[0], filename)

    var xhr = new XMLHttpRequest()

    var settings = {
      async: true,
      crossDomain: true,
      url: 'https://recastdocurepocorsdcinnovation.hana.ondemand.com/api/recast/my-bot-app/images',
      method: 'POST',
      headers: {
        Authorization: 'Basic ZGVtbzpXZWxjb21lQDEyMw==',
      },
      processData: false,
      contentType: false,
      mimeType: 'multipart/form-data',
      data: form,
      success: function(data) {
        setTimeout(function() {
          img.style.filter = 'unset'
          loader.style.display = 'none'

          var objDiv = document.getElementsByClassName('RecastAppLive')[0]
          objDiv.scrollTop = objDiv.scrollHeight

          var fileUploadURL =
            'https://recastdocurepocorsdcinnovation.hana.ondemand.com/public/recast/my-bot-app/images/' +
            filename
          console.log('File Upload URL : ' + fileUploadURL)

          //Use Picture as Picture i.e send file URL to Recast
          that.props.onSubmit({
            type: 'picture',
            content: fileUploadURL,
          })
        }, 3000)
      },
    }

    $.ajax(settings)
  }
}

export default FileChooser
