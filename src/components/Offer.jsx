import React from "react";
import styled from "styled-components";
import lighthouse from "../assets/jb.png"; // Update path if needed
import { BiWorld } from "react-icons/bi";
import { BsHeadphones, BsPerson } from "react-icons/bs";

export default function Offer() {
  const data = [
    {
      text: "Personalized Career Guidance for Every Applicant",
      icon: <BsPerson />,
      color: "blue",
    },
    {
      text: "Top Job Opportunities Across the Gulf Countries",
      icon: <BiWorld />,
      color: "orange",
    },
    {
      text: "24/7 Support for Job Seekers",
      icon: <BsHeadphones />,
      color: "purple",
    },
  ];
  
  return (
    <Section id="offer">
      <div className="image">
        <img src={lighthouse} alt="lighthouse" />
      </div>
      <div className="content">
        <div className="title">
          <h1>Exclusive Services Offered for Your Career Advancement</h1>
        </div>
        <ul className="list">
          {data.map(({ text, icon, color }) => {
            return (
              <li key={text}>
                <div className={`icon ${color}`}>{icon}</div>
                <div className="text">
                  <h3>{text}</h3>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </Section>
  );
}

const Section = styled.section`
  margin: 8rem 0;
  display: flex;
  gap: 5rem;
  .image {
    img {
      height: 35rem;
      width: auto; /* Ensure the image scales proportionally */
    }
  }
  .content {
    .title {
      margin: 2rem 0;
      h1 {
        font-size: 3rem;
        color: var(--primary-text);
      }
    }
    .list {
      list-style-type: none;
      li {
        display: flex;
        align-items: center;
        gap: 2rem; /* Adjusted gap for better spacing */
        margin: 2rem 0; /* Adjusted margin for better spacing */
        .icon {
          padding: 0.75rem; /* Slightly larger padding for emphasis */
          border-radius: 50%; /* Circular icons */
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 2rem;
        }
        .blue {
          background-color: #007bff50; /* Light blue */
          color: #007bff;
        }
        .orange {
          background-color: #ff572255; /* Light orange */
          color: #ff5722;
        }
        .purple {
          background-color: #6f42c155; /* Light purple */
          color: #6f42c1;
        }
        .text {
          h3 {
            font-size: 1.5rem;
            color: var(--primary-text);
          }
        }
      }
    }
  }
  @media screen and (max-width: 1080px) {
    flex-direction: column;
    margin: 5rem 1rem;
    gap: 2rem;
    .image {
      img {
        max-width: 100%;
        height: auto;
      }
    }
    .content {
      .title {
        h1 {
          font-size: 2rem;
          text-align: center;
        }
      }
      .list {
        li {
          gap: 1rem;
          margin: 2rem 0;
          .text {
            h3 {
              font-size: 1rem;
            }
          }
        }
      }
    }
  }
`;
