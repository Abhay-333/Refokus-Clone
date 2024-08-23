import { motion } from "framer-motion";
import React from "react";
const Marquee = ({ images }) => {
  const data = [...images, ...images] 
  console.log(images)
  return (
    <div className="text-white flex overflow-hidden w-fit flex-shrink-0">
      
      <motion.div
        animate={{ x: "-100%" }}
        transition={{ ease: "linear", duration:20, repeat: Infinity }}
        initial={{ x: "0%" }}
        className="text-white flex flex-shrink-0 gap-4 "
        // style={{whiteSpace:"nowrap"}}
      >
        {images.map((url, index) => (
          <img
            key={index}
            className="invert w-[4.75%] mx-4 flex-shrink-0"
            src={url}
            alt=""
          />
        ))}
      </motion.div>
      
      <motion.div
        animate={{ x: "-100%" }}
        transition={{ ease: "linear", duration:20, repeat: Infinity }}
        initial={{ x: "0%" }}
        className="text-white flex flex-shrink-0 gap-4"
        // style={{whiteSpace:"nowrap"}}
      >
        {images.map((url, index) => (
          <img
            key={index}
            className="invert w-[4.75%] mx-4 flex-shrink-0"
            src={url}
            alt=""
          />
        ))}
      </motion.div>

      {/* <motion.div
        animate={{ x: "-100%" }}
        transition={{ ease: "linear", duration:5, repeat: Infinity }}
        initial={{ x: "0%" }}
        className="text-white flex flex-shrink-0 gap-4 bg-red-400"
        // style={{whiteSpace:"nowrap"}}
      >
        {images.map((url, index) => (
          <img
            key={index}
            className="invert w-[3%] mx-4 flex-shrink-0"
            src={url}
            alt=""
          />
        ))}
      </motion.div> */}
          

    </div>
  );
};

export default Marquee;
