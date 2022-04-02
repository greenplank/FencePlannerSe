import React, { Component } from "react";
import Slider1 from "react-slick";
const Slider = () => {
  var settings = {
    dots: true,
    infinite: true,
    // speed: 2,
    slidesToShow: 1,
    slidesToScroll:1,
    autoplay: true,
    pauseOnHover:true,
    autoplaySpeed: 2000
  };
  // alert
  const pics = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  return (
    <>
      <Slider1 {...settings}>
        {pics.map((pic) => {
          return (
            <div style={{ height: "400px" }}>
              <img width="100%" src={`./images/slides/s${pic - 1}.png`} alt="" />
            </div>
          );
        })}
      </Slider1>
      <div className="con-cust mt-5 mb-3" style={{overflowY:'scroll', overflowX:'hidden', height:'320px'}}>
        <h3 className="mt-2">Novofence Private Package</h3>
        <table className="table">
          <thead>
            <tr>
              <th>Post Package</th>
              <th>Fence Package</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1 x Top Board Frame Cap (1760 MM) </td>
              <td>3 x Horizontal Fence Boards / package (Board size: 1760*161.5*20.8 MM) </td>          
            </tr>
            <tr>
              <td>1 x Bottom Support Frame (1760 MM)</td>
              <td>*4 packages needed to build a 180*180 cm fence section
              </td>
            </tr>
            <tr>
              <td>1 x Fence Post (1880 MM)</td>
              <td></td>
            </tr>
            <tr>
              <td>1 x Post Cap</td>
              <td></td>
            </tr>
            <tr>
              <td>3 x Channel Covers</td>
              <td></td>
            </tr>
            <tr>
              <td>2 x Corner Clips </td>
              <td></td>
            </tr> <tr>
              <td>4 x Screws for Corner Clips</td>
              <td></td>
            </tr> <tr>
              <td>2 x M8*50 Bolts</td>
              <td></td>
            </tr> <tr>
              <td>4 x Expansion Screws</td>
              <td></td>
            </tr>
<tr>
              <td>(*Fence Post Shoes not included, order separately)</td>
              <td></td>
            </tr>
          
          </tbody>
        </table>
        <div className="pkg-cont">
          <h5>Needed for 1 Section:</h5>
          <p className="mb-0">1 x Post Package + 1 x Post Package Extra</p>
          <p>4 x Board Package</p>
        </div>
        <div className="pkg-cont">
          <h5>Needed for 2 Section:</h5>
          <p className="mb-0">2 x Post Package + 1 x Post Package Extra</p>
          <p>8 x Board Package</p>
        </div>
        <div className="pkg-cont">
          <h5>Needed for 3 Section:</h5>
          <p className="mb-0">3 x Post Package + 1 x Post Package Extra</p>
          <p>12 x Board Package</p>
        </div>
        <div className="pkg-cont">
          <h5>Calculation for needed packages:</h5>
          <p className="mb-0"><b>Post Package:</b> <br></br>
X+1 Post packages per section where X is the needed number of sections
</p>
<p className="mb-0"><b>Board Package:</b> <br></br>
Z * 4 Board Packages where Z is the needed number of sections
</p>
<p>Amount of Post Shoe should be ordered in the same quantity as post packages</p>
        </div>
      </div>
    </>
  );
};

export default Slider;
