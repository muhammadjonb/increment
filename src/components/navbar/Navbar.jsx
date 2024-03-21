import React from "react";
import { useSelector } from "react-redux";

const Navbar = () => {
  let count = useSelector((state) => state.counter);
  console.log(count);
  return (
    <>
      <h2>Navbar {count}</h2>
    </>
  );
};

export default Navbar;
