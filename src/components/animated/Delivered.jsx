import React from 'react'

function Delivered() {
 const iconHtml = `
    <animated-icons
      src="https://animatedicons.co/get-icon?name=burger&style=minimalistic&token=47637f66-7e82-4034-bf34-15639cff65ae"
      trigger="loop"
      attributes='{"variationThumbColour":"#536DFE","variationName":"Two Tone","variationNumber":2,"numberOfGroups":2,"backgroundIsGroup":false,"strokeWidth":1,"defaultColours":{"group-1":"#000000","group-2":"#536DFE","background":"#FFFFFF"}}'
      height="200"
      width="200"
    ></animated-icons>
  `;

  return <div dangerouslySetInnerHTML={{ __html: iconHtml }} />;
}

export default Delivered
