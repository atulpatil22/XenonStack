import React from "react";
import "../Css/Style.css";

export default function Treatment() {
  return (
    <div>
      {/* slidder-start */}
      <div
        id="carouselExampleInterval"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval={2000}>
            <img
              src="./images/c4.jpg"
              style={{ width: "600px", height: "500px" }}
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item" data-bs-interval={2000}>
            <img
              src="./images/c1.png"
              style={{ width: "600px", height: "500px" }}
              className="d-block w-100"
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <br />

      {/* slidder-end */}
      <div className="text-center">
        <p>
          <h3 id="bridalH" style={{ fontFamily: "revert" }}>
            {" "}
            Replace Missing Teeth In A Day
          </h3>
        </p>
        <br />

        {/* <p><h1>Bridal Makeup</h1></p><br/> */}

        <p style={{ width: "60%", marginLeft: 315, color: "gray" }}>
          <h5 id="bridal1">
            "With our cutting-edge German implant technology, we can replace one
            or more of your teeth within 24 hours."
          </h5>
        </p>
      </div>
      <br />
      <hr />
      <br />

      <div>
        <div className="row">
          <div className="col-6">
            <img
              src="./images/d1.jpg"
              style={{ width: "600px", height: "500px" }}
            ></img>
          </div>
          <div className="col-6">
            <p
              style={{
                width: "60%",
                textAlign: "center",
                marginLeft: 100,
                color: " rgb(224, 178, 141",
              }}
            >
              <h1>All That Dentistry Has To Offer </h1>
            </p>
            <hr />
            {/* <p className="text-center"><h5>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy </h5></p> */}

            <br />

            <div className="row">
              <div className="col-12">
                <h2 id="bridal"> Dental Treatments With Lasting Results</h2>
                <br />
                <p>
                  Inshine is an all-encompassing facility that offers the
                  highest standards of care in dentistry. From basic to advance
                  procedures, we make use of state-of-the-art technology to
                  ensure your treatment is pain-free, comfortable and minimally
                  invasive. Our team adheres to strict hygiene and sterilization
                  protocols at every stage. We work with complete precision to
                  increase the longevity of your results. Our technical prowess
                  combined with our empathetic approach is what helps us serve
                  you better.
                </p>
              </div>

              <div className="col-12">
                <h2 id="bridal"> Replacement Of ‘Black-line’ Crowns</h2>
                <br />
                <p>
                  Traditionally, crowns used for the anterior teeth were made
                  from metal and ceramic materials that created a black line
                  around the border of the crown and gave an overall metallic
                  tint. At Dentzz, we use only metal-free ceramic crowns for
                  anterior teeth to ensure no black lines are formed and the
                  crowns blend in naturally with the adjacent teeth.
                </p>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />

        <br />
        <br />

        <div></div>
      </div>
    </div>
  );
}
