import React, { useState } from "react";
import Product from "./Product";
import { motion } from "framer-motion";
const Products = () => {
  const differentProducts = [
    {
      title: `Arqitel`,
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque,
            dolor possimus quae debitis nisi labore aperiam perferendis nostrum
            quibusdam placeat!`,
      caseStudy: true,
      live: true,
    },
    {
      title: `Lorem.`,
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque,
            Nihil accusamus necessitatibus architecto velit quae?`,
      caseStudy: true,
      live: true,
    },
    {
      title: `YIR 2022`,
      description: `Expedita magnam, velit similique praesentium inventore, saepe fugiat eius quaerat exercitationem recusandae molestias voluptates totam sequi. nisi labore aperiam perferendis nostrum
            quibusdam placeat!`,
      caseStudy: true,
      live: true,
    },
    {
      title: `TTR`,
      description: `Qui ex voluptatibus consectetur sint aliquid corporis iusto porro distinctio ea et? Officia molestiae quia doloribus asperiores optio voluptatibus ipsa! labore aperiam perferendis nostrum
            quibusdam placeat!`,
      caseStudy: true,
      live: true,
    },
    {
      title: `Ipsum`,
      description: `Id reiciendis dignissimos doloremque accusantium assumenda, et nulla. Veniam ut reprehenderit nesciunt non iusto est? Voluptatem, dolor voluptas, laborum veritatis neque officiis sit`,
      caseStudy: true,
      live: true,
    },
  ];

  const [pos, setPos] = useState(20);

  const mover = (val) => {
    setPos(val * 20);
  };

  return (
    <div className="mt-[4vw] relative text-white">
      {differentProducts.map((item, index) => (
        <Product key={index} val={item} count={index} movFunc={mover} />
      ))}
      <div className="absolute top-0 pointer-events-none h-full w-full">
        <motion.div
          initial={{ y: pos, x: "-50%" }}
          animate={{ y: pos + `rem` }}
          transition={{ease:[0.83, 0, 0.17, 1], duration:0.5}}
          className="absolute left-[40%] w-[25rem] h-[20rem] bg-red-400 rounded-2xl overflow-hidden"
        >
          <motion.div
            animate={{ y: -pos + `rem` }}
          transition={{ease:[0.83, 0, 0.17, 1], duration:0.5}}
            className="w-full h-full bg-zinc-300"
          ></motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
          transition={{ease:[0.83, 0, 0.17, 1], duration:0.5}}
            className="w-full h-full bg-zinc-400"
          ></motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
          transition={{ease:[0.83, 0, 0.17, 1], duration:0.5}}
            className="w-full h-full bg-zinc-500"
          ></motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
          transition={{ease:[0.83, 0, 0.17, 1], duration:0.5}}
            className="w-full h-full bg-zinc-600"
          ></motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
          transition={{ease:[0.83, 0, 0.17, 1], duration:0.5}}
            className="w-full h-full bg-zinc-700"
          ></motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Products;
