import React from "react";

function OrderPlaced() {
  const iconHtml = `
    <animated-icons
      src="https://animatedicons.co/get-icon?name=Success&style=minimalistic&token=2cb0da6b-0dad-4d02-8599-79b76c0333fb"
      trigger="loop"
      attributes='{"variationThumbColour":"#536DFE","variationName":"Two Tone","variationNumber":2,"numberOfGroups":2,"backgroundIsGroup":false,"strokeWidth":1,"defaultColours":{"group-1":"#000000","group-2":"#536DFE","background":"#FFFFFF"}}'
      height="200"
      width="200"
    ></animated-icons>
  `;

  return <div dangerouslySetInnerHTML={{ __html: iconHtml }} />;
}

export default OrderPlaced;
