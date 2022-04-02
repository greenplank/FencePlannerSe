import React from "react";

const Information = () => {
  return (
    <>
      <div className="top-banner bg">
        <div className="heading">
          <h2>Green Plank Deck Planner</h2>
        </div>
      </div>
      <div className="container pt-5">
        {/* <h3>Information 11</h3> */}
        <p>
          Our decking planner is designed to help you choose a Green Plank NFC
          decking board for your next decking project, whilst giving an
          illustration of how it will look and an estimate of decking material
          you’ll need to complete your project.
        </p>

        <div className="row mb-4">
          <div className="col-md-8">
            <div className="w-100">
              <img
                width="100%"
                src="./images/info/info1.png"
                className="image-fluid"
                alt=""
              />
            </div>
          </div>
          <div className="col-md-4">
            <h4>Select sorounding environment</h4>
            <ul>
              <li>Choose your facade material</li>
              <li>Gargen</li>
              <li>Roof</li>
              <li>Balcony</li>
            </ul>
          </div>
        </div>
        <hr />
        <hr />
        <div className="row mb-4">
          <div className="col-md-8">
            <div className="w-100">
              <img
                width="100%"
                src="./images/info/info2.png"
                className="image-fluid"
                alt=""
              />
            </div>
          </div>
          <div className="col-md-4">
            <h4>Choose your Green Plank decking board</h4>
            <p>
              Here, you will find the list of decking boards with their
              respective colors and structures. When you select a decking board
              in the offered color, the following information are presented:
            </p>
            <ul>
              <li>
                On the left, an illustration of the decking floor would be shown
                in your selected color and pattern.
              </li>
              <li>
                At the lower left bottom, details of board’s color and surface
                pattern
              </li>
              <li>Dimensions</li>
              <li>Shape</li>
            </ul>
          </div>
        </div>
        <hr />
        <hr />
        <div className="row mb-4">
          <div className="col-md-8">
            <div className="w-100">
              <img
                width="100%"
                src="./images/info/info3.png"
                className="image-fluid"
                alt=""
              />
            </div>
          </div>
          <div className="col-md-4">
            <h4>Select deck floor shape</h4>
            <p>
              Here, you will find the different deck floor shapes to choose.
            </p>
            <ul>
              <li>Select the shape suitable to your requirement.</li>
              <li>
                Input the size in form of centimeters (cm) for the respective
                sides.
              </li>
              <p>
                Once, you will enter the size information for all sides, you
                will get below an estimate of material required to build your
                Green Plank deck floor.
              </p>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Information;
