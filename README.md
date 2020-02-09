This Readme focuses on custom Webchat Features built at Solution Experience. For any other info on webchat refer https://github.com/RecastAI/Webchat

## Compatibility

To use all the custom features use the lastest Chrome browser.

## Installation

Clone the repository you forked, and install the dependencies.

```
$> git clone YOUR_REPO_URL
$> cd webchat
$> npm install
```

#### Run in development mode

```
$> npm run start
```

#### Eslint + prettier

```
$> npm run prettier
```

#### Build for production

```
$> npm run build
```

## Including webchat in your app:

Once the project is built the webchat.js file can be found at dist/webchat.js
Include the webchat.js as shown below. There are 3 custom attributes added to the script tag to toggle custom features on/off.Desription and usage of these attributes followin the next sub section.


```
<body>
    <p>There is a webchat somewhere</p>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script src="your-directory/webchat.js" channelId="your channel id" token="your token"
        id="recast-webchat" fileDrop="true" voice="true" clearButton="true"></script>
</body>

```

The following chatbot should appear once all custom attributes are set to true.

<div align="center">
  <img src="assets/custombot.png" />
</div>


#### Sript Tag Custom Attributes

| Name           | Type     | Required | Description                                                               |
| -------------- | -------- | -------- | ------------------------------------------------------------------------- |
| fileDrop       | Boolean  | Yes      | This toggles the file upload and file drag and drop feature.              |
| voice          | Boolean  | Yes      | This toggles the voice (SpeechToText and TextToSpeech) and mute features. |
| clearButton    | Boolean  | Yes      | This toggles the clear button in the header                               |

## Features

#### File Upload and File Drag/Drop - Images Only

On enabling this feature the images can be dropped on the webchat window or could also uploaded the image by clicking the image button on the lower right corner of the webchat window. The images are uploaded to the following document repository: https://recastdocurepocorsdcinnovation.hana.ondemand.com/

Disabling this feature removes the picture/file upload button from the webchat and also doesn't allow any drag and drop.

#### Voice

On enabling this feature SpeechToText and TextToSpeech enabled. To talk click on the microphone icon on the lower right corner of the webchat window. A mute/unmute button also becomes visible on the header which can toggle TextToSpeech (i.e the chatbot talking back on or off). Mute preference is saved in local storage.

Disabling this feature removes the microphone and the mute/unmute button from the webchat.

#### ClearButton

On enabling this feature a clear button appears on the webchat header this clears the entire chat window. This button is used to conveniently demo different scenarios conveniently without having to reload the app. 

Disabling this feature removes the clear button from the header
