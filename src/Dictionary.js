import React, { useState } from "react";
import Results from "./Results";
import Photos from "./Photos";
import axios from "axios";

import "./Dictionary.css";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function handlePexelesResponse(response) {
    setPhotos(response.data.photos);
  }

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
    let pexelesApiKey =
      "563492ad6f91700001000001b3ba3482848e484eb4d21d01e8de9cad";
    let pexelesApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
    let headers = { Authorization: `Bearer ${pexelesApiKey}` };
    axios.get(pexelesApiUrl, { headers: headers }).then(handlePexelesResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function updateKeyword(event) {
    setKeyword(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }
  if (loaded) {
    return (
      <div className="Dictionary">
        <div className="row">
          <div className="col-lg-6">
            <section>
              {" "}
              <form onSubmit={handleSubmit}>
                <input
                  type="search"
                  onChange={updateKeyword}
                  placeholder="What word do you want to look up?"
                />
              </form>
            </section>

            <Results results={results} />
          </div>
          <div className="col-lg-6">
            <Photos photos={photos} />
          </div>
        </div>
      </div>
    );
  } else {
    load();
    return null;
  }
}
