import React from "react";
import Container from "./Container";
import Image from "next/image";
import image from "../../public/MyImage.png";

const Flex = () => {
  // Create an array with 15 elements
  const items = Array.from({ length: 15 });

  return (
    <div>
      <Container>
        <h1 className="text-[50px] font-bold underline text-center mb-10 mt-10">
          use flex
        </h1>

        <div className="flex gap-3 flex-wrap">
          {items.map((_, index) => (
            <div key={index} className="flex flex-wrap gap-3">
              {[...Array(5)].map((_, innerIndex) => (
                <div
                  key={innerIndex}
                  className="bg-black flex items-center justify-between px-6 rounded-xl py-4 mb-2 gap-5 flex-wrap"
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
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Flex;
