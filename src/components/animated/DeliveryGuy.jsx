import React from 'react'

function DeliveryGuy() {
const iconHtml = `
    <animated-icons
      src="https://animatedicons.co/get-icon?name=Running%20Person&style=minimalistic&token=f6cc1292-1aa7-4566-89b2-c5bfa23de4b6"
      trigger="loop"
      attributes='{"variationThumbColour":"#536DFE","variationName":"Two Tone","variationNumber":2,"numberOfGroups":2,"backgroundIsGroup":false,"strokeWidth":1,"defaultColours":{"group-1":"#000000","group-2":"#536DFE","background":"#FFFFFF"}}'
      height="200"
      width="200"
    ></animated-icons>
  `;

  return <div dangerouslySetInnerHTML={{ __html: iconHtml }} />;
}

export default DeliveryGuy
