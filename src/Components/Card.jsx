import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import Button from "./Button";

const Card = ({
  width,
  contact,
  margin1,
  para,
  margin2,
  subHead1,
  subHead2,
  hov,
}) => {
  return (
    <div
      className={`h-[80vh] rounded-xl p-5 bg-zinc-800 transition-all`}
      style={{ width: width}}
        onMouseEnter={(e)=>(e.currentTarget.style.backgroundColor=hov)}
        onMouseLeave={(e)=>(e.currentTarget.style.backgroundColor='rgb(39 39 42)')}
    >
      <div className="flex items-center justify-between">
        <h1 className="uppercase text-sm">Get in touch</h1>
        <FaArrowRight className="text-lg" />
      </div>

      <div className="subHeading text-[2.3vw]" style={{ marginTop: margin2 }}>
        <h1>{subHead1}</h1>
        <h1>{subHead2}</h1>
      </div>

      <div
        className="mainHeading  flex items-center justify-between"
        style={{ marginTop: margin1 }}
      >
        {para ? (
          <p className="text-sm text-zinc-300 font-[400]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam,
            facere.
          </p>
        ) : (
          <h1 className="leading-none text-[4vw] font-[500]">
            Start a Project
          </h1>
        )}
        {contact ? <Button /> : null}
      </div>
    </div>
  );
};

export default Card;
