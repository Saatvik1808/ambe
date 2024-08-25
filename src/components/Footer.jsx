import React from "react";
import styled from "styled-components";
import logo from "../assets/logo-no-background.svg";

export default function Footer() {
  const quickLinks = [
    "About Us",
    "Destinations",
    "Latest Blog",
    "Our Team",
    "Contact Us",
  ];
  const supportLinks = [
    "Customer Support",
    "Privacy Policy",
    "Terms & Condition",
    "Forum",
    "Tour Guide",
  ];
  return (
    <Container>
      <div className="upper-footer">
        <div className="col">
          <div className="brand">
            <div className="logo">
              <img src={logo} alt="logo" />
            </div>
            <p className="description">
              You can dream, create, design, and build the most wonderful place.
            </p>
          </div>
          <ul>
            <li>
              <span>+91-8920521797</span>
            </li>
            <li>
              <span>netkamenterprises@gmail.com</span>
            </li>
          </ul>
        </div>
        <div className="col">
          <h2>Quick Links</h2>
          <ul>
            {quickLinks.map((link) => (
              <li key={link}>{link}</li>
            ))}
          </ul>
        </div>
        <div className="col">
          <h2>Support</h2>
          <ul>
            {supportLinks.map((link) => (
              <li key={link}>{link}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="lower-footer">
        <span>
          &copy; {new Date().getFullYear()} All Rights Reserved.
        </span>
      </div>
    </Container>
  );
}

const Container = styled.footer`
  background-color: #2c2c2c;
  color: #f4f4f4;
  padding: 4rem 2rem;
  
  .upper-footer {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    border-bottom: 2px solid var(--primary-color);
    padding-bottom: 2rem;
    
    .col {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
      
      h2 {
        color: var(--primary-color);
        font-size: 1.5rem;
        margin-bottom: 1rem;
      }
      
      ul {
        list-style: none;
        padding: 0;
        margin: 0;
        gap: 1rem;
        
        li {
          cursor: pointer;
          transition: color 0.3s;
          
          &:hover {
            color: var(--primary-color);
          }
        }
      }
      
      .newsletter {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        
        input {
          padding: 0.75rem;
          border: none;
          font-size: 1rem;
          color: #333;
          background-color: #f4f4f4;
          border-radius: 5px;
        }
      }
    }
    
    .brand {
      .logo {
        img {
          width: 200px; /* Adjusted size for smaller screens */
          height: auto;
        }
      }
    }
  }
  
  .lower-footer {
    padding: 2rem 0;
    text-align: center;
    font-size: 0.8rem;
    
    a {
      text-decoration: none;
      color: var(--primary-color);
    }
  }
  
  @media (max-width: 768px) {
    padding: 2rem 1rem;
    
    .upper-footer {
      grid-template-columns: 1fr;
      
      .col {
        gap: 1rem;
        
        h2 {
          font-size: 1.25rem;
        }
        
        ul {
          gap: 0.5rem;
          
          li {
            font-size: 0.9rem;
          }
        }
        
        .newsletter {
          input {
            font-size: 0.9rem;
          }
        }
      }
    }
    
    .lower-footer {
      font-size: 0.7rem;
    }
  }
`;
