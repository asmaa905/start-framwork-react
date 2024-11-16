import { Link, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [openNav, setOpenNav] = useState(false);

  const navClass = scrolled
    ? "navbar navbar-expand-lg fixed top-0 right-0 z-[1030] shadow py-4"
    : "navbar navbar-expand-lg fixed top-0 right-0 z-[1030] py-6 ";
  function toggleMenu() {
    if (openNav == true) setOpenNav(false);
    else {
      setOpenNav(true);
    }
  }
  // Component Mounting => DidMount
  useEffect(() => {
    // function to handle navbar scroll
    const handleScroll = () => {
      let isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <nav className={`${navClass} w-full bg-[#2c3e50] shadow`}>
        <div className="container flex flex-wrap items-center justify-between ">
          <section className="text-gray-900 logo-section">
            <Link
              href="#"
              className="logo text-[#fff] no-underline	text-[calc(1.3rem+.6vw)]  font-[700] uppercase"
            >
              Start Framework
            </Link>
          </section>
          <section
            className={`${openNav == false ? "ml-[auto]" : ""} icon-menu-sec`}
          >
            <button
              onClick={toggleMenu}
              className="flex lg:hidden py-[0.25rem] px-[0.75rem] rounded-[0.375rem] border border-[#fff6]  transition-all  outline-none"
            >
              <i
                className={`${
                  openNav == true ? "fa-xmark" : "fa-bars"
                } fa-solid  icon-menu text-white text-[23px] leading-[1] font-[900]`}
              ></i>
            </button>
          </section>
          <section className={`overflow-hidden menu`}>
            <ul
              className={`${
                openNav == true ? "block" : "hidden"
              } md:space-x-8 space-x-6 text-gray-900 font-semibold lg:flex`}
            >
              <li className="relative nav-group">
                <NavLink
                  to="about"
                  className="text-[#fff] no-underline	text-[1rem] leading-[24px] font-[700] uppercase  hover:bg-[#1abc9c] mt-3"
                >
                  about
                </NavLink>
              </li>
              <li className="relative nav-group">
                <NavLink
                  to="portofilo"
                  className="text-[#fff] no-underline	text-[1rem] leading-[24px] font-[700] uppercase hover:bg-[#1abc9c] mt-3"
                >
                  portfolio
                </NavLink>
              </li>
              <li className="relative nav-group">
                <NavLink
                  to="contact"
                  className="text-[#fff] no-underline	text-[1rem] leading-[24px] font-[700] uppercase hover:bg-[#1abc9c] mt-3"
                >
                  contact
                </NavLink>
              </li>
            </ul>
          </section>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
