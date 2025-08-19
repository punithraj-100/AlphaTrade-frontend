import React from "react";

function Footer() {
  return (
    <footer style={{ backgroundColor: "rgb(250, 250, 250)" }}>
      <div className="container border-top mt-5">
        <div className="row mt-5">
          <div className="col">
            <img src="media/images/mainLogo.png" style={{ width: "50%" }} />
            <p>
              &copy; 2024 AlphaTrade Technologies. All rights reserved.
            </p>
          </div>
          <div className="col">
            <p>Company</p>
            <a href="">About</a>
            <br />
            <a href="">Products</a>
            <br />
            <a href="">Pricing</a>
            <br />
            <a href="">Careers</a>
            <br />
            <a href="">AlphaTech Blog</a>
            <br />
            <a href="">Press & Media</a>
            <br />
            <a href="">CSR Initiatives</a>
            <br />
          </div>
          <div className="col">
            <p>Support</p>
            <a href="">Help Center</a>
            <br />
            <a href="">Blog & Updates</a>
            <br />
            <a href="">List of charges</a>
            <br />
            <a href="">Downloads & Resources</a>
            <br />
          </div>
          <div className="col">
            <p>Account</p>
            <a href="">Open an account</a>
            <br />
            <a href="">Fund transfer</a>
            <br />
            <a href="">Reports & Statements</a>
            <br />
            <a href="">Trading Challenge</a>
            <br />
          </div>
        </div>
        <div className="mt-5 text-muted" style={{ fontSize: "14px" }}>
          <p>
            AlphaTrade Technologies is an independent trading and investing
            platform project. We are not a registered broker and do not hold
            SEBI or exchange memberships. This website is created for learning
            and demonstration purposes only.
          </p>

          <p>
            All investments in securities and markets are subject to risk.
            Please read all related documents carefully before investing.
          </p>

          <p>
            AlphaTrade does not provide stock tips, advisory, or portfolio
            management services. Be cautious of anyone claiming to represent
            AlphaTrade for such services.
          </p>

          <p>
            "Prevent unauthorized transactions in your account. Always update
            your mobile number and email ID with your broker to receive trade
            alerts directly from the exchange. KYC is a one-time process and
            once completed with a SEBI-registered intermediary, it does not need
            to be repeated for other intermediaries."
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
