// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )
import React from "react";
import * as ReactDOMClient from "react-dom/client";

import reactToWebComponent from "react-to-webcomponent";

import App from "./App";

const WebApp = reactToWebComponent(App, React, ReactDOMClient, {
  dashStyleAttributes: true,
  shadow: true,
});

customElements.define("web-app", WebApp);
