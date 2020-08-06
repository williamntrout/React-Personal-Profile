import React from "./node_modules/react";
import { Link } from "./node_modules/react-router-dom";

function PortfolioContent() {
  return (
    <div className="container">
      <div className="row d-flex justify-div-center">
        <div className="col-10 col-md-10 col-sm-12 col-xs-12">
          <div
            id="div-card"
            className="card border-dark"
            style="margin-top: 1rem; margin-bottom: 3rem; border-radius: .25rem; background-color: #d9d9d9;"
          >
            <div className="card-body">
              <h1>Portfolio</h1>
              <hr></hr>
              <div className="row">
                <div className="col">
                  <div id="portfolio-div">
                    <div
                      className="card mr-5 ml-5 mb-5 border-dark"
                      style="max-width: 310px; float: left;"
                    >
                      <a
                        className="btn btn-dark btn-lrg"
                        href="https://williamntrout.github.io/weatherdashboard/"
                        target="_blank"
                      >
                        Weather Dashboard
                      </a>
                      <img
                        src="./assets/Quiz Game.png"
                        className="card-img-top image-fluid"
                        alt="Weather Dashboard Application"
                      />
                      <div className="card-body">
                        <p className="card-text">
                          Basic web application built for className exorcise to
                          demonstrate the retrieval and use of Server Side API
                          data.{" "}
                        </p>
                      </div>
                    </div>
                    <div
                      className="card mr-5 ml-5 mb-5 border-dark"
                      style="max-width: 310px; float: left;"
                    >
                      <a
                        className="btn btn-dark btn-lrg"
                        href="https://williamntrout.github.io/JavasScriptQuizHomework/"
                        target="_blank"
                      >
                        Quiz Game
                      </a>
                      <img
                        src="./assets/Quiz Game.png"
                        className="card-img-top image-fluid"
                        alt="Quiz Application"
                      />
                      <div className="card-body">
                        <p className="card-text">
                          Web application built for BOOTCAMP className exorcise
                          to demonstrate the use of WEB APIs.
                        </p>
                      </div>
                    </div>
                    <div
                      className="card mr-5 ml-5 mb-5 border-dark"
                      style="max-width: 310px; float: left;"
                    >
                      <a
                        className="btn btn-dark btn-lrg"
                        href="https://williamntrout.github.io/workdayplanner/"
                        target="_blank"
                      >
                        Day Planner
                      </a>
                      <img
                        src="./assets/workdayplanner.png"
                        className="card-img-top image-fluid"
                        alt="Workday Planner Application"
                      />
                      <div className="card-body">
                        <p className="card-text">
                          Web application built for BOOTCAMP className exorcise
                          to demonstrate the use of THIRD PARTY APIs.
                        </p>
                      </div>
                    </div>
                    <div
                      className="card mr-5 ml-5 mb-5 border-dark"
                      style="max-width: 310px; float: left;"
                    >
                      <a
                        className="btn btn-dark btn-lrg"
                        href="https://williamntrout.github.io/project-1-refrigerator-companion/"
                        target="_blank"
                      >
                        Recipe Generator
                      </a>
                      <img
                        src="./assets/Project 1.png"
                        className="card-img-top image-fluid"
                        alt="Recipe Application"
                      />
                      <div className="card-body">
                        <p className="card-text">
                          Collaborative project, bringing together principles
                          from BOOTSTRAP, JAVASCRIPT, and API usage.
                        </p>
                      </div>
                    </div>
                    <div
                      className="card mr-5 ml-5 mb-5 border-dark"
                      style="max-width: 310px; float: left;"
                    >
                      <a
                        className="btn btn-dark btn-lrg"
                        href="https://williamntrout.github.io/Password_Generator_Javascript_Exorcise/"
                        target="_blank"
                      >
                        Password Generator
                      </a>
                      <img
                        src="./assets/PassWordGenerator.png"
                        className="card-img-top image-fluid"
                        alt="Password Generator Application"
                      />
                      <div className="card-body">
                        <p className="card-text">
                          Web application built for className exorcise to
                          demonstrate the principles of basic JAVASCRIPT.
                        </p>
                      </div>
                    </div>
                    <div
                      className="card mr-5 ml-5 mb-5 border-dark"
                      style="max-width: 310px; float: left;"
                    >
                      <img
                        src="./assets/Seattle.JPG"
                        className="card-img-top image-fluid"
                        alt="Seattle"
                      />
                      <div className="card-body">
                        <p className="card-text">
                          Space Needle, built as an example of futuristic
                          housing for the worlds fair, proudly flies the 12 of
                          seattle flag to honor Seahawks' fans.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PortfolioContent;
