import React from "react";
import opay from "../../assets/opay.png";
import plam from "../../assets/plampay.png";
import addynamo from "../../assets/addynamo.png";
import Google from "../../assets/google.png";
import meta from "../../assets/meta.png";
import pay from "../../assets/paystack.png";
import "./Partner.css";

const Partner = () => {
  return (
    <section className="partner">
      <div className="partner-detail">
        <h6>
          Backed by <span>strong global Partners and Local Partners</span>
        </h6>
        <p>
          Fortune House is backed by notable investors as well as some of the
          best Advertising, Gaming and Payment companies on the planet.
        </p>
      </div>
      <div className="partner-image">
        <span>
          <img src={opay} />
        </span>
        <span>
          <img src={plam} />
        </span>
        <span>
          <img src={meta} />
        </span>
        <span>
          <img src={pay} />
        </span>
        <span>
          <img src={addynamo} />
        </span>
        <img src={Google} />
      </div>
    </section>
  );
};

export default Partner;
