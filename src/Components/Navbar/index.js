import React, { useEffect, useState } from "react";
import { HeaderWrapper, Link } from "./styles";
import "./styles.css";

const useTransparentHook = (height) => {
  const [isTransparent, setTransparent] = useState(true);
  useEffect(() => {
    function onScroll() {
      if (window.pageYOffset > height) {
        setTransparent(false);
        return;
      }
      setTransparent(true);
    }
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [height]);
  return isTransparent;
};

const Header = () => {
  const [toggleNav, setToggleNav] = useState(false)

  const isTransparent = useTransparentHook(40);
  return (
    <HeaderWrapper isTransparent={isTransparent}>
       {/* <a
            className="nav-burger"
            href={`#`}
            onClick={() => setToggleNav(!toggleNav)}
          >
            <div
              className="hamburger hamburger--collapse"
              aria-label="Menu"
              role="button"
              aria-controls="navigation"
            >
              <div className="hamburger-box">
                <div className="hamburger-inner" />
              </div>
            </div>
          </a> */}
      <Link to='/#about'>About</Link>
      <Link to='/#projects'>Projects</Link>
      <Link to='/#contact'>Contact</Link>
    </HeaderWrapper>
  );
};

export default Header;
