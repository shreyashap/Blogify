import LiveChatImg from "../../assets/LIve Chat.svg";

const HeroBanner = () => {
  return (
    <>
      <div className="heroBanner bg-[#F9FCFF] w-full h-[100vh] flex lg:justify-between">
        <div className="w-full lg:w-[50%] h-[100%] top-[64px] left-0 flex flex-col items-center lg:items-start gap-10 px-4 mt-[50px] lg:ml-[60px]">
          <h1 className="text-[#183B56] font-bold text-[31px] mt-6">
            Read out the most <br /> interesting articles
          </h1>
          <p className="text-wrap lg:text-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            <br />
            Magnam quia dicta voluptate ipsum fuga voluptas. Libero maxime
            explicabo sapiente assumenda consequuntur <br /> nesciunt unde
            molestias.
          </p>

          <div className="flex flex-col items-center gap-4 sm:inline-block sm:relative">
            <input
              type="text"
              placeholder="Search article"
              className="bg-white outline-none border-none w-[272px] h-[48px] drop-shadow-md rounded-md text-[#959EAD] font-bold italic mt-[50px] lg:mt-0  sm:inline-block sm:w-[555px] sm:h-[55px] "
            />
            <button className="bg-[#1565D8] text-white w-[272px] h-[48px] rounded-md font-bold text-[16px] sm:inline-block sm:w-[94px] sm:h-[40px] sm:absolute sm:bottom-2 sm:right-3">
              Search
            </button>
          </div>
          <div className="w-[555px] h-[56px] flex">
            <h2 className="font-bold italic text-[16px] ml-20 sm:ml-0">
              Popular Tags :
            </h2>
            <div className="grid gap-4 sm:flex">
              <div className="w-[82px] h-[32px] ml-2 text-[#1565D8] text-[14px] bg-teal-200 rounded-sm flex justify-center items-center">
                Design
              </div>
              <div className="w-[146px] h-[32px] text-[#1565D8] text-[14px] bg-teal-200 rounded-sm flex justify-center items-center">
                User Experience
              </div>
              <div className="w-[139px] h-[32px] text-[#1565D8] text-[14px] bg-teal-200 rounded-sm flex justify-center items-center">
                User Interface
              </div>
            </div>
          </div>
        </div>

        <div className="hidden sm:hidden lg:flex lg:w-[50%]">
          <img
            src={LiveChatImg}
            alt="Live chat svg image"
            className="w-[700px] h-[525px] bg-cover"
          />
        </div>
      </div>
    </>
  );
};

export default HeroBanner;
