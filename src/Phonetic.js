import React from "react";

export default function Phonetic(props) {
  if (props.phonetic.text) {
    return (
      <div className="Phonetic">
        <a href={props.phonetic.audio} target="_blank" className="btn ">
          🔊
        </a>
        {props.phonetic.text}
      </div>
    );
  } else {
    return null;
  }
}
