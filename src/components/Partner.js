import React from "react";
import opay from "../assets/Opay.svg";
import plam from "../assets/plampay.jpg";
import addynamo from "../assets/addyna.jpeg";
import Google from "../assets/googleadd.svg";
import meta from "../assets/Meta-Logo.png";
import pay from "../assets/paystack.png";

const Partner = () => {
  return (
    <section className="partner">
      <div className="partner-detail">
        <p>Partners</p>
      </div>
      <div className="partner-image">
        <span>
          <img src={opay} height="100" />
        </span>
        <span>
          <img className="palmpay-img" src={plam} height="100" />
        </span>
        <span>
          <img src={addynamo} height="100" />
        </span>
        <img src={Google} height="100" />
        <span>
          <img src={meta} height="100" />
        </span>
        <span>
          <img className="paystack-img" src={pay} height="100" />
        </span>
      </div>
    </section>
  );
};

export default Partner;
