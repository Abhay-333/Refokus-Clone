import React from "react";
import Product from "./Product";

const Products = () => {
  const differentProducts = [
    {
      title: `Arqitel`,
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque,
            dolor possimus quae debitis nisi labore aperiam perferendis nostrum
            quibusdam placeat!`,
            caseStudy:true,
            live: true,
    },
    {
      title: `Lorem.`,
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque,
            Nihil accusamus necessitatibus architecto velit quae?`,
            caseStudy:true,
            live: true,
    },
    {
      title: `YIR 2022`,
      description: `Expedita magnam, velit similique praesentium inventore, saepe fugiat eius quaerat exercitationem recusandae molestias voluptates totam sequi. nisi labore aperiam perferendis nostrum
            quibusdam placeat!`,
            caseStudy:true,
            live: true,
    },
    {
      title: `TTR`,
      description: `Qui ex voluptatibus consectetur sint aliquid corporis iusto porro distinctio ea et? Officia molestiae quia doloribus asperiores optio voluptatibus ipsa! labore aperiam perferendis nostrum
            quibusdam placeat!`,
            caseStudy:true,
            live: true,
    },
    {
      title: `Ipsum`,
      description: `Id reiciendis dignissimos doloremque accusantium assumenda, et nulla. Veniam ut reprehenderit nesciunt non iusto est? Voluptatem, dolor voluptas, laborum veritatis neque officiis sit`,
            caseStudy:true,
            live: true,
    },
  ];

  return (
    <div className="mt-[4vw]">
      {differentProducts.map((item,index)=><Product key={index} val={item}/>)}
    </div>
  );
};

export default Products;
