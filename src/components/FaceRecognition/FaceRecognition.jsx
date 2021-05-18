import React from 'react';
import './facerecognition.css';

const FaceRecognition = ({ image, box }) => {
  return (
    <div className="flex justify-center ma">
      <div className="absolute ma4">
        <img id="inputimage" src={image} alt="" width="500px" height="auto" />
        <div
          className="bounding-box"
          style={{
            top: box.top,
            right: box.right,
            bottom: box.bottom,
            left: box.left,
          }}
        ></div>
      </div>
    </div>
  );
};

export default FaceRecognition;
