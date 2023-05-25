// import React, { useState, useEffect } from "react";
// import { Link, useLocation } from "react-router-dom";
// import mylogo from "../../assets/mylogo.png"
// const navLinks = [
//   {
//     path: "/",
//     text: "Home",
//   },
//   {
//     path: "/contact",
//     text: "Contact",
//   },
//   {
//     path: "/about",
//     text: "About",
//   },
//   {
//     path: "/projects",
//     text: "Projects",
//   },
// ];

// function Navbar() {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const location = useLocation();
//   const [activeLink, setActiveLink] = useState("/");

//   const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

//   useEffect(() => {
//     setActiveLink(location.pathname);
//   }, [location]);

//   return (
    // <nav className="fixed z-50 w-full bg-mysecondcolor ">
    //   <div className="mx-auto px-4 sm:px-6 lg:px-8">
    //     {/* Desktop navigation */}
    //     <div className="hidden md:block">
    //       <div className="flex items-center justify-center h-16">
    //         <Link
    //           to="/"
    //           className="text-white font-bold text-xl flex items-center"
    //         >
    //           <span><img src={mylogo} alt="" /></span>
    //         </Link>
    //         <div className="ml-10 flex items-baseline space-x-4">
    //           {navLinks.map(({ path, text }) => (
    //             <Link
    //               key={path}
    //               to={path}
    //               className={`${
    //                 activeLink === path
    //                   ? "underline text-white"
    //                   : "text-gray-300 hover:bg-gray-700 hover:text-white"
    //               } px-3 text-2xl py-2 rounded-md  font-medium`}
    //             >
    //               {text}
    //             </Link>
    //           ))}
    //         </div>
    //         <div>
    //           <img
    //             className="h-10 w-10 rounded-full border border-l-rose-100"
    //             src="https://avatars.githubusercontent.com/u/118232727?s=400&u=0c987b30fd7c1abd281a4a27a49b400dfc4d92d0&v=4"
    //             alt=""
    //           />
    //         </div>
    //       </div>
    //     </div>

    //     {/* Mobile navigation */}
    //     <div className="flex md:hidden items-center justify-between h-16">
    //       <Link
    //         to="/"
    //         className="text-white font-bold text-xl flex items-center"
    //       >
    //         <span>AV</span>
    //       </Link>
    //       <button
    //         onClick={toggleMobileMenu}
    //         title="Toggle Menu"
    //         className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white transition duration-150 ease-in-out"
    //       >
    //         {isMobileMenuOpen ? (
    //           <svg
    //             className="h-6 w-6"
    //             stroke="currentColor"
    //             fill="none"
    //             viewBox="0 0 24 24"
    //           >
    //             <path
    //               strokeLinecap="round"
    //               strokeLinejoin="round"
    //               strokeWidth="2"
    //               d="M6 18L18 6M6 6l12 12"
    //             />
    //           </svg>
    //         ) : (
    //           <svg
    //             className="h-6 w-6"
    //             stroke="currentColor"
    //             fill="none"
    //             viewBox="0 0 24 24"
    //           >
    //             <path
    //               strokeLinecap="round"
    //               strokeLinejoin="round"
    //               strokeWidth="2"
    //               d="M4 6h16M4 12h16M4 18h16"
    //             />
    //           </svg>
    //         )}
    //       </button>

    //       {/* Mobile menu */}
    //       <div
    //         className={`${
    //           isMobileMenuOpen ? "" : "hidden"
    //         } absolute top-16 left-0 w-full bg-gray-800 transition duration-500`}
    //       >
    //         <div className="flex font-bold flex-col items-center">
    //           {navLinks.map(({ path, text }) => (
    //             <Link
    //               key={path}
    //               to={path}
    //               className={`${
    //                 activeLink === path
    //                   ? "underline text-mysecondcolor text-2xl"
    //                   : "text-gray-300hover:bg-gray-700 hover:text-mysecondcolor"
    //               } block  text-2xl font-medium px-3 py-2 rounded-md  text-bold`}
    //             >
    //               {text}
    //             </Link>
    //           ))}
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </nav>
//   );
// }

// export default Navbar;
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import mylogo from "../../assets/mylogo.png"

const navLinks = [
  {
    path: "/",
    text: "Home",
  },
  {
    path: "/contact",
    text: "Contact",
  },
  {
    path: "/about",
    text: "About",
  },
  {
    path: "/projects",
    text: "Projects",
  },
];

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const [activeLink, setActiveLink] = useState("/");
  const [scrollPosition, setScrollPosition] = useState(window.pageYOffset);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  useEffect(() => {
    setActiveLink(location.pathname);

    const handleScroll = () => {
      setScrollPosition(window.pageYOffset);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location]);

  return (
    <nav className="fixed bg-mysecondcolor z-50 w-full bg-mysecondcolor ">
    <div className="mx-auto px-4 sm:px-6 lg:px-8">
      {/* Desktop navigation */}
      <div className="hidden md:block">
        <div className="flex items-center justify-center h-16">
          <Link
            to="/"
            className="text-white font-bold text-xl flex items-center"
          >
            <span><img src={mylogo} alt="" /></span>
          </Link>
          <div className="ml-10 flex items-baseline space-x-4">
            {navLinks.map(({ path, text }) => (
              <Link
                key={path}
                to={path}
                className={`${
                  activeLink === path
                    ? "underline text-white"
                    : "text-gray-300 hover:bg-gray-700 hover:text-white"
                } px-3 text-2xl py-2 rounded-md  font-medium`}
              >
                {text}
              </Link>
            ))}
          </div>
          <div>
            <img
              className="h-10 w-10 rounded-full border border-l-rose-100"
              src="https://avatars.githubusercontent.com/u/118232727?s=400&u=0c987b30fd7c1abd281a4a27a49b400dfc4d92d0&v=4"
              alt=""
            />
          </div>
        </div>
      </div>

      {/* Mobile navigation */}
      <div className="flex md:hidden items-center justify-between h-16">
        <Link
          to="/"
          className="text-white font-bold text-xl flex items-center"
        >
          <span>AV</span>
        </Link>
        <button
          onClick={toggleMobileMenu}
          title="Toggle Menu"
          className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white transition duration-150 ease-in-out"
        >
          {isMobileMenuOpen ? (
            <svg
              className="h-6 w-6"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="h-6 w-6"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>

        {/* Mobile menu */}
        <div
          className={`${
            isMobileMenuOpen ? "" : "hidden"
          } absolute top-16 left-0 w-full bg-gray-800 transition duration-500`}
        >
          <div className="flex font-bold flex-col items-center">
            {navLinks.map(({ path, text }) => (
              <Link
                key={path}
                to={path}
                className={`${
                  activeLink === path
                    ? "underline text-mysecondcolor text-2xl"
                    : "text-gray-300hover:bg-gray-700 hover:text-mysecondcolor"
                } block  text-2xl font-medium px-3 py-2 rounded-md  text-bold`}
              >
                {text}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  </nav>
  );
}

export default Navbar;
