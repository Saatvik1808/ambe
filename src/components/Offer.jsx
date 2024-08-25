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
  margin: 8rem 2rem; /* Adjusted margin for better responsiveness */
  display: flex;
  gap: 5rem;
  flex-wrap: wrap; /* Allow items to wrap on smaller screens */

  .image {
    flex: 1;
    img {
      width: 100%;
      max-height: 35rem;
      object-fit: cover; /* Ensure image scales proportionally */
    }
  }

  .content {
    flex: 2;
    .title {
      margin-bottom: 2rem;
      h1 {
        font-size: 2.5rem; /* Adjusted font size for better readability */
        color: var(--primary-text);
        text-align: left;
      }
    }

    .list {
      list-style-type: none;
      padding: 0;
      margin: 0;

      li {
        display: flex;
        align-items: center;
        gap: 1.5rem; /* Adjusted gap for better spacing */
        margin-bottom: 1.5rem; /* Adjusted margin for better spacing */
        
        .icon {
          padding: 0.5rem; /* Reduced padding for smaller screens */
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 1.5rem; /* Reduced icon size */
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
            font-size: 1.2rem; /* Adjusted text size */
            color: var(--primary-text);
          }
        }
      }
    }
  }

  @media screen and (max-width: 1080px) {
    margin: 4rem 1rem;
    flex-direction: column;

    .image {
      img {
        max-height: 25rem; /* Adjust height for medium screens */
      }
    }

    .content {
      .title {
        h1 {
          font-size: 2rem; /* Adjusted font size for medium screens */
          text-align: center;
        }
      }
      .list {
        li {
          gap: 1rem; /* Adjusted gap for medium screens */
          .icon {
            font-size: 1.25rem; /* Adjusted icon size for medium screens */
          }
          .text {
            h3 {
              font-size: 1rem; /* Adjusted text size for medium screens */
            }
          }
        }
      }
    }
  }

  @media screen and (max-width: 768px) {
    margin: 2rem 0.8rem 1.0rem;
    
    .image {
      img {
        max-height: 20rem;
        margin-bottom: -6rem  /* Adjust height for small screens */
      }
    }

    .content {
      .title {
        h1 {
          font-size: 1.5rem; /* Adjusted font size for small screens */
        }
      }
      .list {
        li {
          gap: 0.75rem; /* Adjusted gap for small screens */
          .icon {
            font-size: 1rem; /* Adjusted icon size for small screens */
          }
          .text {
            h3 {
              font-size: 0.9rem; /* Adjusted text size for small screens */
            }
          }
        }
      }
    }
  }
`;
