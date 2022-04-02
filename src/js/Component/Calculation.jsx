import React from "react";
import shapes from "./../../shapes";

const Calculation = ({
  selected_shape,
  on_select_shape,
  on_change_point_value,
  points,
  result,
  no_of_planks,
  no_of_joists,
  no_of_pedestals,
  fixing_kit_measure,
}) => {
  //   function onMouseIn(event) {
  //     console.log(event.target);
  //   }
  return (
    <>
      <div id="scroll-bar-none" style={{ height: "80vh", overflowY: "scroll" }}>
        <div className="shape-selector d-flex justify-content-around">
          {shapes.map((shape, index) => {
            return (
              <div
                className="shape mr-2 mt-2"
                style={{ width: "80px", height: "80px", cursor: "pointer" }}
                onClick={() => on_select_shape(shape.name)}
              >
                <img
                  style={{ width: "100%", height: "100%" }}
                  src={`./images/SVG/${
                    shape.name == selected_shape
                      ? shape.shapes.s
                      : shape.shapes.o
                  }.png`}
                  //   onMouseEnter={(e)=>onMouseIn(e)}
                  alt=""
                />
              </div>
            );
          })}
        </div>
        <div className="d-flex justify-content-center display-b-shape mt-3">
          <div className="shape-dis" style={{ width: "200px" }}>
            <img
              width="100%"
              src={`./images/SVG/${
                shapes.filter((s) => s.name.trim() === selected_shape.trim())[0]
                  .shapes.d
              }.png`}
              alt=""
            />
          </div>
        </div>
        <div className="calculations">
          <div className="row">
            {shapes
              .filter((s) => s.name.trim() === selected_shape.trim())[0]
              .calculations.map((p, i) => {
                return (
                  <div className="col-6">
                    <div className="form-group">
                      <label htmlFor={p + "a11"}>{p}/meters</label>
                      <input
                        type="text"
                        name={p}
                        className="form-control"
                        id={p + "a11"}
                        onChange={on_change_point_value}
                        value={points[p]}
                      />
                    </div>
                  </div>
                );
              })}
          </div>
          <div className="form-group">
            <label htmlFor="calculated-result">
              Total Area M²{" "}
              <i>
                formula:{" "}
                {
                  shapes.filter(
                    (s) => s.name.trim() === selected_shape.trim()
                  )[0].formula
                }
              </i>
            </label>
            <input
              type="text"
              value={result}
              id="calculated-result"
              readOnly
              className="form-control"
            />
          </div>
          <h5>Material Required</h5>
          <div>
            <p>
              <b>Decking: </b>
              <b>{no_of_planks}</b> pcs of boards are required to cover{" "}
              <b>{result}</b> square meters area
            </p>
            <p>
              <b>Joict: </b>
              <b>{no_of_joists}</b> pcs joists are required to build frame for{" "}
              <b>{result}</b> square meters deck floor
            </p>
            <p>
              <b>PEDESTALS: </b>
              <b>{no_of_pedestals}</b> pedestals needed to cover the area of{" "}
              <b>{result}</b> square meters
            </p>
            {fixing_kit_measure == result ? (
              ""
            ) : (
              <p>
                <b>Fixing Kit: </b>
                <b>{fixing_kit_measure}</b> Fixing kit needed to fix the area of{" "}
                <b>{result}</b> square meters
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Calculation;
