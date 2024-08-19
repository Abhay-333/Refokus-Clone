import React from "react";

const Stripe = ({val}) => {
  return (
    <div className="text-white min-w-[16.66%] border-t-[1px] border-b-[1px] border-r-[1px] py-4 flex items-center justify-center">
      <span><img className="w-[50%] invert" src={val.url} alt="" /></span>
      <p>{val.number}</p>
    </div>
  );
};

export default Stripe;
