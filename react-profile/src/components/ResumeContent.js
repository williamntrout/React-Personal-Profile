import React from "react";
import currentResume from "../images/wtresume.pdf";

function ResumeContent() {
  return (
    <div className="container">
      <content className="row d-flex justify-content-center">
        <content className="col-10 col-md-10 col-sm-12 col-xs-12">
          <div
            id="content-card"
            className="card border-dark"
            style={{
              height: "calc(100vh - 240px)",
              marginTop: "10px",
              marginBottom: "10px",
            }}
          >
            <div
              className="card-body rounded"
              style={{ backgroundColor: "#D9D9D9" }}
            >
              <h3>Resume</h3>
              <hr></hr>
              <div className="d-flex justify-content-center">
                <object
                  data={currentResume}
                  type="application/pdf"
                  width="800px"
                  height="450px"
                >
                  ResumePDF
                </object>
              </div>
            </div>
          </div>
        </content>
      </content>
    </div>
  );
}

export default ResumeContent;
