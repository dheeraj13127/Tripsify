import { useEffect, useState } from "react";
import { Parallax } from "react-scroll-parallax";
import gemini from "../../../assets/gemini-new.png";
import react from "../../../assets/react-new.png";
import tailwind from "../../../assets/tailwind-new.png";
import typescript from "../../../assets/typescript-new.png";
import { AutomatedImagesDataType } from "../../../interfaces/Interfaces";
const AutomatedSection = () => {
  const [parallaxPositiveSize, setParallaxPositiveSize] = useState<number>(
    window.innerWidth < 1024 ? 0 : 5
  );
  const [parallaxNegativeSize, setParallaxNegativeSize] = useState<number>(
    window.innerWidth < 1024 ? 0 : -5
  );
  const automatedImagesData: AutomatedImagesDataType[] = [
    {
      id: 1,
      url: gemini,
    },
    {
      id: 2,
      url: react,
    },
    {
      id: 3,
      url: tailwind,
    },
    {
      id: 4,
      url: typescript,
    },
  ];
  useEffect(() => {
    const handleResize = (): void => {
      if (window.innerWidth < 1024) {
        setParallaxPositiveSize(0);
        setParallaxNegativeSize(0);
      } else {
        setParallaxPositiveSize(5);
        setParallaxNegativeSize(-5);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [parallaxNegativeSize, parallaxNegativeSize]);
  return (
    <div className="grid grid-cols-12 mt-20 sm:mt-32 lg:mt-64 max-w-screen-xl  mx-auto gap-4">
      <div
        data-aos="fade-up"
        data-aos-duration="350"
        data-aos-once={true}
        className="col-span-12 max-w-screen-xl mx-auto mt-12 mb-16 lg:mb-32"
      >
        <p className="font-poppins font-semibold text-center text-3xl sm:text-5xl lg:text-6xl leading-tight">
          <span className=" bg-gradient-to-r  from-dark-pink to-gray-500 bg-clip-text text-transparent inline-block">
            Automated
          </span>{" "}
          and{" "}
          <span className=" bg-gradient-to-r  from-dark-pink to-gray-500 bg-clip-text text-transparent inline-block">
            Created
          </span>{" "}
          with
        </p>
      </div>
      {automatedImagesData.map((at: AutomatedImagesDataType, key: number) => (
        <div className="col-span-6 sm:col-span-6 lg:col-span-3" key={key}>
          <Parallax
            speed={
              at.id % 2 === 0 ? parallaxNegativeSize : parallaxPositiveSize
            }
          >
            <div className=" flex justify-center rounded-lg">
              <img src={at.url} alt="automated-image" className="w-3/4" />
            </div>
          </Parallax>
        </div>
      ))}
    </div>
  );
};

export default AutomatedSection;
