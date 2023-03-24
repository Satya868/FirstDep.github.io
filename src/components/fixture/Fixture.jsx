import React from "react";
import { useState } from "react";
import "./Fixture.css";
import Leagues from "./Leagues";
import Standings from "./Standings";

const Fixture = () => {
  const [active, setActive] = useState(true);

  return (
    <>
      <div
        className="fix_tl"
        style={{ maxWidth: "85.4rem", backgroundColor: "#e9ecef" }}
      >
        <h1
          style={{ marginLeft: "27rem", color: "#343a40", wordWrap: "normal" }}
        >
          😂ALL ABOUT FOOTBALL ⚽
        </h1>
      </div>
      <div className="tabs">
        <div className="tabs2">
          <div className="tab-leagues" onClick={() => setActive(true)}>
            <h3 style={{ color: active ? "green" : "whitesmoke" }}>Leagues</h3>
          </div>
          <div className="tab-standings" onClick={() => setActive(false)}>
            <h3 style={{ color: !active ? "green" : "whitesmoke" }}>
              Standings
            </h3>
          </div>
        </div>
      </div>
      <div className="activeS" style={{ maxWidth: "85.4rem" }}>
        {active ? <Leagues /> : <Standings />}
      </div>
    </>
  );
};

export default Fixture;
