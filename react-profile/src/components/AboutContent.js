import React from "./node_modules/react";
import { Link } from "./node_modules/react-router-dom";

function AboutContent() {
  return (
    <div className="container">
      <content className="row d-flex justify-content-center">
        <content className="col-10 col-md-10 col-sm-12 col-xs-12">
          <div className="card border-dark" style="margin: 1rem">
            <div
              className="card-body rounded"
              style="background-color:#D9D9D9;"
            >
              <h3>About Me</h3>
              <hr></hr>
              <div id="about-content">
                <p className="float-left">
                  <img
                    src="./assets/WIlliamntrout.jpg"
                    className="image-fluid float-left rounded"
                    alt="responsive image"
                    style="max-width: 300px; margin-left: 40px; margin-right: 40px; margin-top: 10px"
                  />
                  <ul>
                    Though I currently reside in the midwest, I am far from a
                    Kansas City native. As a matter of fact, though I call
                    Seattle my home, I can hardly be called a "native" of any
                    one place. I come from a military family that moved around
                    the globe on a fairly regular basis.
                  </ul>
                  <ul>
                    Many people think I am exaggerating about the number of
                    times I have moved when the first here me say it. However,
                    once they hear teh details, they quickly put me in the
                    "nomad" category. I personally have never lived in a
                    residence longer than two years my entire life. If we are
                    being honest, I cannot ever count the number of addresses I
                    have had. Even when did stay in one place for any period of
                    time, we moved houses almost annually.
                  </ul>
                  <ul>
                    This all seemed natural to me as I come from a family with a
                    long military tradition. In fact my son, 1LT WIlliam Trout,
                    is a sixth generation soldier in the US Army. We often make
                    the joke that the Army is our family business. At one point
                    my father, his sister, her daughter, my sister, and myself
                    were all serving at the same time.
                  </ul>
                  <ul>
                    Luckily this type of life experience has molded me into a
                    person who is flexible, dedicated, adaptive, and open to
                    change. I neither run from change or shy away from adversity
                    regardless of situation. Hence the reason I am participating
                    in this program. Technology, and the internet in particular,
                    has cost me several jobs over the years. I finally just
                    decided to get on top of that wave rather than have it crash
                    over me again.
                  </ul>
                  <br></br>
                </p>
              </div>
            </div>
          </div>
        </content>
      </content>
    </div>
  );
}

export default AboutContent;
