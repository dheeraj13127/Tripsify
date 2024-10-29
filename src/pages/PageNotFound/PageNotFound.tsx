import { BsEmojiFrown } from "react-icons/bs";
const PageNotFound = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <p className=" text-4xl font-poppins font-semibold">
        <span className=" text-dark-pink">404</span> PAGE NOT FOUND
      </p>
      <div className="mt-10">
        <BsEmojiFrown size={40} />
      </div>
    </div>
  );
};

export default PageNotFound;
