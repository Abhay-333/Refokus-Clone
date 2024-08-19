import React from "react";

const Work = () => {
  const images = [
    {
      url: `https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d7ef6620081c6c647958_Singularity%20-%2016%209%20(B)-p-1080.webp`,
      top: "50%",
      left: "40%",
      isActive: false,
    },

    {
      url: `https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d8ccb75f918dc861c6c3_Layout%20Land%20-%204%203-p-800.webp`,
      top: "50%",
      left: "43%",
      isActive: false,
    },
    {
      url: `https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d8846629f4e91cbfc152_Cula%20-%204%203-p-1080.webp`,
      top: "53%",
      left: "45%",
      isActive: false,
    },
    {
      url: `https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d7f33bdfd7f713ff552d_Singularity%20-%204%203-p-1080.webp`,
      top: "55%",
      left: "48%",
      isActive: false,
    },
    {
      url: `https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d000c5875a51723e197f_Brightwave%20-%204%203-p-1080.webp`,
      top: "58%",
      left: "50%",
      isActive: false,
    },
    {
      url: `https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d86a8a9b4a0505553454_Arqitel%20-%204%203-p-1080.webp`,
      top: "60%",
      left: "53%",
      isActive: false,
    },
  ];
  return (
    <div className=" w-full text-white">
      <div className="max-w-screen-xlmx-auto text-center relative">
        <h1 className="text-[30vw] select-none font-regular tracking-tighter leading-none">
          work
        </h1>
        <div className="absolute top-0 h-full w-full">
          {images.map(
            (image, index) =>
              image.isActive && (
                <img
                key={index}
                  className="absolute w-[20%] rounded-xl translate-x-[-50%]"
                  style={{ top: image.top, left: image.left }}
                  src={image.url}
                  alt=""
                />
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default Work;
