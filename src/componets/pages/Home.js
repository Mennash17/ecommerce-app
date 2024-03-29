import React from 'react'
import Slider from './../Slider';
import Footer from './../Footer.js';
import Products from "./../Products.js";
import { useParams } from 'react-router-dom';

function Home(props) {
  // console.log(useParams);
  const {onAdd} = props;
  // console.log(props);
  // console.log(onAdd);
  return (
    <>
      <Slider />

      <Products onAdd={onAdd} />
      <Footer />
    </>
  );
}

export default Home