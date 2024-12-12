const Banner = () => {
  return (
    <section className="relative min-h-screen w-full before:content-[''] before:absolute before:bg-black/30 before:w-full before:h-full before:left-0 before:top-0 before:z-10">
      <div className="w-full left-0 right-0 h-full top-0 absolute">
        {/* <section> */}
        <video
          className="object-cover block w-full h-full"
          id="homeVid"
          autoPlay
          loop
          muted
        >
          <source src="/videos/singapore.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="absolute z-20 w-[90%] text-white top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 text-center">
        <h1 className="text-[7rem] leading-none open-sans-bold">
          CARTRIDGE <span className="block">CORPORATION </span>
        </h1>
        <p className="text-[1.3rem]">
          Pursuing corporate productivity improvement
        </p>
        <a
          href="en/aboutus.html"
          className="bg-white font-bold p-4 block w-64 m-auto mt-6 text-black hover:scale-[1.05] hover:text-gray-700 transition-transform rounded-[28rem]"
        >
          Click here for more
        </a>
      </div>
      {/* </section> */}
    </section>
  );
};

export default Banner;
