import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './store';
import { CloudinaryContext } from 'cloudinary-react';
import cloudinary from 'cloudinary-core';

import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App';

const cloudinaryCore = new cloudinary.Cloudinary({
  cloud_name: "dow3uveay",
});
cloudinaryCore.config({
  cloud_name: "dow3uveay",
  api_key: "846356384699812",
  api_secret: "PE-nnuCyH970woTcx4Cu5hZymyw",
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <CloudinaryContext cloudinary={cloudinaryCore}>
      <App />
    </CloudinaryContext>
  </Provider>
);
