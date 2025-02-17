import React from 'react';

const AR = () => {
  return (
    <div>
      <h1>Augmented Reality and Spatial Computing</h1>
      <div>I am currently developing two prototypes for the Vision Pro, using Xcode, Reality Composer Pro, Swift, and SwiftUI. One of which I plan to deploy to the Apple Store this year.</div>
      <div><p>I previously made an AR App for Botanic Gardens in Belfast. It recognises various landmarks at the park such as the statue of Kelvin, Sculptures and the Bandstands and displays information about them beside the landmark and some of them also trigger audio.</p></div>
      <img
          src="https://ik.imagekit.io/dgmfafxequ/Dev/tr:w-700/botanic_LiZ8mGTkU.jpg"
          alt="Botanic AR"
          srcSet="
            https://ik.imagekit.io/dgmfafxequ/Dev/tr:w-330/botanic_LiZ8mGTkU.jpg 330w,
            https://ik.imagekit.io/dgmfafxequ/Dev/tr:w-700/botanic_LiZ8mGTkU.jpg 700w,
            https://ik.imagekit.io/dgmfafxequ/Dev/tr:w-1000/botanic_LiZ8mGTkU.jpg 950w
          "
          sizes="(max-width: 950px) 330px, 700px"
        />
    </div>
  );
};

export default AR;
