import React, { useState, useEffect } from "react";
import Tabs from "./../utils/Tabs";
import EnvironmentSelecter from "./EnvironmentSelector";
import Textures from "./Texture";
import Calculation from "./Calculation";
import shapes from "./../../shapes";
import textures from "../../textures";
import SavePlan from "./SavePlan";
import validator from "validator";
import axios from "axios";
import Slider from "./Slider";
// import PriceCalculation from "./PriceCalculation";

const Main = () => {
  const [email, set_email] = useState("");
  const [view, set_view] = useState("./images/home_plaster_aa1.jpg");
  const [primary_environment, set_primary_environment] = useState("home");
  const [error, set_error] = useState("");
  const [scene, set_scene] = useState("plaster");
  const [selected_board, set_selected_board] = useState({
    name: "Classic Beach Grey Narrow Groove",
    img: "https://i.ibb.co/vJNnPZN/Classic-Side-1-Beach-Grey.png",
    desc: "Narrow lines",
    cat: "Classic",
    price: "",
    st_name: "aa1",
   //size unit is  mm
    size: {
      l: "3800",
      t: "24",
      w: "135",
      ac: "7.1"
    },
    j_dis: "2.00",
    j_length:"3600",
    no_pestals:"4",
    typeimage: "classic_narrow.png",
    fixigkit: "7"
  });
  const [shape, set_shape] = useState("square");

  const [result, set_result] = useState(1);
  const [no_of_planks, set_no_planks] = useState(1);
  const [no_of_joists, set_no_joists] = useState(1);
  const [no_of_pedestals, set_no_pedestals] = useState(1);
  const [no_of_border, set_no_border] = useState(1);
  const [ fixing_kit_measure, set_fixing_kit_measure] = useState()

  const [points, set_points] = useState({
    a: 1,
    b: 1,
    c: 1,
    d: 1,
    e: 1,
    f: 1
  });

  function build_plan() {
    let sec = `isPlanned=true&env=${primary_environment.trim()}&scene=${scene.trim()}&texture=${selected_board.st_name.trim()}&shape=${shape.trim()}`;
    Object.keys(points).forEach(
      p_name => (sec = sec + "&" + p_name + "=" + points[p_name])
    );
    // const complete_url =  + sec;
    return sec;
  }

  const save_plane = () => {
    if (validator.isEmpty(email)) {
      set_error("email should not be empty");
      return false;
    } else if (!validator.isEmail(email)) {
      set_error("please enter a valid email \n i-e yourmail@example.com");
    } else {
      set_error("");
      const plan_path = build_plan();
      axios
        .post("/share_plan", { email, path: plan_path })
        .then(res => {
          console.log(res.data);
        })
        .catch(err => {
          if (err.response) {
            console.log(err.response.data);
          } else {
            console.log(err);
          }
        });
    }
    // console.log(build_plan());
  };

  const updateView = (env, scene, board) => {
    const baseurl = "./images/";
    const build_image_url = `${baseurl}${env.trim()}_${scene}_${board.st_name.trim()}.jpg`;
    set_view(build_image_url);
  };

  const on_update_env = env => {
    set_primary_environment(env);
    let sc = env == "home" ? "plaster" : "standard";
    set_scene(sc);
    updateView(env, sc, selected_board);
  };

  function on_update_scene(scene) {
    set_scene(scene);

    updateView(primary_environment, scene, selected_board);
  }

  function on_select_board(board) {
    set_selected_board({ ...board });
    updateView(primary_environment, scene, board);
  }

  function on_set_shape(shape) {
    set_points({
      a: 1,
      b: 1,
      c: 1,
      d: 1,
      e: 1,
      f: 1
    });
    set_result(1);
    set_shape(shape);
  }

  function on_change_point_value(e) {
    const value = Number(e.target.value);
    if (typeof value == "number" && !isNaN(value) && value > 0) {
      set_points({ ...points, [e.target.name]: value });
      // console.log()
      calc_result({ ...points, [e.target.name]: value }, shape);
    }
    if (e.target.value.trim() == "") {
      set_points({ ...points, [e.target.name]: e.target.value });
      set_result("please correct the input values");
    }
  }

  function calc_result(points, shape) {
    const formulas = {
      square: points.a * points.b,
      dsquare: points.a * points.b - points.c * points.d,
      lshape: points.a * points.b + (points.c + points.a) * points.d,
      cshape:
        points.a * points.b +
        (points.f - points.d) * points.c +
        points.f * points.e,
      pantagon:
        points.c * points.d +
        (points.e - points.c) * points.a +
        ((points.d - points.a) * (points.e - points.c)) / 2
    };
    const result = formulas[shape];
    if (result < 1) {
      set_result("invalid inputs please correct ....");
      return false;
    } else {
      set_result(result);
      const no_of_planks =
        (selected_board.size.ac * result) / (selected_board.size.l / 1000);
      const joists =
        (selected_board.j_dis * result) / (selected_board.j_length / 1000);
      const no_of_pedestals = selected_board.no_pestals * result
      // console.log(no_of_planks)
      set_no_planks(Math.ceil(no_of_planks));
      set_no_joists(Math.ceil(joists))
      set_no_pedestals(Math.ceil(no_of_pedestals));
      set_fixing_kit_measure(Math.ceil(result/selected_board.fixigkit))
    }
  }

  useEffect(() => {
    const isPLaned = getUrlParameter("isPlanned");
    if (isPLaned) {
      set_primary_environment(getUrlParameter("env"));
      set_scene(getUrlParameter("scene"));
      set_selected_board(
        textures.filter(
          text => text.st_name.trim() == getUrlParameter("texture").trim()
        )[0]
      );
      set_shape(getUrlParameter("shape"));
      set_points({
        a: getUrlParameter("a"),
        b: getUrlParameter("b"),
        c: getUrlParameter("c"),
        d: getUrlParameter("d"),
        e: getUrlParameter("e"),
        f: getUrlParameter("f")
      });
      updateView(
        getUrlParameter("env"),
        getUrlParameter("scene"),
        textures.filter(
          text => text.st_name.trim() == getUrlParameter("texture").trim()
        )[0]
        // getUrlParameter("texture").trim()
      );
      calc_result(
        {
          a: getUrlParameter("a"),
          b: getUrlParameter("b"),
          c: getUrlParameter("c"),
          d: getUrlParameter("d"),
          e: getUrlParameter("e"),
          f: getUrlParameter("f")
        },
        getUrlParameter("shape")
      );
    }
  }, []);

  const pannels = [
    {
      id: "1a",
      name: "Environment",
      component: (
        <EnvironmentSelecter
          selected_enviroment={primary_environment}
          set_selected_enviroment={on_update_env}
          on_update_scene={on_update_scene}
          scene={scene}
        />
      )
    },
    {
      id: "1a",
      name: "Fence",
      component: (
        <Textures
          selected_board={selected_board}
          select_board={on_select_board}
        />
      )
    },
    {
      id: "1a",
      name: "Package",
      component: (
        <Slider
          selected_shape={shape}
          on_select_shape={on_set_shape}
          on_change_point_value={on_change_point_value}
          points={points}
          result={result}
          no_of_planks={no_of_planks}
          no_of_joists={no_of_joists}
          no_of_pedestals={no_of_pedestals}
          fixing_kit_measure={fixing_kit_measure}
        />
      )
    },
    {
      id: "1a",
      name: "Save Plan",
      component: (
        <SavePlan
          email={email}
          set_email={set_email}
          save_plan={save_plane}
          error={error}
        />
      )
    }
  ];

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-8 p-0">
            <img
              className="main-view"
              src={view}
              alt="House"
              width="100%"
              // height="100%"
              id="hero-img"
              //style={{ height: "100vh" }}
              // img={view}
            />
          </div>
          <div className="col-md-4 p-0 tab-container">
            <Tabs tabs={pannels} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;

// helpers

var getUrlParameter = function getUrlParameter(sParam) {
  var sPageURL = window.location.search.substring(1),
    sURLVariables = sPageURL.split("&"),
    sParameterName,
    i;

  for (i = 0; i < sURLVariables.length; i++) {
    sParameterName = sURLVariables[i].split("=");

    if (sParameterName[0] === sParam) {
      return sParameterName[1] === undefined
        ? true
        : decodeURIComponent(sParameterName[1]);
    }
  }
};
