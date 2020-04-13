import React, { useEffect, useState } from "react";
import { HeaderWrapper, Link } from "./styles";


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
       <Link href="#about">About</Link>
       <Link href="#projects">Projects</Link>
       <Link href="#contact">Contact</Link>
    </HeaderWrapper>
  );
};

export default Header;
