import { useState } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import HeroBanner from "../HeroBanner/HeroBanner";

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <>
      <header className="w-full h-[64px] mx-auto lg:h-[100px] relative">
        <nav className="w-full h-[100%] bg-[#F9FCFF] flex items-center justify-between px-4 sticky z-2 lg:px-20 lg:text-[20px]">
          <div className="left">
            <Link to="/" className="text-[#254A72] font-bold font-sans">
              Blogify
            </Link>
          </div>
          <div className="right">
            <GiHamburgerMenu
              color="#254A72"
              className="lg:hidden sm:w-5 h-5"
              onClick={() => {
                setMobileMenu(!mobileMenu);
                console.log("hello");
              }}
            />
            <div className="lg-menu hidden lg:flex lg:items-center gap-8">
              <Link
                to="/"
                className="hover:border-b-2 border-black transition-border duration-75 ease-in-out"
              >
                Home
              </Link>
              <Link to="/about" className="hover:border-b-2 border-black">
                About
              </Link>
              <Link to="sign-in">
                <button className="text-[#1565D8] rounded-full w-[100px] h-[42px]  border-2 border-[#1565D8] hover:bg-[#1565D8] hover:text-white hover:border-none">
                  Sign In
                </button>
              </Link>
            </div>

            <div
              className={`${
                mobileMenu ? "flex" : "hidden"
              } mobile-menu bg-[] w-full bg-[#F9FCFF] h-auto absolute top-[64px] left-0 lg:hidden flex-col gap-4 py-4 transition-all duration-[1s] ease-in-out`}
            >
              <Link to="/" className="border-b-[1px] border-black py-4">
                Home
              </Link>
              <Link to="/about" className="border-b-[1px] border-black py-4">
                About
              </Link>
              <Link to="sign-in" className="py-4">
                <button className="text-[#1565D8] rounded-full w-[80px] h-[34px] border-2 border-[#1565D8] hover:bg-[#1565D8] hover:text-white hover:border-none">
                  Sign In
                </button>
              </Link>
            </div>
          </div>
        </nav>
        <HeroBanner />
      </header>
    </>
  );
};

export default Header;

//3A4C66
