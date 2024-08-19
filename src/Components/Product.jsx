import React from "react";
import Button from "./Button";

const Product = ({val}) => {
  return (
    <div className="w-full h-fit px-40 text-white">
      
      <div className="max-w-screen-xl mx-auto h-[33vh]  flex items-center justify-between">
        <h1 className="text-4xl font-semibold">{val.title}</h1>

        <div className="right-content w-[40%]">
          <p className="mb-[2vw] text-sm font-[500]">
            {val.description}
          </p>

        <div className="flex items-center gap-5">

        {val.live && <Button title="Live Study"/>}
        {val.caseStudy && <Button title="Case Study"/>}
        </div>
          
        </div>
      </div>
    </div>
  );
};

export default Product;
