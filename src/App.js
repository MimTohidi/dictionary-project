import Dictionary from "./Dictionary";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Dictionary defaultKeyword="sunset" />
        <footer>
          This project was coded by{" "}
          <a href="mailto:mim.tohidi@gmail.com">Mim Tohidi</a> and is
          open-sourced on{" "}
          <a
            href="https://github.com/MimTohidi/dictionary-project"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          .
        </footer>
      </div>
    </div>
  );
}

export default App;
