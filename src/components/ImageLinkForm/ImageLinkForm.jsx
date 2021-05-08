import React from "react";
import "./imagelinkform.css";

const ImageLinkForm = ({ onInputChange, onSubmit }) => {
  return (
    <div>
      <p className="f3 tc mt3">
        {"This Magic Brain will detect faces in your pictures. Give it a try"}
      </p>
      <div className="flex justify-center items-center">
        <div className="pa4 br3 shadow-5 form">
          <input
            className="f4 pa2 w-75 center"
            type="text"
            name=""
            id=""
            onChange={onInputChange}
          />
          <button
            className="w-25 grow f4 link ph2 pv2 dib white bg-light-purple"
            onClick={onSubmit}
          >
            Detect
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageLinkForm;
