import React from "react";
import Container from "./Container";
import Image from "next/image";
import image from "../../public/MyImage.png";

const Gride = () => {
  const items = Array.from({ length: 15 });

  const loopItems = Array.from({ length: 5 });

  return (
    <div>
      <Container>
        <h1 className="text-[50px] font-bold underline text-center mb-10 mt-10">
          use grid
        </h1>

        <div className=" grid grid-cols-10  gap-3 mb-10">
          {loopItems.map((_, loopIndex) => (
            <div className=" col-span-10 sm:col-span-5 md:col-span-2 lg:col-span-2">
              <div key={loopIndex}>
                {items.map((_, index) => (
                  <div
                    key={index}
                    className="bg-black flex flex-wrap items-center justify-between px-6 rounded-xl py-4 mb-2 gap-2"
                  >
                    <Image
                      className="rounded-full border-white border-2"
                      width={80}
                      height={80}
                      quality={100}
                      src={image}
                    />
                    <div>
                      <h2 className="text-[20px] font-bold text-white">
                        saykhul alam
                      </h2>
                      <p className="text-[15px] font-semibold text-white">
                        31/12/2002
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Gride;
