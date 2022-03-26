import React from "react";

import "./Phonetic.css";

export default function Phonetic(props) {
  return (
    <div className="Phonetic mb-3">
      <a
        href={props.phonetic.audio}
        target="_blank"
        className="btn "
        rel="noreferrer"
      >
        🔊
      </a>
      <span className="text">{props.phonetic.text}</span>
    </div>
  );
}
