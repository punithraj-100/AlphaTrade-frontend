import React from "react";

function Team() {
  return (
    <div className="container">
      <div className="row p-3 mt-5 border-top">
        <h1 className="text-center ">People</h1>
      </div>

      <div
        className="row p-3 text-muted"
        style={{ lineHeight: "1.8", fontSize: "1.2em" }}
      >
        <div className="col-6 p-3 text-center">
          <img
            src="media/images/ceo.jpg"
            alt="Punith Raj K, Founder of AlphaTrade"
            style={{ borderRadius: "100%", width: "50%" }}
          />
          <h4 className="mt-5">Punith Raj K</h4>
          <h6>Founder</h6>
        </div>
        <div className="col-6 p-3">
          <p>
            Punith bootstrapped and founded AlphaTrade in 2025 to bridge the gap between technology and trading, after experiencing the challenges faced by new traders in the market. Today, AlphaTrade is on a mission to make investing simple, transparent, and accessible for everyone.
          </p>
          <p>
            He is passionate about financial innovation and is actively working towards building tools that empower the next generation of investors.
          </p>
          
          <p>
            
            Connect on <a href="/">Homepage</a> / <a href="/">TradingQnA</a> /{" "}
            <a href="https://twitter.com">Twitter</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;

