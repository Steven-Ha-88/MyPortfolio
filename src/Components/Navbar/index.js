import React, { useEffect, useState } from "react";
import { HeaderWrapper, Link } from "./styles";
import './styles';

const useTransparentHook = height => {
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
  const isTransparent = useTransparentHook(40);
  return (
    <HeaderWrapper isTransparent={isTransparent}>
      <Link to="/#about">
        About
      </Link>
      <Link to="/#projects">
        Projects
      </Link>
      <Link to="/#contact">
        Contact
      </Link>
    </HeaderWrapper>
  );
};

export default Header;
