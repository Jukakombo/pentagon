import React from "react";
import image4 from "./../../../images/addmission/svgLogo.png";
// import bg19 from "./../../../images/addmission/watermark.png";
function Form() {
  return (
    <>
      <div
        className="section-full p-tb15 our-support content-inner-2"
        // style={{
        //   backgroundImage: "url(" + bg19 + ")",
        //   backgroundRepeat: "no-repeat",
        //   backgroundSize: "100%",
        //   backgroundPosition: "bottom",
        // }}
      >
        <div className="form_all">
          <div
            className="col-lg-10 col-md-12 m-b30 about-img "
            style={{ textAlign: "center" }}
          >
            <img
              src={image4}
              data-tilt
              alt="Admision_Form"
              style={{ flex: "1" }}
            />
          </div>
          <div className="form__head">
            <p>Class:form one, two, three and four </p>
            <p>Admission number: ................... </p>
          </div>
          <form style={{ padding: "10px 10px" }}>
            <div class="row">
              <div className="col">
                <label for="exampleInputEmail1">Applicant First Name</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="First name"
                  value=""
                  name=""
                  required
                />
              </div>
              <div className="col">
                <label for="exampleInputEmail1">Middle Name</label>

                <input
                  type="text"
                  class="form-control"
                  placeholder="Middle name"
                  value=""
                  name=""
                  required
                />
              </div>
              <div className="col">
                <label for="exampleInputEmail1">Last Name</label>
                <input
                  type="text"
                  class="form-control"
                  value=""
                  name=""
                  required
                  placeholder="Last name"
                />
              </div>
            </div>
            <div class="form-group">
              <label for="exampleInputEmail1">Gender</label>
              <select
                type="text"
                value=""
                name=""
                required
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              >
                <option>Male</option>
                <option>Female</option>
              </select>
            </div>
            <div className="row">
              <div className="col">
                <label for="exampleInputEmail1">Nationality</label>
                <input
                  type="text"
                  value=""
                  name=""
                  required
                  class="form-control"
                  placeholder="Nationality"
                />
              </div>
              <div className="col">
                <label for="exampleInputEmail1">Language</label>
                <input
                  type="text"
                  value=""
                  name=""
                  required
                  class="form-control"
                  placeholder="Language"
                />
              </div>
            </div>
            <div className="row">
              <div className="col">
                <label for="exampleInputEmail1">Class Applying for:</label>
                <input
                  value=""
                  name=""
                  required
                  type="text"
                  class="form-control"
                  placeholder="Class Applying for"
                />
              </div>
              <div className="col">
                <label for="exampleInputEmail1">Previous Class:</label>
                <input
                  type="text"
                  value=""
                  name=""
                  required
                  class="form-control"
                  placeholder="Previous Class"
                />
              </div>
            </div>
            <div className="row">
              <div className="col">
                <label for="exampleInputEmail1">Previous School:</label>
                <input
                  value=""
                  name=""
                  required
                  type="text"
                  class="form-control"
                  placeholder="Previous School"
                />
              </div>
            </div>
            <div className="row">
              <div className="col">
                <label for="exampleInputEmail1">Grade/Marks Scored:</label>
                <input
                  type="text"
                  value=""
                  name=""
                  required
                  class="form-control"
                  placeholder="Grade/Marks Scored"
                />
              </div>
              <div className="col">
                <label for="exampleInputEmail1">Chronic Diseases If Any:</label>
                <input
                  type="text"
                  value=""
                  name=""
                  required
                  className="form-control"
                  placeholder="Chronic Disease If Any"
                />
              </div>
            </div>
            <div className="row">
              <div className="col">
                <label for="exampleInputEmail1">Alergic to:</label>
                <input
                  type="text"
                  value=""
                  name=""
                  required
                  className="form-control"
                  placeholder="Alergic to"
                />
              </div>
              <div className="col">
                <label for="exampleInputEmail1">Hobbies/Interest In</label>
                <input
                  type="text"
                  value=""
                  name=""
                  required
                  className="form-control"
                  placeholder="Hobbies/Interest in"
                />
              </div>
            </div>
            <div className="row">
              <div className="col">
                <label for="exampleInputEmail1">Academic Records:</label>

                <input
                  type="text"
                  value=""
                  name=""
                  required
                  className="form-control"
                  placeholder="Academic Records"
                />
              </div>
            </div>
            <small id="emailHelp" class="form-text text-muted">
              Please attach all coppies of the relevant documents
            </small>
            <div className="row">
              <div className="col">
                <label for="exampleInputEmail1">Father's Name</label>
                <input
                  type="text"
                  value=""
                  name=""
                  required
                  className="form-control"
                  placeholder="Father's First Name"
                />
              </div>
              <div className="col">
                <label for="exampleInputEmail1">Middle Name</label>
                <input
                  type="text"
                  value=""
                  name=""
                  required
                  className="form-control"
                  placeholder="Middle Name"
                />
              </div>
              <div className="col">
                <label for="exampleInputEmail1">Sur Name</label>
                <input
                  type="text"
                  value=""
                  name=""
                  required
                  className="form-control"
                  placeholder="Sur Name"
                />
              </div>
            </div>
            <div className="row">
              <div className="col">
                <label for="exampleInputEmail1">Occupation:</label>
                <input
                  type="text"
                  value=""
                  name=""
                  required
                  className="form-control"
                  placeholder="Occupation"
                />
              </div>
              <div className="col">
                <label for="exampleInputEmail1">Post:</label>
                <input
                  type="text"
                  value=""
                  name=""
                  required
                  className="form-control"
                  placeholder="Post"
                />
              </div>
            </div>
            <div className="row">
              <div className="col">
                <label for="exampleInputEmail1">City/Street Address:</label>
                <input
                  type="text"
                  value=""
                  name=""
                  required
                  className="form-control"
                  placeholder="Sur Name"
                />
              </div>
              <div className="col">
                <label for="exampleInputEmail1">Tel: +2119</label>
                <input
                  type="text"
                  value=""
                  name=""
                  className="form-control"
                  placeholder="Tel: +2119"
                  required
                />
              </div>
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
              />
              <label className="form-check-label" for="exampleCheck1">
                I am convinced that the above information is true and correct to
                the best of my knowledge
              </label>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Form;
