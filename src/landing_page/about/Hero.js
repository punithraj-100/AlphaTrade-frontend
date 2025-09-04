import React from "react";

function Hero() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 mb-5">
        <h1 className="fs-2 text-center">
          We pioneered the discount broking model in India
          <br />
          Now, we are breaking ground with our technology.
        </h1>
      </div>

      <div
        className="row p-5 mt-5 border-top text-muted"
        style={{ lineHeight: "1.8", fontSize: "1.2em" }}
      >
        <div className="col-6 p-5">
          <p>
            We kick-started AlphaTrade in 2025 with the vision of simplifying trading and investing for everyone. Our goal is to remove the barriers that students, beginners, and aspiring traders face in terms of learning, cost, and access to technology. The name AlphaTrade comes from the idea of achieving “Alpha” — the edge in trading.
          </p>
          <p>
            Even as a student-led project, AlphaTrade is built to be more than just a prototype. With a focus on user-friendly design, transparency, and innovation, our platform aims to empower the next generation of investors and traders.
          </p>
          <p>
            AlphaTrade is not just about placing trades; it’s about learning by doing, experimenting with strategies, and gaining practical exposure to the world of finance.
          </p>
        </div>
        <div className="col-6 p-5">
          <p>
            In addition, we run a number of open online learning and community initiatives to help students, beginners, and aspiring traders understand the markets better.
          </p>
          <p>
            
            AlphaLabs, our small incubation effort, explores ideas around trading tools, investment education, and financial literacy with the goal of making markets more accessible to everyone.
          </p>
          <p>
            And yet, we are always building something new every day. You can catch our latest updates on the AlphaTrade blog or see what learners and early users are saying about us.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;