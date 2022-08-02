import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.div`
  width: 90%;
  height: 50px;
  a {
    margin-left: 60px;
  }
`;
export const Navbar = () => {
  const link = [
    { name: "Register", to: "/register" },
    { name: "Login", to: "/login" },
    { name: "Products", to: "/products" },
  ];
  return (
    <Nav>
      {link.map((e) => (
        <Link to={e.to} key={Math.random()}>
          {e.name}
        </Link>
      ))}
    </Nav>
  );
};
