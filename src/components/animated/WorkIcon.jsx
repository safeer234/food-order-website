import React from "react";

function WorkIcon() {
  const iconHtml = `
    <animated-icons
      src="https://animatedicons.co/get-icon?name=Pizza&style=minimalistic&token=6a7f09d5-7db4-4426-a9be-a41aae69bfc0"
      trigger="loop"
      attributes='{"variationThumbColour":"#536DFE","variationName":"Two Tone","variationNumber":2,"numberOfGroups":2,"backgroundIsGroup":false,"strokeWidth":1,"defaultColours":{"group-1":"#000000","group-2":"#536DFE","background":"#FFFFFF"}}'
      height="200"
      width="200"
    ></animated-icons>
  `;

  return <div dangerouslySetInnerHTML={{ __html: iconHtml }} />;
}

export default WorkIcon;
