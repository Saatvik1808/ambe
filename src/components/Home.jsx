import React, { useState } from "react";
import styled from "styled-components";
import HeroImage from "../assets/job2.jpg";
import Button from "./Button";
export default function Home() {
  const [value, setValue] = useState("$500 - $10,000");
  return (
    <Section>
      <div className="background">
        <img src={HeroImage} alt="Hero" />
      </div>
      <div className="content">
        <div className="info">
          <h1>Welcome to</h1>
          <h1>Ambe Technical Centre</h1>
          <p>Your Gateway to Job Opportunities </p>

        </div>
        
      </div>
    </Section>
  );
}

const Section = styled.section`
  margin-top: 2rem;
  position: relative;
  .background {
    img {
      height: 90vh; /* Adjusted height for better responsiveness */
      width: 100%;
            object-fit: cover; /* Ensures image covers the area */

    }
  }
  .content {
    .info {
      position: absolute;
      top: 5rem;
      margin-left: 8rem;
      h1 {
        font-size: 5rem;
        margin-bottom: 2rem;
      }
         p {
        font-size: 1.5rem;
        margin-bottom: 2rem;
        max-width: 600px;
        color: black; /* Ensure paragraph text is black */
      }
    }
    .planner {
      position: absolute;
      bottom: -2rem;
      right: 0;
      background-color: white;
      padding: 2rem;
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
      form {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        gap: 3rem;
        .row {
          display: flex;
          flex-direction: column;
          text-align: start;
          label {
            font-size: 0.7rem;
            color: var(--secondary-text);
          }
          input[type="date"]::-webkit-calendar-picker-indicator {
            cursor: pointer;
            filter: invert(58%) sepia(69%) saturate(2588%) hue-rotate(325deg)
              brightness(105%) contrast(101%);
          }
          input:focus {
            outline: none;
          }
          input,
          select {
            border: none;
            width: 100%;
            color: var(--primary-color);
            margin-top: 0.5rem;
            background-color: white;
            font-size: 1.1rem;
            border-bottom: 1px solid #f5ebe9;
            padding-bottom: 0.3rem;
          }
        }
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    .background {
      img {
        height: 50vh;
      }
    }
    .content {
      .info {
        margin-left: 2rem;
        h1 {
          font-size: 2rem;
          margin-bottom: 1rem;
        }
      }
      .planner {
        position: initial;
        margin: 2rem;
        form {
          align-items: flex-start;
          flex-direction: column;
        }
      }
    }
  }
`;
