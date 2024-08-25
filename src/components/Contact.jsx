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
            <span>+91-8920521797</span>
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
  padding: 6rem 3rem;
  background-color: #f4f4f4;
  .content {
    text-align: center;
    max-width: 600px;
    h1 {
      font-size: 2.5rem;
      margin-bottom: 1.5rem;
      color: var(--primary-color);
    }
    p {
      font-size: 1.2rem;
      margin-bottom: 3rem;
      color: var(--secondary-text);
    }
    .contact-info {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1.5rem;
      .phone {
        display: flex;
        align-items: center;
        font-size: 1.7rem;
        color: var(--primary-text);
        svg {
          font-size: 2.5rem;
          color: var(--primary-color);
        }
        span {
          margin-left: 0.75rem;
        }
      }
    }
  }
  @media screen and (max-width: 768px) {
    padding: 4rem 2rem;
    .content {
      h1 {
        font-size: 2rem;
      }
      p {
        font-size: 1.1rem;
        margin-bottom: 2.5rem;
      }
      .contact-info {
        flex-direction: column;
        gap: 1rem;
        .phone {
          font-size: 1.4rem;
          svg {
            font-size: 2rem;
          }
          span {
            margin-left: 0;
          }
        }
      }
    }
  }
  @media screen and (max-width: 480px) {
    padding: 3rem 1.5rem;
    .content {
      h1 {
        font-size: 1.8rem;
      }
      p {
        font-size: 1rem;
        margin-bottom: 2rem;
      }
      .contact-info {
        .phone {
          font-size: 1.2rem;
          svg {
            font-size: 1.5rem;
          }
        }
      }
    }
  }
`;
