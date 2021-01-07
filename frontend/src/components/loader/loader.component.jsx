import React from 'react';
import Loader from 'react-loader-spinner';

import "./loader.style.css";

export const LoaderLarge = () => (
  <div className="loader">
    <Loader type="ThreeDots" color="#0069c0" height={200} width={200} />
  </div>
);

