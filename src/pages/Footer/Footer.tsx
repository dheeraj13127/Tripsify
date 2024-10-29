const Footer = () => {
  return (
    <div className="grid grid-cols-12 bg-white">
      <div className="col-span-12 border-t py-8 ">
        <p className=" font-poppins text-center">
          Made with ❤️ by{" "}
          <a
            href="https://dheerajcodes.vercel.app"
            target="_blank"
            rel="noopeneer"
            className=" font-semibold cursor-pointer"
          >
            Dheeraj
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
