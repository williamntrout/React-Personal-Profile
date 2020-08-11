import React from "react";
import weatherDashboardPic from "../images/WeatherDashboard.png";
import quizGamePic from "../images/QuizGame.png";
import workDayPlannerPic from "../images/WorkDayPlanner.png";
import recipeGeneratorPic from "../images/Project1.png";
import passWordGeneratorPic from "../images/PassWordGenerator.png";
import seattlePic from "../images/Seattle.jpg";

const portDiv = {
  height: "400px",
  width: "325px",
  float: "left",
};

function PortfolioContent() {
  return (
    <div className="container">
      <div className="row d-flex justify-content-center">
        <div className="col-10 col-md-10 col-sm-12 col-xs-12">
          <div
            id="content-card"
            className="card border-dark"
            style={{
              marginBottom: "3rem",
              borderRadius: ".25rem",
              backgroundColor: "#d9d9d9",
              height: "calc(100vh - 254px)",
              marginTop: "10px",
              overflowY: "scroll",
            }}
          >
            <div className="card-body">
              <h1>Portfolio</h1>
              <hr></hr>
              <div className="row">
                <div className="col">
                  <div
                    id="portfolio-div"
                    style={{
                      height: "calc(100vh - 380px)",
                      overflowY: "scroll",
                    }}
                  >
                    <div
                      className="card mr-5 ml-5 mb-5 border-dark"
                      style={portDiv}
                    >
                      <h3 style={{ textAlign: "center" }}>Weather Dashboard</h3>
                      <img
                        src={weatherDashboardPic}
                        className="card-img-top image-fluid"
                        alt="Weather Dashboard Application"
                      />
                      <div className="card-body">
                        <p className="card-text">
                          Basic web application built for practice exorcise to
                          demonstrate the retrieval and use of Server Side API
                          data.{" "}
                        </p>
                        <a
                          type="button"
                          className="btn btn-block btn-dark"
                          href="https://williamntrout.github.io/weatherdashboard/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Go To App
                        </a>
                      </div>
                    </div>

                    <div
                      className="card mr-5 ml-5 mb-5 border-dark"
                      style={portDiv}
                    >
                      <h3 style={{ textAlign: "center" }}>Quiz Game</h3>
                      <img
                        src={quizGamePic}
                        className="card-img-top image-fluid"
                        alt="Weather Dashboard Application"
                      />
                      <div className="card-body">
                        <p className="card-text">
                          Web application built for BOOTCAMP class exorcise to
                          demonstrate the use of WEB APIs.{" "}
                        </p>
                        <a
                          type="button"
                          className="btn btn-block btn-dark"
                          href="https://williamntrout.github.io/JavasScriptQuizHomework/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Go To App
                        </a>
                      </div>
                    </div>

                    <div
                      className="card mr-5 ml-5 mb-5 border-dark"
                      style={portDiv}
                    >
                      <h3 style={{ textAlign: "center" }}>Work Day Planner</h3>
                      <img
                        src={workDayPlannerPic}
                        className="card-img-top image-fluid"
                        alt="Weather Dashboard Application"
                      />
                      <div className="card-body">
                        <p className="card-text">
                          Web application built for BOOTCAMP exorcise to
                          demonstrate the use of THIRD PARTY APIs.{" "}
                        </p>
                        <a
                          type="button"
                          className="btn btn-block btn-dark"
                          href="https://williamntrout.github.io/workdayplanner/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Go To App
                        </a>
                      </div>
                    </div>

                    <div
                      className="card mr-5 ml-5 mb-5 border-dark"
                      style={portDiv}
                    >
                      <h3 style={{ textAlign: "center" }}>Recipe Generator</h3>
                      <img
                        src={recipeGeneratorPic}
                        className="card-img-top image-fluid"
                        alt="Weather Dashboard Application"
                      />
                      <div className="card-body">
                        <p className="card-text">
                          Collaborative project, bringing together principles
                          from BOOTSTRAP, JAVASCRIPT, and API usage.{" "}
                        </p>
                        <a
                          type="button"
                          className="btn btn-block btn-dark"
                          href="https://williamntrout.github.io/project-1-refrigerator-companion/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Go To App
                        </a>
                      </div>
                    </div>

                    <div
                      className="card mr-5 ml-5 mb-5 border-dark"
                      style={portDiv}
                    >
                      <h3 style={{ textAlign: "center" }}>
                        Password Generator
                      </h3>
                      <img
                        src={passWordGeneratorPic}
                        className="card-img-top image-fluid"
                        alt="Weather Dashboard Application"
                      />
                      <div className="card-body">
                        <p className="card-text">
                          Web application from a class exorcise to demonstrate
                          the principles of basic JAVASCRIPT.{" "}
                        </p>
                        <a
                          type="button"
                          className="btn btn-block btn-dark"
                          href="https://williamntrout.github.io/Password_Generator_Javascript_Exorcise/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Go To App
                        </a>
                      </div>
                    </div>

                    <div
                      className="card mr-5 ml-5 mb-5 border-dark"
                      style={portDiv}
                    >
                      <img
                        src={seattlePic}
                        className="card-img-top image-fluid"
                        alt="Seattle"
                      />
                      <div className="card-body">
                        <p className="card-text">
                          Space Needle, built as an example of futuristic
                          housing for the worlds fair, proudly flies the 12 of
                          seattle flag to honor Seahawks' fans.
                        </p>
                        <button type="button" class="btn btn-block btn-dark">
                          Go To App
                        </button>
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
