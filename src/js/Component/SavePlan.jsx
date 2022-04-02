import React from "react";

const SavePlan = ({ email, set_email, save_plan, error }) => {
  return (
    <>
      <div className="form-group">
        <label htmlFor="Email">Email</label>
        <input
          type="text"
          value={email}
          onChange={(e) => set_email(e.target.value)}
          className="form-control"
          id="Email"
          placeholder="yourmail@example.com"
        />
        <p
          className={`alert alert-danger d-${
            Boolean(error.trim()) ? "" : "none"
          }`}
        >
          <small>{error}</small>
        </p>
      </div>
      <div className="d-flex justify-content-center">
        <button className="btn-success btn" onClick={save_plan}>
          Save Plan
        </button>
        <button className="btn-success btn" style={{ marginLeft: "1em" }}>
          <a
            style={{ textDecoration: "none", color: "white" }}
            href="https://ebygghandel.se/"
          >
            Shop Now
          </a>
        </button>
      </div>
    </>
  );
};

export default SavePlan;
