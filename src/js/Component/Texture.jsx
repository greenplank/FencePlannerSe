import React, { useState, useEffect } from "react";
import textures_data from "./../../textures";
import CheckIcon from "@material-ui/icons/Check";
import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
const Textures = (props) => {
  const [cat, setCat] = useState(textures_data[0].cat);
  const [cat_list, set_cat_list] = useState([]);
  const [textures, set_textures] = useState([]);

  useEffect(() => {
    let text = removeDups(textures_data.map((tex) => tex.cat.trim()));
    // text.unshift("all");
    set_cat_list([...text]);
    setTextures(cat);
  }, []);

  useEffect(()=>{
    if(textures.length){
      props.select_board(textures[0][0]);
    }
    console.log("change cat-> boards->", textures)
  }, [textures])

  const setTextures = (ct) => {
    const cur_txtrs =
      ct == "all"
        ? textures_data
        : textures_data.filter((tx) => tx.cat.trim() == ct);
    if (cur_txtrs.length <= 9) {
      set_textures([[...cur_txtrs]]);
    } else {
      let no_of_slides = cur_txtrs.length / 9;
      no_of_slides = isInt(no_of_slides)
        ? no_of_slides
        : Math.ceil(no_of_slides);
      let temp = [];
      for (let c = 1; c <= no_of_slides; c++) {
        temp = [
          ...temp,
          cur_txtrs.slice(
            (c - 1) * 9,
            9 * c <= cur_txtrs.length ? 9 * c : cur_txtrs.length
          ),
        ];
      }


      set_textures([...temp]);
    }
  }; 

  const onSelectCat = (ct) => {
    setCat(ct);
    setTextures(ct);
  };

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <div className="pannel-container p-0">
        <div className="custTabNav">
          {cat_list.map((cato) => {
            return (
              <button
                key={cato}
                onClick={() => onSelectCat(cato)}
                className={`custTabNavMenu btn btn-${
                  cat == cato ? "success" : "outline-success"
                } btn-sm mr-2 mb-2`}
              >
                {cato}
              </button>
            );
          })}
        </div>
        <Slider {...settings}>
          {textures.map((textures, index) => (
            <div key={index}>
              <div
                className="custTabPannel mt-3"
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "center",
                }}
              >
                {textures.map((texture) => (
                  <div
                    key={texture.st_name}
                    className="img_cont img-cont-text m-2 d-inline-block"
                    onClick={() => props.select_board(texture)}
                    style={{
                      position: "relative",
                      borderRadius: "10px",
                      overflowX: "hidden",
                      overflowY: "hidden",
                    }}
                  >
                    <div
                      style={{
                        position: "absolute",
                        top: "0",
                        left: "0",
                        color: "white",
                        width: "40px",
                        height: "40px",
                        clipPath: "polygon(100% 0, 0 0, 0 100%)",
                      }}
                      className={`checker bg-${
                        props.selected_board.st_name.trim() ==
                        texture.st_name.trim()
                          ? "success"
                          : "light"
                      }`}
                    >
                      <CheckIcon color="inherit" />
                    </div>
                    <img
                      style={{ width: "120px", height: "100px" }}
                      className={`border border-success`}
                      src={texture.img}
                      alt=""
                    />
                    <p
                      style={{
                        width: "120px",
                        lineHeight: "12px",
                        fontSize: "10px",
                      }}
                      className="m-0 mt-1 text-center"
                    >
                      {texture.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </Slider>
        
      </div>
    </>
  );
  
};

export default Textures;

//helpers

// remove duplicates entries of string in string array
function removeDups(names) {
  let unique = {};
  names.forEach(function (i) {
    if (!unique[i]) {
      unique[i] = true;
    }
  });
  return Object.keys(unique);
}

function isInt(n) {
  return n % 1 === 0;
}
