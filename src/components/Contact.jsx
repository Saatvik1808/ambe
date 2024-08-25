import React from "react";
import styled from "styled-components";
import { FaPhone } from "react-icons/fa";

export default function Contact() {
  return (
    <Section id="contact">
      <div className="content">
        <h1>Get in Touch</h1>
        <p>If you have any questions or need further information, feel free to contact us:</p>
        <div className="contact-info">
          <div className="phone">
            <FaPhone />
            <span>8920521797</span>
          </div>
        </div>
      </div>
    </Section>
  );
}

const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 6rem 3rem; /* Increased padding */
  background-color: #f4f4f4;
  .content {
    text-align: center;
    max-width: 600px;
    h1 {
      font-size: 2.5rem;
      margin-bottom: 1.5rem; /* Increased margin-bottom */
      color: var(--primary-color);
    }
    p {
      font-size: 1.2rem; /* Increased font-size */
      margin-bottom: 3rem; /* Increased margin-bottom */
      color: var(--secondary-text);
    }
    .contact-info {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1.5rem; /* Increased gap */
      .phone {
        display: flex;
        align-items: center;
        font-size: 1.7rem; /* Increased font-size */
        color: var(--primary-text);
        svg {
          font-size: 2.5rem; /* Increased font-size */
          color: var(--primary-color);
        }
        span {
          margin-left: 0.75rem; /* Increased margin-left */
        }
      }
    }
  }
  @media screen and (max-width: 768px) {
    padding: 4rem 2rem; /* Adjusted padding for smaller screens */
    .content {
      h1 {
        font-size: 2rem;
      }
      p {
        font-size: 1.1rem;
        margin-bottom: 2.5rem; /* Adjusted margin-bottom */
      }
      .contact-info {
        flex-direction: column;
        gap: 1rem; /* Adjusted gap */
        .phone {
          font-size: 1.4rem; /* Adjusted font-size */
          svg {
            font-size: 2rem; /* Adjusted font-size */
          }
          span {
            margin-left: 0;
          }
        }
      }
    }
  }
`;
