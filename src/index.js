import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import 'swiper/swiper.scss';
import "Assets/Stylesheets/CSS/global.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from 'Store'
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
