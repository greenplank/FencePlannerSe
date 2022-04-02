import CheckIcon from "@material-ui/icons/Check";
import React, { useState } from "react";

const EnvironmentSelector = ({
  selected_enviroment,
  set_selected_enviroment,
  on_update_scene,
  scene
}) => {
  const env_preset = {
    home: {
      name: "Home",
      avaliable_variations: [
        {
          name: "plaster",
          img: "https://i.ibb.co/zmyhWCc/Plaster.jpg"
        },
        {
          name: "brick",
          img: "https://i.ibb.co/DK742cg/Bricks.jpg"
        },
        {
          name: "board",
          img: "https://i.ibb.co/s27rKCJ/cladding-Copy.jpg"
        }
      ]
    },
    
  };

  return (
    <>
      <div className="custTabNav d-none">
        {Object.keys(env_preset).map((key, index) => {
          return (
            <button
              onClick={() => {
                set_selected_enviroment(key);
              }}
              key={key}
              className={`custTabNavMenu btn btn-${
                selected_enviroment == key ? "success" : "outline-success"
              } mt-2 mr-2`}
            >
              {env_preset[key].name}
            </button>
          );
        })}
      </div>
      <div
        className="custTabPannel mt-3"
        style={{ display: "flex", flexWrap: "wrap" }}
      >
        {env_preset[selected_enviroment].avaliable_variations.length ? (
          env_preset[selected_enviroment].avaliable_variations.map(vari => {
            return (
              <div
                key={vari.name}
                onClick={() => on_update_scene(vari.name)}
                className="img_cont m-2"
                style={{ position: "relative", cursor: "pointer" }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: "0",
                    left: "0",
                    color: "white",
                    width: "40px",
                    height: "40px",
                    clipPath: "polygon(100% 0, 0 0, 0 100%)"
                  }}
                  className={`checker bg-${
                    vari.name.trim() == scene.trim() ? "success" : "light"
                  }`}
                >
                  <CheckIcon color="inherit" />
                </div>
                <img
                  style={{ width: "100px", height: "100px" }}
                  src={vari.img}
                  alt=""
                />
                <p
                  style={{
                    position: "absolute",
                    bottom: 0,
                    backgroundColor: "rgba(1, 1,1,0.5"
                  }}
                  className="m-0 text-light w-100 text-center"
                >
                  <small>{vari.name}</small>
                </p>
              </div>
            );
          })
        ) : (
          <p>No Variatian avaliable at the moment</p>
        )}
      </div>
    </>
  );
};

export default EnvironmentSelector;
