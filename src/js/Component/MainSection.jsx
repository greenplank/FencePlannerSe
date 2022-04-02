import React from "react";
import $ from "jquery";

class MainSection extends React.Component {
  render() {
    $('[id*="#inner-tab-"]').click(function() {
      console.log("hello jani");
      if (this.id === "inner-tab-1") {
        console.log("hello world");
        // $("#hero-img").attr("src", "./images/House.jpeg");
      } else if (this.id === "inner-tab-2") {
        $("#hero-img").attr("src", "./images/Floor.jpeg");
      } else if (this.id === "inner-tab-3") {
        $("#hero-img").attr("src", "./images/Balcony.jpeg");
      } else if (this.id === "inner-tab-4") {
        $("#hero-img").attr("src", "./images/Balcony.jpeg");
      }
    });

    $(document).ready(function() {
      $("#inner-tab-2").click(function() {
        // Change src attribute of image
        console.log("hello");
        // $(this).attr("src", "./images/Balcony.jpeg");
      });
    });
    // Calcluation change image in tab

    // $(function() {
    $(".calac-inner-tab label img").on("click", function() {
      $(this);
      // .parent()
      // .find(".ON")
      // .removeClass("ON");
      $(this).addClass("ON");
      if (this.id === "second_calac") {
        $(".ON").attr("src", "./images/SVG/Rectangle -1.svg");
      } else if (this.id === "first_calac") {
        $(".OON").attr("src", "./images/SVG/Rectangle 468.svg");
      }
    });
    // });

    // Tab Next Back Handel
    function enviromentBack() {
      $("#tab-5").click();
    }
    function enviromentNext() {
      $("#tab-2").click();
    }
    function textureBack() {
      $("#tab-1").click();
    }
    function textureNext() {
      $("#tab-4").click();
    }
    function calculationBack() {
      $("#tab-2").click();
    }
    function calculationNext() {
      $("#tab-5").click();
    }
    function pricingBack() {
      $("#tab-4").click();
    }
    function pricingNext() {
      $("#tab-1").click();
    }

    return (
      <React.Fragment>
        <div className="row m-0">
          <div className="col-md-8 p-0 left-side">
            <img
              src="./images/House.jpeg"
              alt="House"
              width="100%"
              height="100%"
              id="hero-img"
            />
          </div>
          <div className="col-md-4 p-0 right-side px-1">
            {/* <!-- Main Tabs Start--> */}
            <div className="tabs">
              <div className="tab">
                <input
                  type="radio"
                  id="tab-1"
                  name="tab-group-1"
                  defaultChecked={true}
                />
                <label htmlFor="tab-1">Enviroment</label>
                <div className="content">
                  {/* <!-- Inner Tabs Start --> */}
                  <div className="inner-tabs ">
                    <div className="inner-tab">
                      <input
                        type="radio"
                        name="tab-group-2"
                        id="inner-tab-1"
                        defaultChecked={true}
                        // checked
                      />
                      <label htmlFor="inner-tab-1">House</label>
                      <div className="inner-content m-0 mt-3 row">
                        <div className="col-4 p-0 text-center inner-tab-data">
                          <img
                            src="./images/download.jpg"
                            alt="Plaster"
                            width="100%"
                            height="100"
                          />
                          <p>Plaster</p>
                        </div>
                        <div className="col-4 p-0 text-center inner-tab-data">
                          <img
                            src="https://images.pexels.com/photos/207142/pexels-photo-207142.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                            alt="Plaster"
                            width="100%"
                            height="100"
                          />
                          <p>Clinker</p>
                        </div>
                        <div className="col-4 p-0 text-center inner-tab-data">
                          <img
                            src="https://images.homedepot-static.com/productImages/b2ee0ac2-0381-44fd-9770-da63db8a804c/svn/various-wood-tones-weaber-weathered-wood-27862-64_1000.jpg"
                            alt="Plaster"
                            width="100%"
                            height="100"
                          />
                          <p>Board</p>
                        </div>
                        <div className="col-12 d-flex justify-content-between"></div>
                      </div>
                    </div>
                    <div className="inner-tab">
                      <input type="radio" name="tab-group-2" id="inner-tab-2" />
                      <label htmlFor="inner-tab-2">Garden</label>
                      <div className="inner-content row m-0 mt-2">
                        <p className="ml-3 mt-2">
                          Garden text coming soon ....
                        </p>
                      </div>
                    </div>
                    <div className="inner-tab">
                      <input type="radio" name="tab-group-2" id="inner-tab-3" />
                      <label htmlFor="inner-tab-3">Roof</label>
                      <div className="inner-content row m-0 mt-2">
                        <p className="ml-3">Roof text coming soon ....</p>
                      </div>
                    </div>
                    <div className="inner-tab">
                      <input type="radio" name="tab-group-2" id="inner-tab-4" />
                      <label htmlFor="inner-tab-4">Balcony</label>
                      <div className="inner-content row m-0 mt-2">
                        <p className="ml-3">Balcony text coming soon ....</p>
                      </div>
                    </div>
                    <div
                      style={{
                        position: "relative",
                        bottom: "0",
                        top: "10rem",
                        width: "100%",
                        padding: "0px 10px"
                      }}
                    >
                      <button
                        onClick={enviromentBack}
                        className="btn btn-warning px-4 font-weight-bold"
                        style={{ borderRadius: "10px" }}
                      >
                        Back
                      </button>
                      <button
                        onClick={enviromentNext}
                        className="btn btn-success px-4 font-weight-bold next1"
                        style={{
                          borderRadius: "10px",
                          right: "10px",
                          position: "absolute"
                        }}
                      >
                        Next
                      </button>
                    </div>
                  </div>
                  {/* <!-- Inner Tabs End --> */}
                </div>
              </div>
              <div className="tab">
                <input type="radio" id="tab-2" name="tab-group-1" />
                <label htmlFor="tab-2">Texture</label>
                <div className="content">
                  {/* <!-- Inner Tab Start --> */}

                  {/* <!-- Filter Gallery Start --> */}

                  <div
                    className="container-fluid p-0"
                    style={{ marginTop: "20px" }}
                  >
                    <div className="row">
                      <ul
                        className="nav nav-pills mb-3 m-0 p-0"
                        id="pills-tab"
                        role="tablist"
                      >
                        <li className="nav-item">
                          <a
                            className="nav-link active"
                            id="showall-tab"
                            data-toggle="pill"
                            href="#showall"
                            role="tab"
                            aria-controls="showall"
                            aria-selected="true"
                          >
                            All
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            id="Classic-tab"
                            data-toggle="pill"
                            href="#Classic"
                            role="tab"
                            aria-controls="Classic"
                            aria-selected="false"
                          >
                            Classic
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            id="EntraSide-tab"
                            data-toggle="pill"
                            href="#EntraSide"
                            role="tab"
                            aria-controls="EntraSide"
                            aria-selected="false"
                          >
                            Entra Side
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            id="EverDeck-tab"
                            data-toggle="pill"
                            href="#EverDeck"
                            role="tab"
                            aria-controls="EverDeck"
                            aria-selected="false"
                          >
                            Ever Deck
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            id="Marine-tab"
                            data-toggle="pill"
                            href="#Marine"
                            role="tab"
                            aria-controls="Marine"
                            aria-selected="false"
                          >
                            Marine
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            id="Forest-tab"
                            data-toggle="pill"
                            href="#SmartClassic"
                            role="tab"
                            aria-controls="Forest"
                            aria-selected="false"
                          >
                            Smart Classic
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            id="SmartRegular-tab"
                            data-toggle="pill"
                            href="#SmartRegular"
                            role="tab"
                            aria-controls="Forest"
                            aria-selected="false"
                          >
                            Smart Regular
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            id="Forest-tab"
                            data-toggle="pill"
                            href="#SmartNatural"
                            role="tab"
                            aria-controls="Forest"
                            aria-selected="false"
                          >
                            Smart Natural
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="container w-100 p-0 pl-2">
                      <div className="tab-content" id="pills-tabContent">
                        {/* <!-- Show All Images Filter Start --> */}
                        <div
                          className="tab-pane owl-carousel fade show active"
                          id="showall"
                          style={{ padding: "0px 25px 0px 0px !important" }}
                          role="tabpanel"
                          aria-labelledby="showall-tab"
                        >
                          <div className="owl-carousel" id="showall_images">
                            <div>
                              <div className="Portfolio">
                                <a href="#!">
                                  <img
                                    className="card-img"
                                    src="./images/All Profiles Color/Classic Side 1 Beach Grey.png"
                                    alt=""
                                  />
                                </a>
                                <div className="price">
                                  <p className="price_p w-100 text-center">
                                    Price
                                  </p>
                                </div>
                                <div className="desc">
                                  Classic Narrow Groove Beach Grey
                                </div>
                              </div>
                              <div className="Portfolio">
                                <a href="#!">
                                  <img
                                    className="card-img"
                                    src="./images/All Profiles Color/Classic side 1 Charcoal.png"
                                    alt=""
                                  />
                                </a>
                                <div className="price">
                                  <p className="price_p w-100 text-center">
                                    Price
                                  </p>
                                </div>
                                <div className="desc">
                                  Classic Narrow Groove Charcoal
                                </div>
                              </div>
                              <div className="Portfolio">
                                <a href="#!">
                                  <img
                                    className="card-img"
                                    src="./images/All Profiles Color/Classic Side 1 Chocolate.png"
                                    alt=""
                                  />
                                </a>
                                <div className="price">
                                  <p className="price_p w-100 text-center">
                                    Price
                                  </p>
                                </div>
                                <div className="desc">
                                  Classic Narrow Groove Chocolate
                                </div>
                              </div>
                            </div>
                            <div>
                              <div className="Portfolio">
                                <a href="#!">
                                  <img
                                    className="card-img"
                                    src="./images/All Profiles Color/Classic Side 1 Teak.png"
                                    alt=""
                                  />
                                </a>
                                <div className="price">
                                  <p className="price_p w-100 text-center">
                                    Price
                                  </p>
                                </div>
                                <div className="desc">
                                  Classic Narrow Groove Teak
                                </div>
                              </div>
                              <div className="Portfolio">
                                <a href="#!">
                                  <img
                                    className="card-img"
                                    src="./images/All Profiles Color/Classic Side 2 Beach Grey.png"
                                    alt=""
                                  />
                                </a>
                                <div className="price">
                                  <p className="price_p w-100 text-center">
                                    Price
                                  </p>
                                </div>
                                <div className="desc">
                                  Classic Wide Groove Beach Grey
                                </div>
                              </div>
                              <div className="Portfolio">
                                <a href="#!">
                                  <img
                                    className="card-img"
                                    src="./images/All Profiles Color/Classic Side 2 Charcoal.png"
                                    alt=""
                                  />
                                </a>
                                <div className="price">
                                  <p className="price_p w-100 text-center">
                                    Price
                                  </p>
                                </div>
                                <div className="desc">
                                  Classic Wide Groove Charcoal
                                </div>
                              </div>
                            </div>
                            <div>
                              <div className="Portfolio">
                                <a href="#!">
                                  <img
                                    className="card-img"
                                    src="./images/All Profiles Color/Classic Side 2 Chocolate.png"
                                    alt=""
                                  />
                                </a>
                                <div className="price">
                                  <p className="price_p w-100 text-center">
                                    Price
                                  </p>
                                </div>
                                <div className="desc">
                                  Classic Wide Groove Chocolate
                                </div>
                              </div>
                              <div className="Portfolio">
                                <a href="#!">
                                  <img
                                    className="card-img"
                                    src="./images/All Profiles Color/Classic Side 2 Teak.png"
                                    alt=""
                                  />
                                </a>
                                <div className="price">
                                  <p className="price_p w-100 text-center">
                                    Price
                                  </p>
                                </div>
                                <div className="desc">
                                  Classic Wide Groove Teak
                                </div>
                              </div>
                              <div className="Portfolio">
                                <a href="#!">
                                  <img
                                    className="card-img"
                                    src="./images/All Profiles Color/Entra Side 1 Beach Grey.png"
                                    alt=""
                                  />
                                </a>
                                <div className="price">
                                  <p className="price_p w-100 text-center">
                                    Price
                                  </p>
                                </div>
                                <div className="desc">
                                  Entra Narrow Ribbed Beach Grey
                                </div>
                              </div>
                            </div>
                            <div>
                              <div className="Portfolio">
                                <a href="#!">
                                  <img
                                    className="card-img"
                                    src="./images/All Profiles Color/Entra Side 1 Charcoal.png"
                                    alt=""
                                  />
                                </a>
                                <div className="price">
                                  <p className="price_p w-100 text-center">
                                    Price
                                  </p>
                                </div>
                                <div className="desc">
                                  Entra Narrow Ribbed Charcoal
                                </div>
                              </div>
                              <div className="Portfolio">
                                <a href="#!">
                                  <img
                                    className="card-img"
                                    src="./images/All Profiles Color/Entra SIde 1 Chocolate.png"
                                    alt=""
                                  />
                                </a>
                                <div className="price">
                                  <p className="price_p w-100 text-center">
                                    Price
                                  </p>
                                </div>
                                <div className="desc">
                                  Entra Narrow Ribbed Chocolate
                                </div>
                              </div>
                              <div className="Portfolio">
                                <a href="#!">
                                  <img
                                    className="card-img"
                                    src="./images/All Profiles Color/Entra Side 1 Teak.png"
                                    alt=""
                                  />
                                </a>
                                <div className="price">
                                  <p className="price_p w-100 text-center">
                                    Price
                                  </p>
                                </div>
                                <div className="desc">
                                  Entra Narrow Ribbed Teak
                                </div>
                              </div>
                            </div>
                            <div>
                              <div className="Portfolio">
                                <a href="#!">
                                  <img
                                    className="card-img"
                                    src="./images/All Profiles Color/Entra Side 2 Beach Grey.png"
                                    alt=""
                                  />
                                </a>
                                <div className="price">
                                  <p className="price_p w-100 text-center">
                                    Price
                                  </p>
                                </div>
                                <div className="desc">
                                  Entra Narrow Wood-Texture Beach Grey
                                </div>
                              </div>
                              <div className="Portfolio">
                                <a href="#!">
                                  <img
                                    className="card-img"
                                    src="./images/All Profiles Color/Entra Side 2 Charcoal.png"
                                    alt=""
                                  />
                                </a>
                                <div className="price">
                                  <p className="price_p w-100 text-center">
                                    Price
                                  </p>
                                </div>
                                <div className="desc">
                                  Entra Narrow Wood-Texture Charcoal
                                </div>
                              </div>
                              <div className="Portfolio">
                                <a href="#!">
                                  <img
                                    className="card-img"
                                    src="./images/All Profiles Color/Entra Side 2 Chocolate.png"
                                    alt=""
                                  />
                                </a>
                                <div className="price">
                                  <p className="price_p w-100 text-center">
                                    Price
                                  </p>
                                </div>
                                <div className="desc">
                                  Entra Narrow Wood-Texture Chocolate
                                </div>
                              </div>
                            </div>
                            <div>
                              <div className="Portfolio">
                                <a href="#!">
                                  <img
                                    className="card-img"
                                    src="./images/All Profiles Color/Entra Side 2 Teak.png"
                                    alt=""
                                  />
                                </a>
                                <div className="price">
                                  <p className="price_p w-100 text-center">
                                    Price
                                  </p>
                                </div>
                                <div className="desc">
                                  Entra Narrow Wood-Texture Teak
                                </div>
                              </div>
                              <div className="Portfolio">
                                <a href="#!">
                                  <img
                                    className="card-img"
                                    src="./images/All Profiles Color/Everdeck Side 1 Beach Grey.png"
                                    alt=""
                                  />
                                </a>
                                <div className="price">
                                  <p className="price_p w-100 text-center">
                                    Price
                                  </p>
                                </div>
                                <div className="desc">
                                  EverDeck Narrow Ribbed Beach Grey
                                </div>
                              </div>
                              <div className="Portfolio">
                                <a href="#!">
                                  <img
                                    className="card-img"
                                    src="./images/All Profiles Color/Everdeck Side 1 Charcoal.png"
                                    alt=""
                                  />
                                </a>
                                <div className="price">
                                  <p className="price_p w-100 text-center">
                                    Price
                                  </p>
                                </div>
                                <div className="desc">
                                  EverDeck Narrow Ribbed Charcoal
                                </div>
                              </div>
                            </div>
                            <div>
                              <div className="Portfolio">
                                <a href="#!">
                                  <img
                                    className="card-img"
                                    src="./images/All Profiles Color/Everdeck Side 2 Beach Grey.png"
                                    alt=""
                                  />
                                </a>
                                <div className="price">
                                  <p className="price_p w-100 text-center">
                                    Price
                                  </p>
                                </div>
                                <div className="desc">
                                  EverDeck Smooth Beach Grey
                                </div>
                              </div>
                              <div className="Portfolio">
                                <a href="#!">
                                  <img
                                    className="card-img"
                                    src="./images/All Profiles Color/Everdeck Side 2 Charcoal.png"
                                    alt=""
                                  />
                                </a>

                                <div className="price">
                                  <p className="price_p w-100 text-center">
                                    Price
                                  </p>
                                </div>
                                <div className="desc">
                                  EverDeck Smooth Beach Charcoal
                                </div>
                              </div>
                              <div className="Portfolio">
                                <a href="#!">
                                  <img
                                    className="card-img"
                                    src="./images/All Profiles Color/Marine Art Side 1 Rustic Brown.png"
                                    alt=""
                                  />
                                </a>
                                <div className="price">
                                  <p className="price_p w-100 text-center">
                                    Price
                                  </p>
                                </div>
                                <div className="desc">
                                  Marine Art Wood-Texture deep Embossed Rustic
                                  Brown
                                </div>
                              </div>
                            </div>
                            <div>
                              <div className="Portfolio">
                                <a href="#!">
                                  <img
                                    className="card-img"
                                    src="./images/All Profiles Color/Marine Art Side 1 Rustic Grey.png"
                                    alt=""
                                  />
                                </a>
                                <div className="price">
                                  <p className="price_p w-100 text-center">
                                    Price
                                  </p>
                                </div>
                                <div className="desc">
                                  Marine Art Wood-Texture deep Embossed Rustic
                                  Grey
                                </div>
                              </div>
                              <div className="Portfolio">
                                <a href="#!">
                                  <img
                                    className="card-img"
                                    src="./images/All Profiles Color/Marine Art Side 2 Rustic Brown.png"
                                    alt=""
                                  />
                                </a>
                                <div className="price">
                                  <p className="price_p w-100 text-center">
                                    Price
                                  </p>
                                </div>
                                <div className="desc">
                                  Marine Art Smooth Rustic Brown
                                </div>
                              </div>
                              <div className="Portfolio">
                                <a href="#!">
                                  <img
                                    className="card-img"
                                    src="./images/All Profiles Color/Marine Art Side 2 Rustic Grey.png"
                                    alt=""
                                  />
                                </a>
                                <div className="price">
                                  <p className="price_p w-100 text-center">
                                    Price
                                  </p>
                                </div>
                                <div className="desc">
                                  Marine Art Smooth Rustic Grey
                                </div>
                              </div>
                            </div>
                            <div>
                              <div className="Portfolio">
                                <a href="#!">
                                  <img
                                    className="card-img"
                                    src="./images/All Profiles Color/Marine Cap Side 1 Baltic Grey.png"
                                    alt=""
                                  />
                                </a>
                                <div className="price">
                                  <p className="price_p w-100 text-center">
                                    Price
                                  </p>
                                </div>
                                <div className="desc">
                                  MarineCap Wood-Texture Deep Embossed Baltic
                                  Grey
                                </div>
                              </div>
                              <div className="Portfolio">
                                <a href="#!">
                                  <img
                                    className="card-img"
                                    src="./images/All Profiles Color/Marine Cap Side 1 Baltic Brown.png"
                                    alt=""
                                  />
                                </a>
                                <div className="price">
                                  <p className="price_p w-100 text-center">
                                    Price
                                  </p>
                                </div>
                                <div className="desc">
                                  MarineCap Wood-Texture Deep Embossed Baltic
                                  Brown
                                </div>
                              </div>
                              <div className="Portfolio">
                                <a href="#!">
                                  <img
                                    className="card-img"
                                    src="./images/All Profiles Color/Marine Cap Side 2 Baltic Grey.png"
                                    alt=""
                                  />
                                </a>
                                <div className="price">
                                  <p className="price_p w-100 text-center">
                                    Price
                                  </p>
                                </div>
                                <div className="desc">
                                  MarineCap Smooth Baltic Grey
                                </div>
                              </div>
                            </div>
                            <div>
                              <div className="Portfolio">
                                <a href="#!">
                                  <img
                                    className="card-img"
                                    src="./images/All Profiles Color/Marine Jumbo Side 1 Red Cherry.png"
                                    alt=""
                                  />
                                </a>
                                <div className="price">
                                  <p className="price_p w-100 text-center">
                                    Price
                                  </p>
                                </div>
                                <div className="desc">
                                  MarineJumbo SmoothRed Cherry
                                </div>
                              </div>
                              <div className="Portfolio">
                                <a href="#!">
                                  <img
                                    className="card-img"
                                    src="./images/All Profiles Color/Marine Jumbo Side 1 Teak.png"
                                    alt=""
                                  />
                                </a>
                                <div className="price">
                                  <p className="price_p w-100 text-center">
                                    Price
                                  </p>
                                </div>
                                <div className="desc">
                                  MarineJumbo Smooth Teak
                                </div>
                              </div>
                              <div className="Portfolio">
                                <a href="#!">
                                  <img
                                    className="card-img"
                                    src="./images/All Profiles Color/Marine Jumbo Side 1 Beach Grey.png"
                                    alt=""
                                  />
                                </a>
                                <div className="price">
                                  <p className="price_p w-100 text-center">
                                    Price
                                  </p>
                                </div>
                                <div className="desc">
                                  MarineJumbo SmoothBeach Grey
                                </div>
                              </div>
                            </div>
                            <div>
                              <div className="Portfolio">
                                <a href="#!">
                                  <img
                                    className="card-img"
                                    src="./images/All Profiles Color/Marine Jumbo Side 2 Red Cherry.png"
                                    alt=""
                                  />
                                </a>
                                <div className="price">
                                  <p className="price_p w-100 text-center">
                                    Price
                                  </p>
                                </div>
                                <div className="desc">
                                  MarineJumbo Narrow Ribbed Red Cherry
                                </div>
                              </div>
                              <div className="Portfolio">
                                <a href="#!">
                                  <img
                                    className="card-img"
                                    src="./images/All Profiles Color/Marine Jumbo Side 2 Teak.png"
                                    alt=""
                                  />
                                </a>
                                <div className="price">
                                  <p className="price_p w-100 text-center">
                                    Price
                                  </p>
                                </div>
                                <div className="desc">
                                  MarineJumbo Narrow Ribbed Teak
                                </div>
                              </div>
                              <div className="Portfolio">
                                <a href="#!">
                                  <img
                                    className="card-img"
                                    src="./images/All Profiles Color/Marine Jumbo Side 2 Beach Grey.png"
                                    alt=""
                                  />
                                </a>
                                <div className="price">
                                  <p className="price_p w-100 text-center">
                                    Price
                                  </p>
                                </div>
                                <div className="desc">
                                  MarineJumbo SmoothBeach Grey
                                </div>
                              </div>
                            </div>
                            <div>
                              <div className="Portfolio">
                                <a href="#!">
                                  <img
                                    className="card-img"
                                    src="./images/All Profiles Color/Smart Classic Cloudy Grey.png"
                                    alt=""
                                  />
                                </a>
                                <div className="price">
                                  <p className="price_p w-100 text-center">
                                    Price
                                  </p>
                                </div>
                                <div className="desc">
                                  Smart Classic Wide Groove Cloudy Grey
                                </div>
                              </div>
                              <div className="Portfolio">
                                <a href="#!">
                                  <img
                                    className="card-img"
                                    src="./images/All Profiles Color/Smart Classic Ipe.png"
                                    alt=""
                                  />
                                </a>
                                <div className="price">
                                  <p className="price_p w-100 text-center">
                                    Price
                                  </p>
                                </div>
                                <div className="desc">
                                  Smart Classic Wide Groove Ipe
                                </div>
                              </div>
                              <div className="Portfolio">
                                <a href="#!">
                                  <img
                                    className="card-img"
                                    src="./images/All Profiles Color/Smart Classic Walnut.png"
                                    alt=""
                                  />
                                </a>
                                <div className="price">
                                  <p className="price_p w-100 text-center">
                                    Price
                                  </p>
                                </div>
                                <div className="desc">
                                  Smart Classic Wide Groove Walnut
                                </div>
                              </div>
                            </div>
                            <div>
                              <div className="Portfolio">
                                <a href="#!">
                                  <img
                                    className="card-img"
                                    src="./images/All Profiles Color/Smart Natural Beach Grey.png"
                                    alt=""
                                  />
                                </a>
                                <div className="price">
                                  <p className="price_p w-100 text-center">
                                    Price
                                  </p>
                                </div>
                                <div className="desc">
                                  Smart Natural Smooth Beach Grey
                                </div>
                              </div>
                              <div className="Portfolio">
                                <a href="#!">
                                  <img
                                    className="card-img"
                                    src="./images/All Profiles Color/Smart Natural Charcoal.png"
                                    alt=""
                                  />
                                </a>
                                <div className="price">
                                  <p className="price_p w-100 text-center">
                                    Price
                                  </p>
                                </div>
                                <div className="desc">
                                  Smart Natural Smooth Charcoal
                                </div>
                              </div>
                              <div className="Portfolio">
                                <a href="#!">
                                  <img
                                    className="card-img"
                                    src="./images/All Profiles Color/Smart Natural Chocolate.png"
                                    alt=""
                                  />
                                </a>
                                <div className="price">
                                  <p className="price_p w-100 text-center">
                                    Price
                                  </p>
                                </div>
                                <div className="desc">
                                  Smart Natural Smooth Chocolate
                                </div>
                              </div>
                            </div>
                            <div>
                              <div className="Portfolio">
                                <a href="#!">
                                  <img
                                    className="card-img"
                                    src="./images/All Profiles Color/Smart Natural Coffee Brown.png"
                                    alt=""
                                  />
                                </a>
                                <div className="price">
                                  <p className="price_p w-100 text-center">
                                    Price
                                  </p>
                                </div>
                                <div className="desc">
                                  Smart Natural Smooth Coffee Brown
                                </div>
                              </div>
                              <div className="Portfolio">
                                <a href="#!">
                                  <img
                                    className="card-img"
                                    src="./images/All Profiles Color/Smart Natural Teak.png"
                                    alt=""
                                  />
                                </a>
                                <div className="price">
                                  <p className="price_p w-100 text-center">
                                    Price
                                  </p>
                                </div>
                                <div className="desc">
                                  Smart Natural Smooth Teak
                                </div>
                              </div>
                              <div className="Portfolio">
                                <a href="#!">
                                  <img
                                    className="card-img"
                                    src="./images/All Profiles Color/Smart Regular Beach Grey.png"
                                    alt=""
                                  />
                                </a>
                                <div className="price">
                                  <p className="price_p w-100 text-center">
                                    Price
                                  </p>
                                </div>
                                <div className="desc">
                                  Smart Regular Narrow Ribbed Beach Grey
                                </div>
                              </div>
                            </div>
                            <div>
                              <div className="Portfolio">
                                <a href="#!">
                                  <img
                                    className="card-img"
                                    src="./images/All Profiles Color/Smart Regular Charcoal.png"
                                    alt=""
                                  />
                                </a>
                                <div className="price">
                                  <p className="price_p w-100 text-center">
                                    Price
                                  </p>
                                </div>
                                <div className="desc">
                                  Smart Regular Narrow Ribbed Charcoal
                                </div>
                              </div>
                              <div className="Portfolio">
                                <a href="#!">
                                  <img
                                    className="card-img"
                                    src="./images/All Profiles Color/Smart Regular Chocolate.png"
                                    alt=""
                                  />
                                </a>
                                <div className="price">
                                  <p className="price_p w-100 text-center">
                                    Price
                                  </p>
                                </div>
                                <div className="desc">
                                  Smart Regular Narrow Ribbed Chocolate
                                </div>
                              </div>
                              <div className="Portfolio">
                                <a href="#!">
                                  <img
                                    className="card-img"
                                    src="./images/All Profiles Color/Smart Regular Coffee Brown.png"
                                    alt=""
                                  />
                                </a>
                                <div className="price">
                                  <p className="price_p w-100 text-center">
                                    Price
                                  </p>
                                </div>
                                <div className="desc">
                                  Smart Regular Narrow Ribbed Coffee Brown
                                </div>
                              </div>
                            </div>
                            <div>
                              <div className="Portfolio">
                                <a href="#!">
                                  <img
                                    className="card-img"
                                    src="./images/All Profiles Color/Smart Regular Teak.png"
                                    alt=""
                                  />
                                </a>
                                <div className="price">
                                  <p className="price_p w-100 text-center">
                                    Price
                                  </p>
                                </div>
                                <div className="desc">
                                  Smart Regular Narrow Ribbed Teak
                                </div>
                              </div>
                              <div className="Portfolio">
                                <a href="#!">
                                  <img
                                    className="card-img"
                                    src="./images/All Profiles Color/SmartCap Baltic Brown.png"
                                    alt=""
                                  />
                                </a>
                                <div className="price">
                                  <p className="price_p w-100 text-center">
                                    Price
                                  </p>
                                </div>
                                <div className="desc">
                                  Smart Cap Wood-Texture Deep Embossed Baltic
                                  Grey
                                </div>
                              </div>
                              <div className="Portfolio">
                                <a href="#!">
                                  <img
                                    className="card-img"
                                    src="./images/All Profiles Color/SmartCap Baltic Grey.png"
                                    alt=""
                                  />
                                </a>
                                <div className="price">
                                  <p className="price_p w-100 text-center">
                                    Price
                                  </p>
                                </div>
                                <div className="desc">
                                  Smart Cap Wood-Texture Deep Embossed Baltic
                                  Brown
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* <!-- Show All Images Filter End --> */}
                        {/* <!-- Classic Images Filter Start --> */}
                        <div
                          className="tab-pane fade"
                          id="Classic"
                          role="tabpanel"
                          aria-labelledby="Classic-tab"
                        >
                          <div className="Portfolio">
                            <a href="#!">
                              <img
                                className="card-img"
                                src="./images/All Profiles Color/Classic Side 1 Beach Grey.png"
                                alt=""
                              />
                            </a>
                            <div className="price">
                              <p className="price_p w-100 text-center">Price</p>
                            </div>
                            <div className="desc">
                              Classic Narrow Groove Beach Grey
                            </div>
                          </div>
                          <div className="Portfolio">
                            <a href="#!">
                              <img
                                className="card-img"
                                src="./images/All Profiles Color/Classic side 1 Charcoal.png"
                                alt=""
                              />
                            </a>
                            <div className="price">
                              <p className="price_p w-100 text-center">Price</p>
                            </div>
                            <div className="desc">
                              Classic Narrow Groove Charcoal
                            </div>
                          </div>
                          <div className="Portfolio">
                            <a href="#!">
                              <img
                                className="card-img"
                                src="./images/All Profiles Color/Classic Side 1 Chocolate.png"
                                alt=""
                              />
                            </a>
                            <div className="price">
                              <p className="price_p w-100 text-center">Price</p>
                            </div>
                            <div className="desc">
                              Classic Narrow Groove Chocolate
                            </div>
                          </div>
                          <div className="Portfolio">
                            <a href="#!">
                              <img
                                className="card-img"
                                src="./images/All Profiles Color/Classic Side 1 Teak.png"
                                alt=""
                              />
                            </a>
                            <div className="price">
                              <p className="price_p w-100 text-center">Price</p>
                            </div>
                            <div className="desc">
                              Classic Narrow Groove Teak
                            </div>
                          </div>
                          <div className="Portfolio">
                            <a href="#!">
                              <img
                                className="card-img"
                                src="./images/All Profiles Color/Classic Side 2 Beach Grey.png"
                                alt=""
                              />
                            </a>
                            <div className="price">
                              <p className="price_p w-100 text-center">Price</p>
                            </div>
                            <div className="desc">
                              Classic Wide Groove Beach Grey
                            </div>
                          </div>
                          <div className="Portfolio">
                            <a href="#!">
                              <img
                                className="card-img"
                                src="./images/All Profiles Color/Classic Side 2 Charcoal.png"
                                alt=""
                              />
                            </a>
                            <div className="price">
                              <p className="price_p w-100 text-center">Price</p>
                            </div>
                            <div className="desc">
                              Classic Wide Groove Charcoal
                            </div>
                          </div>
                          <div className="Portfolio">
                            <a href="#!">
                              <img
                                className="card-img"
                                src="./images/All Profiles Color/Classic Side 2 Chocolate.png"
                                alt=""
                              />
                            </a>
                            <div className="price">
                              <p className="price_p w-100 text-center">Price</p>
                            </div>
                            <div className="desc">
                              Classic Wide Groove Chocolate
                            </div>
                          </div>
                          <div className="Portfolio">
                            <a href="#!">
                              <img
                                className="card-img"
                                src="./images/All Profiles Color/Classic Side 2 Teak.png"
                                alt=""
                              />
                            </a>
                            <div className="price">
                              <p className="price_p w-100 text-center">Price</p>
                            </div>
                            <div className="desc">Classic Wide Groove Teak</div>
                          </div>
                        </div>
                        {/* <!-- Classic Images Filter End --> */}
                        {/* <!-- Entra Side Images Filter Start --> */}
                        <div
                          className="tab-pane fade"
                          id="EntraSide"
                          role="tabpanel"
                          aria-labelledby="EntraSide-tab"
                        >
                          <div className="Portfolio">
                            <a href="#!">
                              <img
                                className="card-img"
                                src="./images/All Profiles Color/Entra Side 1 Beach Grey.png"
                                alt=""
                              />
                            </a>
                            <div className="price">
                              <p className="price_p w-100 text-center">Price</p>
                            </div>
                            <div className="desc">
                              Entra Narrow Ribbed Beach Grey
                            </div>
                          </div>
                          <div className="Portfolio">
                            <a href="#!">
                              <img
                                className="card-img"
                                src="./images/All Profiles Color/Entra Side 1 Charcoal.png"
                                alt=""
                              />
                            </a>
                            <div className="price">
                              <p className="price_p w-100 text-center">Price</p>
                            </div>
                            <div className="desc">
                              Entra Narrow Ribbed Charcoal
                            </div>
                          </div>
                          <div className="Portfolio">
                            <a href="#!">
                              <img
                                className="card-img"
                                src="./images/All Profiles Color/Entra SIde 1 Chocolate.png"
                                alt=""
                              />
                            </a>
                            <div className="price">
                              <p className="price_p w-100 text-center">Price</p>
                            </div>
                            <div className="desc">
                              Entra Narrow Ribbed Chocolate
                            </div>
                          </div>
                          <div className="Portfolio">
                            <a href="#!">
                              <img
                                className="card-img"
                                src="./images/All Profiles Color/Entra Side 1 Teak.png"
                                alt=""
                              />
                            </a>
                            <div className="price">
                              <p className="price_p w-100 text-center">Price</p>
                            </div>
                            <div className="desc">Entra Narrow Ribbed Teak</div>
                          </div>
                          <div className="Portfolio">
                            <a href="#!">
                              <img
                                className="card-img"
                                src="./images/All Profiles Color/Entra Side 2 Beach Grey.png"
                                alt=""
                              />
                            </a>
                            <div className="price">
                              <p className="price_p w-100 text-center">Price</p>
                            </div>
                            <div className="desc">
                              Entra Narrow Wood-Texture Beach Grey
                            </div>
                          </div>
                          <div className="Portfolio">
                            <a href="#!">
                              <img
                                className="card-img"
                                src="./images/All Profiles Color/Entra Side 2 Charcoal.png"
                                alt=""
                              />
                            </a>
                            <div className="price">
                              <p className="price_p w-100 text-center">Price</p>
                            </div>
                            <div className="desc">
                              Entra Narrow Wood-Texture Charcoal
                            </div>
                          </div>
                          <div className="Portfolio">
                            <a href="#!">
                              <img
                                className="card-img"
                                src="./images/All Profiles Color/Entra Side 2 Chocolate.png"
                                alt=""
                              />
                            </a>
                            <div className="price">
                              <p className="price_p w-100 text-center">Price</p>
                            </div>
                            <div className="desc">
                              Entra Narrow Wood-Texture Chocolate
                            </div>
                          </div>
                          <div className="Portfolio">
                            <a href="#!">
                              <img
                                className="card-img"
                                src="./images/All Profiles Color/Entra Side 2 Teak.png"
                                alt=""
                              />
                            </a>
                            <div className="price">
                              <p className="price_p w-100 text-center">Price</p>
                            </div>
                            <div className="desc">
                              Entra Narrow Wood-Texture Teak
                            </div>
                          </div>
                        </div>
                        {/* <!-- Entra Side Images Filter End --> */}
                        {/* <!-- Ever Deck Images Filter Start --> */}
                        <div
                          className="tab-pane fade"
                          id="EverDeck"
                          role="tabpanel"
                          aria-labelledby="EverDeck-tab"
                        >
                          <div className="Portfolio">
                            <a href="#!">
                              <img
                                className="card-img"
                                src="./images/All Profiles Color/Everdeck Side 1 Beach Grey.png"
                                alt=""
                              />
                            </a>
                            <div className="price">
                              <p className="price_p w-100 text-center">Price</p>
                            </div>
                            <div className="desc">
                              EverDeck Narrow Ribbed Beach Grey
                            </div>
                          </div>
                          <div className="Portfolio">
                            <a href="#!">
                              <img
                                className="card-img"
                                src="./images/All Profiles Color/Everdeck Side 1 Charcoal.png"
                                alt=""
                              />
                            </a>
                            <div className="price">
                              <p className="price_p w-100 text-center">Price</p>
                            </div>
                            <div className="desc">
                              EverDeck Narrow Ribbed Charcoal
                            </div>
                          </div>
                          <div className="Portfolio">
                            <a href="#!">
                              <img
                                className="card-img"
                                src="./images/All Profiles Color/Everdeck Side 2 Beach Grey.png"
                                alt=""
                              />
                            </a>
                            <div className="price">
                              <p className="price_p w-100 text-center">Price</p>
                            </div>
                            <div className="desc">
                              EverDeck Smooth Beach Grey
                            </div>
                          </div>
                          <div className="Portfolio">
                            <a href="#!">
                              <img
                                className="card-img"
                                src="./images/All Profiles Color/Everdeck Side 2 Charcoal.png"
                                alt=""
                              />
                            </a>
                            <div className="price">
                              <p className="price_p w-100 text-center">Price</p>
                            </div>
                            <div className="desc">EverDeck Smooth Charcoal</div>
                          </div>
                        </div>
                        {/* <!-- Ever Dock Images Filter End --> */}
                        {/* <!-- Marine Images Filter Start --> */}
                        <div
                          className="tab-pane owl-carousel fade"
                          id="Marine"
                          role="tabpanel"
                          aria-labelledby="Marine-tab"
                        >
                          <div className="Portfolio">
                            <a href="#!">
                              <img
                                className="card-img"
                                src="./images/All Profiles Color/Marine Art Side 1 Rustic Brown.png"
                                alt=""
                              />
                            </a>
                            <div className="price">
                              <p className="price_p w-100 text-center">Price</p>
                            </div>
                            <div className="desc">
                              Marine Art Wood-Texture deep Embossed Rustic Brown
                            </div>
                          </div>
                          <div className="Portfolio">
                            <a href="#!">
                              <img
                                className="card-img"
                                src="./images/All Profiles Color/Marine Art Side 1 Rustic Grey.png"
                                alt=""
                              />
                            </a>
                            <div className="price">
                              <p className="price_p w-100 text-center">Price</p>
                            </div>
                            <div className="desc">
                              Marine Art Wood-Texture deep Embossed Rustic Grey
                            </div>
                          </div>
                          <div className="Portfolio">
                            <a href="#!">
                              <img
                                className="card-img"
                                src="./images/All Profiles Color/Marine Art Side 2 Rustic Brown.png"
                                alt=""
                              />
                            </a>
                            <div className="price">
                              <p className="price_p w-100 text-center">Price</p>
                            </div>
                            <div className="desc">
                              Marine Art Smooth Rustic Brown
                            </div>
                          </div>
                          <div className="Portfolio">
                            <a href="#!">
                              <img
                                className="card-img"
                                src="./images/All Profiles Color/Marine Art Side 2 Rustic Grey.png"
                                alt=""
                              />
                            </a>
                            <div className="price">
                              <p className="price_p w-100 text-center">Price</p>
                            </div>
                            <div className="desc">
                              Marine Art Smooth Rustic Grey
                            </div>
                          </div>
                          <div className="Portfolio">
                            <a href="#!">
                              <img
                                className="card-img"
                                src="./images/All Profiles Color/Marine Cap Side 1 Baltic Brown.png"
                                alt=""
                              />
                            </a>
                            <div className="price">
                              <p className="price_p w-100 text-center">Price</p>
                            </div>
                            <div className="desc">
                              Marine Cap Wood-Texture Deep Embossed Baltic Brown
                            </div>
                          </div>
                          <div className="Portfolio">
                            <a href="#!">
                              <img
                                className="card-img"
                                src="./images/All Profiles Color/Marine Cap Side 1 Baltic Grey.png"
                                alt=""
                              />
                            </a>
                            <div className="price">
                              <p className="price_p w-100 text-center">Price</p>
                            </div>
                            <div className="desc">
                              Marine Cap Wood-Texture Deep Embossed Baltic Grey
                            </div>
                          </div>
                          <div className="Portfolio">
                            <a href="#!">
                              <img
                                className="card-img"
                                src="./images/All Profiles Color/Marine Cap Side 2 Baltic Brown.png"
                                alt=""
                              />
                            </a>
                            <div className="price">
                              <p className="price_p w-100 text-center">Price</p>
                            </div>
                            <div className="desc">
                              Marine Cap Smooth Baltic Brown
                            </div>
                          </div>
                          <div className="Portfolio">
                            <a href="#!">
                              <img
                                className="card-img"
                                src="./images/All Profiles Color/Marine Cap Side 2 Baltic Grey.png"
                                alt=""
                              />
                            </a>
                            <div className="price">
                              <p className="price_p w-100 text-center">Price</p>
                            </div>
                            <div className="desc">
                              Marine Cap Smooth Baltic Grey
                            </div>
                          </div>
                          <div className="Portfolio">
                            <a href="#!">
                              <img
                                className="card-img"
                                src="./images/All Profiles Color/Marine Cap Side 2 Baltic Grey.png"
                                alt=""
                              />
                            </a>
                            <div className="price">
                              <p className="price_p w-100 text-center">Price</p>
                            </div>
                            <div className="desc">
                              Marine Cap Smooth Baltic Grey
                            </div>
                          </div>
                        </div>
                        {/* <!-- Marine Images Filter End --> */}
                        {/* <!-- Smart Classic Images Filter Start --> */}
                        <div
                          className="tab-pane fade"
                          id="SmartClassic"
                          role="tabpanel"
                          aria-labelledby="SmartClassic-tab"
                        >
                          <div className="Portfolio">
                            <a href="#!">
                              <img
                                className="card-img"
                                src="./images/All Profiles Color/Smart Classic Cloudy Grey.png"
                                alt=""
                              />
                            </a>
                            <div className="price">
                              <p className="price_p w-100 text-center">Price</p>
                            </div>
                            <div className="desc">
                              Smart Classic Wide Groove Cloudy Grey
                            </div>
                          </div>
                          <div className="Portfolio">
                            <a href="#!">
                              <img
                                className="card-img"
                                src="./images/All Profiles Color/Smart Classic Driftwood.png"
                                alt=""
                              />
                            </a>
                            <div className="price">
                              <p className="price_p w-100 text-center">Price</p>
                            </div>
                            <div className="desc">
                              Smart Classic Wide Groove Ipe
                            </div>
                          </div>
                          <div className="Portfolio">
                            <a href="#!">
                              <img
                                className="card-img"
                                src="./images/All Profiles Color/Smart Classic Ipe.png"
                                alt=""
                              />
                            </a>
                            <div className="price">
                              <p className="price_p w-100 text-center">Price</p>
                            </div>
                            <div className="desc">
                              Smart Classic Wide Groove Walnut
                            </div>
                          </div>
                        </div>
                        {/* <!-- Smart classic Images Filter End --> */}
                        {/* <!-- Smart Regular Images Filter Start --> */}
                        <div
                          className="tab-pane fade"
                          id="SmartRegular"
                          role="tabpanel"
                          aria-labelledby="SmartRegular-tab"
                        >
                          <div className="Portfolio">
                            <a href="#!">
                              <img
                                className="card-img"
                                src="./images/All Profiles Color/Smart Regular Beach Grey.png"
                                alt=""
                              />
                            </a>
                            <div className="price">
                              <p className="price_p w-100 text-center">Price</p>
                            </div>
                            <div className="desc">
                              Smart Regular Narrow Ribbed Beach Grey
                            </div>
                          </div>
                          <div className="Portfolio">
                            <a href="#!">
                              <img
                                className="card-img"
                                src="./images/All Profiles Color/Smart Regular Charcoal.png"
                                alt=""
                              />
                            </a>
                            <div className="price">
                              <p className="price_p w-100 text-center">Price</p>
                            </div>
                            <div className="desc">
                              Smart Regular Narrow Ribbed Charcoal
                            </div>
                          </div>
                          <div className="Portfolio">
                            <a href="#!">
                              <img
                                className="card-img"
                                src="./images/All Profiles Color/Smart Regular Chocolate.png"
                                alt=""
                              />
                            </a>
                            <div className="price">
                              <p className="price_p w-100 text-center">Price</p>
                            </div>
                            <div className="desc">
                              Smart Regular Narrow Ribbed Chocolate
                            </div>
                          </div>
                          <div className="Portfolio">
                            <a href="#!">
                              <img
                                className="card-img"
                                src="./images/All Profiles Color/Smart Regular Coffee Brown.png"
                                alt=""
                              />
                            </a>
                            <div className="price">
                              <p className="price_p w-100 text-center">Price</p>
                            </div>
                            <div className="desc">
                              Smart Regular Narrow Ribbed Coffee Brown
                            </div>
                          </div>
                          <div className="Portfolio">
                            <a href="#!">
                              <img
                                className="card-img"
                                src="./images/All Profiles Color/Smart Regular Teak.png"
                                alt=""
                              />
                            </a>
                            <div className="price">
                              <p className="price_p w-100 text-center">Price</p>
                            </div>
                            <div className="desc">
                              Smart Regular Narrow Ribbed Teak
                            </div>
                          </div>
                        </div>
                        {/* <!-- Smart Regular Images Filter End --> */}
                        {/* <!-- Smart Natural Images Filter Start --> */}
                        <div
                          className="tab-pane fade"
                          id="SmartNatural"
                          role="tabpanel"
                          aria-labelledby="SmartNatural-tab"
                        >
                          <div className="Portfolio">
                            <a href="#!">
                              <img
                                className="card-img"
                                src="./images/All Profiles Color/Smart Natural Beach Grey.png"
                                alt=""
                              />
                            </a>
                            <div className="price">
                              <p className="price_p w-100 text-center">Price</p>
                            </div>
                            <div className="desc">
                              Smart Natural Smooth Beach Grey
                            </div>
                          </div>
                          <div className="Portfolio">
                            <a href="#!">
                              <img
                                className="card-img"
                                src="./images/All Profiles Color/Smart Natural Charcoal.png"
                                alt=""
                              />
                            </a>
                            <div className="price">
                              <p className="price_p w-100 text-center">Price</p>
                            </div>
                            <div className="desc">
                              Smart Natural Smooth Charcoal
                            </div>
                          </div>
                          <div className="Portfolio">
                            <a href="#!">
                              <img
                                className="card-img"
                                src="./images/All Profiles Color/Smart Natural Chocolate.png"
                                alt=""
                              />
                            </a>
                            <div className="price">
                              <p className="price_p w-100 text-center">Price</p>
                            </div>
                            <div className="desc">
                              Smart Natural Smooth Chocolate
                            </div>
                          </div>
                          <div className="Portfolio">
                            <a href="#!">
                              <img
                                className="card-img"
                                src="./images/All Profiles Color/Smart Natural Coffee Brown.png"
                                alt=""
                              />
                            </a>
                            <div className="price">
                              <p className="price_p w-100 text-center">Price</p>
                            </div>
                            <div className="price">
                              <p className="price_p w-100 text-center">Price</p>
                            </div>
                            <div className="desc">
                              Smart Natural Smooth Coffee Brown
                            </div>
                          </div>
                          <div className="Portfolio">
                            <a href="#!">
                              <img
                                className="card-img"
                                src="./images/All Profiles Color/Smart Natural Teak.png"
                                alt=""
                              />
                            </a>
                            <div className="price">
                              <p className="price_p w-100 text-center">Price</p>
                            </div>
                            <div className="desc">
                              Smart Natural Smooth Teak
                            </div>
                          </div>
                        </div>
                        {/* <!-- Smart Natural Images Filter End --> */}
                      </div>
                    </div>
                    <div
                      style={{
                        position: "absolute",
                        top: "34rem",
                        width: "100%"
                      }}
                    >
                      <button
                        className="btn btn-warning px-4 font-weight-bold"
                        style={{
                          borderRadius: "10px",
                          position: "absolute",
                          left: "10px"
                        }}
                        onClick={textureBack}
                      >
                        Back
                      </button>
                      <button
                        className="btn btn-success px-4 font-weight-bold next1"
                        style={{
                          borderRadius: "10px",
                          position: "absolute",
                          right: "10px"
                        }}
                        onClick={textureNext}
                      >
                        Next
                      </button>
                    </div>
                  </div>

                  {/* <!-- Filter Gallery End --> */}

                  {/* <!-- Inner Tabs End --> */}
                </div>
              </div>
              <div className="tab">
                <input type="radio" id="tab-4" name="tab-group-1" />
                <label htmlFor="tab-4">Calculation</label>
                <div className="content p-0 m-0">
                  <div className="calac-inner-tabs">
                    <div className="calac-inner-tab">
                      <input
                        type="radio"
                        name="tab-group-3"
                        id="calac-inner-tab-1"
                        defaultChecked={true}
                      />
                      <label htmlFor="calac-inner-tab-1">
                        <img
                          src="./images/SVG/Rectangle 540.svg"
                          id="first_calac"
                          className="OON"
                          alt="Rectangle"
                        />
                      </label>
                      <div className="inner-content m-0 mt-3 row">
                        <hr />
                        <div className="d-flex justify-content-center">
                          <img src="./images/SVG/Group 507.svg" alt="" />
                        </div>
                        <div
                          className="d-flex justify-content-around mx-3 mt-3"
                          style={{ position: "relative" }}
                        >
                          <div style={{ position: "relative" }}>
                            <input
                              type="text"
                              className="calac-input"
                              id="first_input_1"
                              style={{ width: "110px", height: "40px" }}
                            />
                            <label htmlFor="first_input_1" className="p-0 px-2">
                              A / M
                            </label>
                          </div>
                          <div style={{ position: "relative" }}>
                            <input
                              type="text"
                              className="calac-input"
                              id="first_input_2"
                              style={{ width: "110px", height: "40px" }}
                            />
                            <label htmlFor="first_input_2" className="p-0 px-2">
                              B / M
                            </label>
                          </div>
                        </div>
                        <div className="d-flex justify-content-around mx-3 mt-3">
                          <div style={{ position: "relative" }}>
                            <input
                              id="first_input_3"
                              type="text"
                              className="calac-input"
                              style={{ width: "110px", height: "40px" }}
                            />
                            <label htmlFor="first_input_3" className="p-0 px-2">
                              C / M
                            </label>
                          </div>
                          <div style={{ position: "relative" }}>
                            <input
                              type="text"
                              className="calac-input"
                              id="first_input_4"
                              style={{ width: "110px", height: "40px" }}
                            />
                            <label htmlFor="first_input_4" className="p-0 px-2">
                              D / M
                            </label>
                          </div>
                        </div>
                        <div className="d-flex justify-content-around mx-3 mt-3">
                          <div style={{ position: "relative" }}>
                            <input
                              id="first_input_5"
                              type="text"
                              className="calac-input"
                              style={{ width: "110px", height: "40px" }}
                            />
                            <label htmlFor="first_input_5" className="p-0 px-2">
                              E / M
                            </label>
                          </div>
                          <div style={{ position: "relative" }}>
                            <input
                              type="text"
                              className="calac-input"
                              id="first_input_6"
                              style={{ width: "110px", height: "40px" }}
                            />
                            <label htmlFor="first_input_6" className="p-0 px-2">
                              F / M
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="calac-inner-tab">
                      <input
                        type="radio"
                        name="tab-group-3"
                        id="calac-inner-tab-2"
                      />
                      <label htmlFor="calac-inner-tab-2">
                        <img
                          id="second_calac"
                          className="ON calac_tab_image"
                          src="./images/SVG/Rectangle 470.svg"
                          alt="Rectangle"
                        />
                      </label>
                      <div className="inner-content m-0 mt-3 row">
                        <hr />
                        <div className="d-flex justify-content-center">
                          <img src="./images/SVG/Group 508.svg" alt="" />
                        </div>
                        <div className="d-flex justify-content-around mx-3 mt-4">
                          <div style={{ position: "relative" }}>
                            <input
                              type="text"
                              className="calac-input"
                              id="second_input_1"
                              style={{ width: "110px", height: "40px" }}
                            />
                            <label
                              htmlFor="second_input_1"
                              className="p-0 px-2"
                            >
                              A / M
                            </label>
                          </div>
                          <div style={{ position: "relative" }}>
                            <input
                              type="text"
                              className="calac-input"
                              id="second_input_2"
                              style={{ width: "110px", height: "40px" }}
                            />
                            <label
                              htmlFor="second_input_1"
                              className="p-0 px-2"
                            >
                              B / M
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="calac-inner-tab">
                      <input
                        type="radio"
                        name="tab-group-3"
                        id="calac-inner-tab-3"
                      />
                      <label htmlFor="calac-inner-tab-3">
                        <img src="./images/SVG/Group 501.svg" alt="Rectangle" />
                      </label>
                      <div className="inner-content m-0 mt-3 row">
                        <hr />
                        <div className="d-flex justify-content-center">
                          <img src="./images/SVG/Group 509.svg" alt="" />
                        </div>
                        <div
                          className="d-flex justify-content-around mx-3 mt-3"
                          style={{ position: "relative" }}
                        >
                          <div style={{ position: "relative" }}>
                            <input
                              type="text"
                              className="calac-input"
                              id="third_input_1"
                              style={{ width: "110px", height: "40px" }}
                            />
                            <label htmlFor="third_input_1" className="p-0 px-2">
                              A / M
                            </label>
                          </div>
                          <div style={{ position: "relative" }}>
                            <input
                              type="text"
                              className="calac-input"
                              id="third_input_2"
                              style={{ width: "110px", height: "40px" }}
                            />
                            <label htmlFor="third_input_2" className="p-0 px-2">
                              B / M
                            </label>
                          </div>
                        </div>
                        <div className="d-flex justify-content-around mx-3 mt-3">
                          <div style={{ position: "relative" }}>
                            <input
                              id="third_input_3"
                              type="text"
                              className="calac-input"
                              style={{ width: "110px", height: "40px" }}
                            />
                            <label htmlFor="third_input_3" className="p-0 px-2">
                              C / M
                            </label>
                          </div>
                          <div style={{ position: "relative" }}>
                            <input
                              type="text"
                              className="calac-input"
                              id="third_input_4"
                              style={{ width: "110px", height: "40px" }}
                            />
                            <label htmlFor="third_input_4" className="p-0 px-2">
                              D / M
                            </label>
                          </div>
                        </div>
                        <div className="d-flex justify-content-around mx-3 mt-3">
                          <div style={{ position: "relative" }}>
                            <input
                              id="third_input_5"
                              type="text"
                              className="calac-input"
                              style={{ width: "110px", height: "40px" }}
                            />
                            <label htmlFor="third_input_5" className="p-0 px-2">
                              E / M
                            </label>
                          </div>
                          <div style={{ position: "relative" }}>
                            <input
                              type="text"
                              className="calac-input"
                              id="third_input_6"
                              style={{ width: "110px", height: "40px" }}
                            />
                            <label htmlFor="third_input_6" className="p-0 px-2">
                              F / M
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="calac-inner-tab">
                      <input
                        type="radio"
                        name="tab-group-3"
                        id="calac-inner-tab-4"
                      />
                      <label htmlFor="calac-inner-tab-4">
                        <img src="./images/SVG/Group 503.svg" alt="Rectangle" />
                      </label>
                      <div className="inner-content m-0 mt-3 row">
                        <hr />
                        <div className="d-flex justify-content-center">
                          <img src="./images/SVG/Group 504.svg" alt="" />
                        </div>
                        <div
                          className="d-flex justify-content-around mx-3 mt-3"
                          style={{ position: "relative" }}
                        >
                          <div style={{ position: "relative" }}>
                            <input
                              type="text"
                              className="calac-input"
                              id="fourth_input_1"
                              style={{ width: "110px", height: "40px" }}
                            />
                            <label
                              htmlFor="fourth_input_1"
                              className="p-0 px-2"
                            >
                              A / M
                            </label>
                          </div>
                          <div style={{ position: "relative" }}>
                            <input
                              type="text"
                              className="calac-input"
                              id="fourth_input_2"
                              style={{ width: "110px", height: "40px" }}
                            />
                            <label
                              htmlFor="fourth_input_2"
                              className="p-0 px-2"
                            >
                              B / M
                            </label>
                          </div>
                        </div>
                        <div className="d-flex justify-content-around mx-3 mt-3">
                          <div style={{ position: "relative" }}>
                            <input
                              id="fourth_input_3"
                              type="text"
                              className="calac-input"
                              style={{ width: "110px", height: "40px" }}
                            />
                            <label
                              htmlFor="fourth_input_3"
                              className="p-0 px-2"
                            >
                              C / M
                            </label>
                          </div>
                          <div style={{ position: "relative" }}>
                            <input
                              type="text"
                              className="calac-input"
                              id="fourth_input_4"
                              style={{ width: "110px", height: "40px" }}
                            />
                            <label
                              htmlFor="fourth_input_4"
                              className="p-0 px-2"
                            >
                              D / M
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="calac-inner-tab">
                      <input
                        type="radio"
                        name="tab-group-3"
                        id="calac-inner-tab-5"
                      />
                      <label htmlFor="calac-inner-tab-5">
                        <img src="./images/SVG/Path 4333.svg" alt="Rectangle" />
                      </label>
                      <div className="inner-content m-0 mt-3 row">
                        <hr />
                        <div className="d-flex justify-content-between mx-3 mt-3 border-bottom pb-3 border-dark">
                          <div className="d-flex justify-content-around w-50">
                            <div style={{ position: "relative" }}>
                              <input
                                type="text"
                                id="fiveth_input_1"
                                className="calac-input"
                                style={{ width: "80px", height: "30px" }}
                              />
                              <label
                                htmlFor="fiveth_input_1"
                                className="p-0 px-1"
                                style={{ fontSize: "x-small", top: "-6px" }}
                              >
                                Angle
                              </label>
                            </div>
                            <div style={{ position: "relative" }}>
                              <input
                                type="text"
                                id="fiveth_input_2"
                                className="calac-input"
                                style={{ width: "80px", height: "30px" }}
                              />
                              <label
                                htmlFor="fiveth_input_2"
                                className="p-0 px-1"
                                style={{ fontSize: "x-small", top: "-6px" }}
                              >
                                Angle
                              </label>
                            </div>
                            <div
                              style={{
                                position: "absolute",
                                top: "3.6rem",
                                textAlign: "center"
                              }}
                              className="w-100"
                            >
                              <p>A</p>
                            </div>
                          </div>
                          <div className="d-flex justify-content-around w-50">
                            <div style={{ position: "relative" }}>
                              <input
                                type="text"
                                id="fiveth_input_3"
                                className="calac-input"
                                style={{ width: "80px", height: "30px" }}
                              />
                              <label
                                htmlFor="fiveth_input_3"
                                className="p-0 px-1"
                                style={{ fontSize: "x-small", top: "-6px" }}
                              >
                                Angle
                              </label>
                            </div>
                            <div style={{ position: "relative" }}>
                              <input
                                type="text"
                                id="fiveth_input_4"
                                className="calac-input"
                                style={{ width: "80px", height: "30px" }}
                              />
                              <label
                                htmlFor="fiveth_input_4"
                                className="p-0 px-1"
                                style={{ fontSize: "x-small", top: "-6px" }}
                              >
                                Angle
                              </label>
                            </div>
                            <div
                              style={{
                                position: "absolute",
                                top: "3.6rem",
                                textAlign: "center"
                              }}
                              className="w-100"
                            >
                              <p>B</p>
                            </div>
                          </div>
                        </div>
                        <div className="d-flex justify-content-between mx-3 mt-3 border-bottom pb-3 border-dark">
                          <div className="d-flex justify-content-around w-50">
                            <div style={{ position: "relative" }}>
                              <input
                                type="text"
                                id="fiveth_input_5"
                                className="calac-input"
                                style={{ width: "80px", height: "30px" }}
                              />
                              <label
                                htmlFor="fiveth_input_5"
                                className="p-0 px-1"
                                style={{ fontSize: "x-small", top: "-6px" }}
                              >
                                Angle
                              </label>
                            </div>
                            <div style={{ position: "relative" }}>
                              <input
                                type="text"
                                id="fiveth_input_6"
                                className="calac-input"
                                style={{ width: "80px", height: "30px" }}
                              />
                              <label
                                htmlFor="fiveth_input_6"
                                className="p-0 px-1"
                                style={{ fontSize: "x-small", top: "-6px" }}
                              >
                                Angle
                              </label>
                            </div>
                            <div
                              style={{
                                position: "absolute",
                                top: "7.6rem",
                                textAlign: "center"
                              }}
                              className="w-100"
                            >
                              <p>C</p>
                            </div>
                          </div>
                          <div className="d-flex justify-content-around w-50">
                            <div style={{ position: "relative" }}>
                              <input
                                type="text"
                                id="fiveth_input_7"
                                className="calac-input"
                                style={{ width: "80px", height: "30px" }}
                              />
                              <label
                                htmlFor="fiveth_input_7"
                                className="p-0 px-1"
                                style={{ fontSize: "x-small", top: "-6px" }}
                              >
                                Angle
                              </label>
                            </div>
                            <div style={{ position: "relative" }}>
                              <input
                                type="text"
                                id="fiveth_input_8"
                                className="calac-input"
                                style={{ width: "80px", height: "30px" }}
                              />
                              <label
                                htmlFor="fiveth_input_8"
                                className="p-0 px-1"
                                style={{ fontSize: "x-small", top: "-6px" }}
                              >
                                Angle
                              </label>
                            </div>
                            <div
                              style={{
                                position: "absolute",
                                top: "7.6rem",
                                textAlign: "center"
                              }}
                              className="w-100"
                            >
                              <p>D</p>
                            </div>
                          </div>
                        </div>
                        <div className="d-flex justify-content-between mx-3 mt-3 border-bottom pb-3 border-dark">
                          <div className="d-flex justify-content-around w-50">
                            <div style={{ position: "relative" }}>
                              <input
                                type="text"
                                id="fiveth_input_9"
                                className="calac-input"
                                style={{ width: "80px", height: "30px" }}
                              />
                              <label
                                htmlFor="fiveth_input_9"
                                className="p-0 px-1"
                                style={{ fontSize: "x-small", top: "-6px" }}
                              >
                                Angle
                              </label>
                            </div>
                            <div style={{ position: "relative" }}>
                              <input
                                type="text"
                                id="fiveth_input_10"
                                className="calac-input"
                                style={{ width: "80px", height: "30px" }}
                              />
                              <label
                                htmlFor="fiveth_input_10"
                                className="p-0 px-1"
                                style={{ fontSize: "x-small", top: "-6px" }}
                              >
                                Angle
                              </label>
                            </div>
                            <div
                              style={{
                                position: "absolute",
                                top: "11.5rem",
                                textAlign: "center"
                              }}
                              className="w-100"
                            >
                              <p>E</p>
                            </div>
                          </div>
                          <div className="d-flex justify-content-around w-50">
                            <div style={{ position: "relative" }}>
                              <input
                                type="text"
                                id="fiveth_input_11"
                                className="calac-input"
                                style={{ width: "80px", height: "30px" }}
                              />
                              <label
                                htmlFor="fiveth_input_11"
                                className="p-0 px-11"
                                style={{ fontSize: "x-small", top: "-6px" }}
                              >
                                Angle
                              </label>
                            </div>
                            <div style={{ position: "relative" }}>
                              <input
                                type="text"
                                id="fiveth_input_12"
                                className="calac-input"
                                style={{ width: "80px", height: "30px" }}
                              />
                              <label
                                htmlFor="fiveth_input_12"
                                className="p-0 px-1"
                                style={{ fontSize: "x-small", top: "-6px" }}
                              >
                                Angle
                              </label>
                            </div>
                            <div
                              style={{
                                position: "absolute",
                                top: "11.5rem",
                                textAlign: "center"
                              }}
                              className="w-100"
                            >
                              <p>F</p>
                            </div>
                          </div>
                        </div>
                        <div className="d-flex justify-content-between mx-3 mt-3 border-bottom pb-3 border-dark">
                          <div className="d-flex justify-content-around w-50">
                            <div style={{ position: "relative" }}>
                              <input
                                type="text"
                                id="fiveth_input_13"
                                className="calac-input"
                                style={{ width: "80px", height: "30px" }}
                              />
                              <label
                                htmlFor="fiveth_input_13"
                                className="p-0 px-1"
                                style={{ fontSize: "x-small", top: "-6px" }}
                              >
                                Angle
                              </label>
                            </div>
                            <div style={{ position: "relative" }}>
                              <input
                                type="text"
                                id="fiveth_input_14"
                                className="calac-input"
                                style={{ width: "80px", height: "30px" }}
                              />
                              <label
                                htmlFor="fiveth_input_14"
                                className="p-0 px-1"
                                style={{ fontSize: "x-small", top: "-6px" }}
                              >
                                Angle
                              </label>
                            </div>
                            <div
                              style={{
                                position: "absolute",
                                top: "15.4rem",
                                textAlign: "center"
                              }}
                              className="w-100"
                            >
                              <p>G</p>
                            </div>
                          </div>
                          <div className="d-flex justify-content-around w-50">
                            <div style={{ position: "relative" }}>
                              <input
                                type="text"
                                id="fiveth_input_15"
                                className="calac-input"
                                style={{ width: "80px", height: "30px" }}
                              />
                              <label
                                htmlFor="fiveth_input_15"
                                className="p-0 px-1"
                                style={{ fontSize: "x-small", top: "-6px" }}
                              >
                                Angle
                              </label>
                            </div>
                            <div style={{ position: "relative" }}>
                              <input
                                type="text"
                                id="fiveth_input_16"
                                className="calac-input"
                                style={{ width: "80px", height: "30px" }}
                              />
                              <label
                                htmlFor="fiveth_input_16"
                                className="p-0 px-1"
                                style={{ fontSize: "x-small", top: "-6px" }}
                              >
                                Angle
                              </label>
                            </div>
                            <div
                              style={{
                                position: "absolute",
                                top: "15.4rem",
                                textAlign: "center"
                              }}
                              className="w-100"
                            >
                              <p>H</p>
                            </div>
                          </div>
                        </div>
                        <div className="d-flex justify-content-between mx-3 mt-3">
                          <div className="d-flex justify-content-around w-50">
                            <div style={{ position: "relative" }}>
                              <input
                                type="text"
                                id="fiveth_input_17"
                                className="calac-input"
                                style={{ width: "80px", height: "30px" }}
                              />
                              <label
                                htmlFor="fiveth_input_17"
                                className="p-0 px-1"
                                style={{ fontSize: "x-small", top: "-6px" }}
                              >
                                Angle
                              </label>
                            </div>
                            <div style={{ position: "relative" }}>
                              <input
                                type="text"
                                id="fiveth_input_18"
                                className="calac-input"
                                style={{ width: "80px", height: "30px" }}
                              />
                              <label
                                htmlFor="fiveth_input_18"
                                className="p-0 px-1"
                                style={{ fontSize: "x-small", top: "-6px" }}
                              >
                                Angle
                              </label>
                            </div>
                            <div
                              style={{
                                position: "absolute",
                                top: "19.6rem",
                                textAlign: "center"
                              }}
                              className="w-100"
                            >
                              <p>I</p>
                            </div>
                          </div>
                          <div className="d-flex justify-content-around w-50">
                            <div style={{ position: "relative" }}>
                              <input
                                type="text"
                                id="fiveth_input_19"
                                className="calac-input"
                                style={{ width: "80px", height: "30px" }}
                              />
                              <label
                                htmlFor="fiveth_input_19"
                                className="p-0 px-1"
                                style={{ fontSize: "x-small", top: "-6px" }}
                              >
                                Angle
                              </label>
                            </div>
                            <div style={{ position: "relative" }}>
                              <input
                                type="text"
                                id="fiveth_input_20"
                                className="calac-input"
                                style={{ width: "80px", height: "30px" }}
                              />
                              <label
                                htmlFor="fiveth_input_20"
                                className="p-0 px-1"
                                style={{ fontSize: "x-small", top: "-6px" }}
                              >
                                Angle
                              </label>
                            </div>
                            <div
                              style={{
                                position: "absolute",
                                top: "19.6rem",
                                textAlign: "center"
                              }}
                              className="w-100"
                            >
                              <p>J</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="calac-inner-tab">
                      <input
                        type="radio"
                        name="tab-group-3"
                        id="calac-inner-tab-6"
                      />
                      <label htmlFor="calac-inner-tab-6">
                        <img src="./images/SVG/Path 4335.svg" alt="Rectangle" />
                      </label>
                      <div className="inner-content m-0 mt-3 row">
                        <hr />
                        <div className="d-flex justify-content-center">
                          <img src="./images/SVG/Group 506.svg" alt="" />
                        </div>
                        <div
                          className="d-flex justify-content-around mx-3 mt-3"
                          style={{ position: "relative" }}
                        >
                          <div style={{ position: "relative" }}>
                            <input
                              type="text"
                              className="calac-input"
                              id="sixth_input_1"
                              style={{ width: "110px", height: "40px" }}
                            />
                            <label htmlFor="sixth_input_1" className="p-0 px-2">
                              A / M
                            </label>
                          </div>
                          <div style={{ position: "relative" }}>
                            <input
                              type="text"
                              className="calac-input"
                              id="sixth_input_2"
                              style={{ width: "110px", height: "40px" }}
                            />
                            <label htmlFor="sixth_input_2" className="p-0 px-2">
                              B / M
                            </label>
                          </div>
                        </div>
                        <div className="d-flex justify-content-around mx-3 mt-3">
                          <div style={{ position: "relative" }}>
                            <input
                              id="sixth_input_3"
                              type="text"
                              className="calac-input"
                              style={{ width: "110px", height: "40px" }}
                            />
                            <label htmlFor="sixth_input_3" className="p-0 px-2">
                              C / M
                            </label>
                          </div>
                          <div style={{ position: "relative" }}>
                            <input
                              type="text"
                              className="calac-input"
                              id="sixth_input_4"
                              style={{ width: "110px", height: "40px" }}
                            />
                            <label htmlFor="sixth_input_4" className="p-0 px-2">
                              D / M
                            </label>
                          </div>
                        </div>
                        <div className="d-flex justify-content-center mx-3 mt-3">
                          <div style={{ position: "relative" }}>
                            <input
                              type="text"
                              id="sixth_input_5"
                              className="calac-input"
                              style={{ width: "200px", height: "40px" }}
                            />
                            <label htmlFor="sixth_input_5" className="p-0 px-2">
                              E / M
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <!-- Inner Tabs End --> */}
                  <div
                    style={{
                      position: "absolute",
                      top: "32rem",
                      left: "30px",
                      width: "100%"
                    }}
                  >
                    <button
                      className="btn btn-warning px-4 font-weight-bold"
                      style={{
                        borderRadius: "10px",
                        position: "absolute",
                        left: "0"
                      }}
                      onClick={calculationBack}
                    >
                      Back
                    </button>
                    <button
                      className="btn btn-success px-4 font-weight-bold next1"
                      style={{
                        borderRadius: "10px",
                        position: "absolute",
                        right: "50px"
                      }}
                      onClick={calculationNext}
                    >
                      Next
                    </button>
                  </div>
                </div>
              </div>
              <div className="tab">
                <input type="radio" id="tab-5" name="tab-group-1" />
                <label htmlFor="tab-5">Pricing</label>
                <div className="content">
                  <div style={{ position: "relative", width: "100%" }}>
                    hello world
                  </div>
                  <div
                    style={{
                      position: "absolute",
                      top: "20rem",
                      width: "100%"
                    }}
                  >
                    <button
                      className="btn btn-warning px-4 font-weight-bold"
                      style={{
                        borderRadius: "10px",
                        position: "absolute",
                        left: "0"
                      }}
                      onClick={pricingBack}
                    >
                      Back
                    </button>
                    <button
                      className="btn btn-success px-4 font-weight-bold next1"
                      style={{
                        borderRadius: "10px",
                        position: "absolute",
                        right: "0"
                      }}
                      onClick={pricingNext}
                    >
                      Next
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Main Tabs End --> */}
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default MainSection;
