import React from 'react';
import pic1 from './../../Images/Weather.png';
import pic2 from './../../Images/Weather1.png';
import "./styles.css";
import AbsoluteWrapper from "./../AbsoluteWrapper";
import { Link } from 'react-router-dom';

export const Portfolio = props => {
  return (
    <AbsoluteWrapper>
    <div style={{backgroundColor: "#f4f4f4", width: "100vw", height:"100vh"}}>
        <Link className="exit" to="/">x</Link>
      <div className="my-caro">
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel" data-interval="2500">
            <ol className="carousel-indicators">
              <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={pic1} className="d-block w-100" alt="website screenshot" />
              </div>
              <div className="carousel-item">
                <img src={pic2} className="d-block w-100" alt="website screenshot" />
              </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
          <div>
            <h1 className="header">
              {props.header}
            </h1>
            <p className="description">
              {props.description}
            </p>
          </div>
      </div>
    </div>
    </AbsoluteWrapper>
  );
}