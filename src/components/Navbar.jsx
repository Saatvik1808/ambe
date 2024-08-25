import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { BsPerson } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import { IoSearchOutline } from "react-icons/io5";
import Logo from "../assets/logo-no-background.svg";

export default function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (e.target.closest('.navbar') === null) {
        setIsNavOpen(false);
      }
    };
    
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <Container className="navbar" state={isNavOpen ? 1 : 0}>
      <div className="brand">
        <img src={Logo} alt="logo" />
      </div>
      <div className="toggle">
        {isNavOpen ? (
          <MdClose onClick={() => setIsNavOpen(false)} />
        ) : (
          <GiHamburgerMenu
            onClick={(e) => {
              e.stopPropagation();
              setIsNavOpen(true);
            }}
          />
        )}
      </div>
      <div className={`links ${isNavOpen ? "show" : ""}`}>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#destination">Destination</a></li>
          <li><a href="#offer">Job Opportunities</a></li>
          <li><a href="#blog">Review</a></li>
          <li><a href="#contact">Contact Us</a></li>
        </ul>
      </div>
      <div className="account-info">
        <div className="search">
          <IoSearchOutline />
        </div>
      </div>
    </Container>
  );
}

const Container = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  background-color: #fff;
  padding: 1rem 2rem;
  z-index: 10;

  .brand {
    img {
      max-height: 40px; /* Default max-height */
      width: auto; /* Maintain aspect ratio */
      transition: max-height 0.3s ease-in-out;
    }
  }

  .toggle {
    display: none;
  }

  .links {
    ul {
      display: flex;
      gap: 3rem;
      list-style-type: none;
      margin: 0;
      padding: 0;

      li {
        a {
          text-decoration: none;
          color: black;
          cursor: pointer;
          transition: color 0.3s ease;
          &:hover {
            color: var(--primary-color);
          }
        }
      }
    }
  }

  .account-info {
    display: flex;
    gap: 2rem;

    .search {
      cursor: pointer;
    }
  }

  @media screen and (max-width: 1080px) {
    .toggle {
      display: block;
      cursor: pointer;
    }

    .links {
      position: absolute;
      top: 0;
      right: 0;
      width: ${({ state }) => (state ? "60%" : "0%")};
      height: 100vh;
      background-color: var(--primary-color);
      opacity: ${({ state }) => (state ? "1" : "0")};
      visibility: ${({ state }) => (state ? "visible" : "hidden")};
      transition: 0.4s ease-in-out;
      overflow: hidden;

      ul {
        flex-direction: column;
        text-align: center;
        height: 100%;
        justify-content: center;
        margin: 0;
        padding: 0;

        li {
          a {
            color: white;
            padding: 1rem;
            display: block;
          }
        }
      }
    }

    .account-info {
      display: none;
    }
  }

  @media screen and (max-width: 768px) {
    .brand img {
      max-height: 10px; /* Smaller max-height for smaller screens */
    }
  }

  @media screen and (max-width: 480px) {
    .brand img {
      max-height: 20px; /* Even smaller max-height for very small screens */
    }
  }
`;
