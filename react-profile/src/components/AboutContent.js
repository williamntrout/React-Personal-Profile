import React from "react";
import profilePic from "../images/williamntrout.jpg";

function AboutContent() {
  return (
    <div className="container">
      <content className="row d-flex justify-content-center">
        <content className="col-10 col-md-10 col-sm-12 col-xs-12">
          <div className="card border-dark" style={{ margin: "1rem" }}>
            <div
              className="card-body rounded"
              style={{ backgroundColor: "#D9D9D9" }}
            >
              <h3>About Me</h3>
              <hr></hr>
              <div
                id="about-content"
                style={{
                  height: "calc(100vh - 360px)",
                  marginTop: "10px",
                  overflowY: "scroll",
                }}
              >
                <div className="float-left">
                  <img
                    src={profilePic}
                    className="image-fluid float-left rounded"
                    alt="William Trout"
                    style={{
                      maxWidth: "300px",
                      marginLeft: "40px",
                      marginRight: "40px",
                      marginTop: "10px",
                    }}
                  />
                  <p>
                    Although I reside in the midwest, I am far from a Kansas
                    City native, I call Seattle home. Even at that, I can hardly
                    be called a "native" of any one place. I come from a
                    military family that moved around the globe on a fairly
                    regular basis.
                  </p>
                  <p>
                    Many people think I am exaggerating about the number of
                    times I have moved until they see the timeline. Upon hearing
                    the details, they quickly put me in the "nomad" category. I
                    personally have never lived in a residence longer than two
                    years and I cannot even count the number of addresses I have
                    had in my life.
                  </p>
                  <p>
                    This all seemed natural to me as I come from a family with a
                    long military tradition. In fact my son, 1LT WIlliam Trout,
                    is a sixth generation soldier in the US Army. We often make
                    the joke that the Army is our family business. At one point
                    my father, his sister, her daughter, my sister, and myself
                    were all serving at the same time.
                  </p>
                  <p>
                    Luckily this type of life experience has molded me into a
                    person who is flexible, dedicated, adaptive, and open to
                    change. I neither run from change or shy away from adversity
                    regardless of situation. Hence the reason I am participating
                    in this program. Technology, the internet in particular, has
                    cost me several jobs over the years. I finally just decided
                    to get on top of that wave rather than have it crash over me
                    again.
                  </p>
                  <br></br>
                </div>
              </div>
            </div>
          </div>
        </content>
      </content>
    </div>
  );
}

export default AboutContent;
