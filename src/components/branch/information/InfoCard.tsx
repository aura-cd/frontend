import React from "react";
import "./info.scss";
import InfoCard from "./InfoCard";
import EditorArea from "./EditorArea";
const InformationContents = () => {
  return (
    <div className='cardContainer'>
      <div className='cardList'>
        <div className='row-cardContainer'>
          <h4>Image</h4>
          <h3>slslslx</h3>
        </div>

        <div className='row-cardContainer'>
          <h4>Health</h4>
          <h3>slslslx</h3>
        </div>

        <div className='row-cardContainer'>
          <h4>Age</h4>
          <h3>slslslx</h3>
        </div>
      </div>

      <div>
        <div>bar</div>
        <div>bar</div>
        <div>bar</div>
      </div>
    </div>
  );
};

export default InformationContents;
