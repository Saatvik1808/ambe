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
          <p>Your Gateway to Job Opportunities</p>
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
      height: 80vh;
      width: 100%;
      object-fit: cover; /* Ensure image covers the area */
    }
  }

  .content {
    position: absolute;
    top: 40%;
    left: 5%;
    transform: translateY(-50%);

    .info {
      max-width: 90%; /* Ensure text doesn't overflow */
      color: black; /* Change text color for better contrast on background */
      
      h1 {
        font-size: 4rem; /* Adjusted for better readability */
        margin-bottom: 1rem;
      }

      p {
        font-size: 1.25rem;
        margin-bottom: 2rem;
      }
    }
  }

  @media screen and (max-width: 1080px) {
    .background {
      img {
        height: 60vh;
      }
    }

    .content {
      left: 10%;
      
      .info {
        h1 {
          font-size: 3rem;
        }
        p {
          font-size: 1rem;
        }
      }
    }
  }

  @media screen and (max-width: 768px) {
    .background {
      img {
        height: 50vh;
      }
    }

    .content {
      left: 15%;
      
      .info {
        h1 {
          font-size: 2.5rem;
        }
        p {
          font-size: 0.9rem;
        }
      }
    }
  }

  @media screen and (max-width: 480px) {
    .background {
      img {
        height: 40vh;
      }
    }

    .content {
      left: 10%;
      
      .info {
        h1 {
          font-size: 2rem;
        }
        p {
          font-size: 0.8rem;
        }
      }
    }
  }
`;
