import React from "react";
import "./styles.css";

export const Portfolio = (props) => {
  const {
    project: { name, images, demo, code, description, technologies },
    latest,
  } = props;
  return (
    <div className='my-container' data-aos='fade-up'>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <h1
          style={{
            textAlign: "center",
            fontSize: "1.3em",
            margin: "0",
            fontFamily: "'Open Sans', sans-serif",
            fontWeight: "700",
          }}
          className='header'>
          {name}
        </h1>
        {latest && <button className='latest-button'>Latest</button>}
      </div>

      <div className='my-caro'>
        <div
          id='carouselExampleIndicators'
          className='carousel slide'
          data-ride='carousel'
          data-interval='2500'>
          <ol className='carousel-indicators'>
            <li
              data-target='#carouselExampleIndicators'
              data-slide-to='0'
              className='active'></li>
            <li data-target='#carouselExampleIndicators' data-slide-to='1'></li>
            <li data-target='#carouselExampleIndicators' data-slide-to='2'></li>
          </ol>
          {console.log("SCREENSIZE:", window.screen.width)}
          <div className='carousel-inner'>
            {images.img1 ? (
              <div
                style={{ padding: "10px 20px 20px 20px" }}
                className='carousel-item active '>
                <img
                  src={
                    window.screen.width <= 480 ? images.mobile1 : images.img1
                  }
                  className='d-block w-100'
                  alt='website screenshot'
                />
              </div>
            ) : null}
            {images.img2 ? (
              <div
                style={{ padding: "10px 20px 20px 20px" }}
                className='carousel-item'>
                <img
                  src={
                    window.screen.width <= 480 ? images.mobile2 : images.img2
                  }
                  className='d-block w-100'
                  alt='website screenshot'
                />
              </div>
            ) : null}
            {images.img3 ? (
              <div
                style={{ padding: "10px 20px 20px 20px" }}
                className='carousel-item'>
                <img
                  src={
                    window.screen.width <= 480 ? images.mobile2 : images.img2
                  }
                  className='d-block w-100'
                  alt='website screenshot'
                />
              </div>
            ) : null}
          </div>
          {/* <a
            className='carousel-control-prev'
            href='#carouselExampleIndicators'
            role='button'
            data-slide='prev'>
            <span
              className='carousel-control-prev-icon'
              aria-hidden='true'></span>
            <span className='sr-only'>Previous</span>
          </a>
          <a
            className='carousel-control-next'
            href='#carouselExampleIndicators'
            role='button'
            data-slide='next'>
            <span
              className='carousel-control-next-icon'
              aria-hidden='true'></span>
            <span className='sr-only'>Next</span>
          </a> */}
        </div>
      </div>
      <div className='project-description'>
        <div className='btn-container'>
          {demo ? (
            <a href={demo} style={{ marginRight: "10px" }} className='btn'>
              Demo
            </a>
          ) : null}
          <a href={code} className='btn'>
            Code
          </a>
        </div>
        <p className='description'>{description}</p>
        <p style={{ fontSize: "16px", color: "#74ccca" }}>Technology Stack:</p>
        <p className='description'>{technologies}</p>
      </div>
    </div>
  );
};
