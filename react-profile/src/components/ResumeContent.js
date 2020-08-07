import React from "react";
import { Link } from "react-router-dom";

function ResumeContent() {
  return (
    <div className="container">
      <content className="row d-flex justify-content-center">
        <content className="col-10 col-md-10 col-sm-12 col-xs-12">
          <div
            id="content-card"
            className="card border-dark"
            style="margin: 1rem"
          >
            <div
              className="card-body rounded"
              style="background-color:#D9D9D9;"
            >
              <h3>Resume</h3>
              <hr></hr>
              <object
                data="./assets/wtresume.pdf"
                type="application/pdf"
                width="800px"
                height="450px"
              ></object>
            </div>
          </div>
        </content>
      </content>
    </div>
  );
}

export default ResumeContent;
