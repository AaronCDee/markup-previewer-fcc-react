import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { directive, tsImportEqualsDeclaration } from "@babel/types";
import { marked } from "marked";
import {
  BsFillDashCircleFill,
  BsFillXCircleFill,
  BsFillArrowUpRightCircleFill,
} from "react-icons/bs";
marked.setOptions({
  renderer: new marked.Renderer(),
  pedantic: false,
  gfm: true,
  tables: true,
  breaks: false,
  sanitize: true,
  smartypants: false,
  xhtml: true,
});
// console.log(marked.parse("## Hello World"))

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <textarea>
//           This is a sample textarea
//         </textarea>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      textInput: "## Hello World",
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(currentTextInput) {
    console.log(currentTextInput);
    this.setState({
      textInput: currentTextInput,
    });
  }
  render() {
    console.log(this.state.textInput);
    return (
      <div id="app-container">
        <div className="Markdown-previewer">
          <Editor
            currentTextInput={this.state.textInput}
            onInputChange={this.handleInputChange}
          />
          <Previewer textToFormat={this.state.textInput} />
        </div>
      </div>
    );
  }
}

class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    console.log(e.target.value);
    this.props.onInputChange(e.target.value);
  }
  render() {
    return (
      <div id="editor" className="Border-box">
        <div id="editor-bar" className="Nav-bar">
          <div className="Window-buttons">
            <BsFillXCircleFill className="Close-button" />
            <BsFillDashCircleFill className="Min-button" />
            <BsFillArrowUpRightCircleFill className="Exp-button" />
          </div>
          <div id="editor-header">
            <span>Editor</span>
          </div>
        </div>
        <textarea
          className="Contents Editor"
          defaultValue={this.props.currentTextInput}
          onChange={this.handleChange}
        ></textarea>
      </div>
    );
  }
}

class Previewer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.textToFormat);
    return (
      <div id="preview-container" className="Border-box">
        <div id="previewer-bar" className="Nav-bar">
          <div className="Window-buttons">
            <BsFillXCircleFill className="Close-button" />
            <BsFillDashCircleFill className="Min-button" />
            <BsFillArrowUpRightCircleFill className="Exp-button" />
          </div>
          <div id="preview-header">
            <span>Previewer</span>
          </div>
        </div>
        <div
          className="Contents"
          dangerouslySetInnerHTML={{ __html: marked(this.props.textToFormat) }}
        />
      </div>
    );
  }
}

export default App;
