import React from 'react';
import "./styles.css";
import AbsoluteWrapper from "./../AbsoluteWrapper";
import { HashLink as Link } from 'react-router-hash-link';

export const Portfolio = props => {
  const { project } = props;
  return (
    <AbsoluteWrapper>
      <div className="my-container">
        <div className="my-caro">
          <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel" data-interval="2500">
              <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
              </ol>
              <div className="carousel-inner">
                { project.images.img1 ? <div className="carousel-item active">
                  <img src={project.images.img1} className="d-block w-100" alt="website screenshot" />
                </div> : null}
                { project.images.img2 ? <div className="carousel-item">
                  <img src={project.images.img2} className="d-block w-100" alt="website screenshot" />
                </div> : null}
                { project.images.img3 ? <div className="carousel-item">
                  <img src={project.images.img3} className="d-block w-100" alt="website screenshot" />
                </div> : null}
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
        </div>
            <div className="project-description">
              <h1 className="header">
                {project.name}
              </h1>
              <p className="description">
                {project.description}
              </p>
              <p className="description">
                {project.technologies}
              </p>
              <div className="btn-container">
                { project.demo ? <a href={project.demo} className="btn">Demo</a> : null}
                <a href={project.code} className="btn">Code</a>
              </div>
              <Link className="exit" to="/#projects"><i class="fas fa-long-arrow-alt-left"></i></Link>
            </div>
      </div>
    </AbsoluteWrapper>
  );
}