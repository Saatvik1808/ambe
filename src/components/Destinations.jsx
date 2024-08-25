import React from "react";
import styled from "styled-components";
import gulf1 from "../assets/dubai.jpg"; // Update paths if needed
import gulf2 from "../assets/doha.png";
import gulf3 from "../assets/pariss.png";

export default function Destinations() {
  const data = [
    {
      name: "Dubai",
      image: gulf1,
      description: "Explore career opportunities in one of the most dynamic cities in the Gulf.",
    },
    {
      name: "Doha",
      image: gulf2,
      description: "Find job openings and career growth opportunities in Doha, Qatar.",
    },
    {
      name: "Europe",
      image: gulf3,
      description: "Discover various job roles and professional advancement in Europe.",
    },
  ];

  return (
    <Section id="destination">
      <div className="info">
        <h2>
          Top <span>Job Opportunities</span> In The Gulf Countries
        </h2>
        <p>
          Discover the best career opportunities in leading cities across the Gulf region. 
          Find your ideal job and take the next step in your professional journey.
        </p>
      </div>

      <div className="destinations">
        {data.map(({ name, image, description }) => {
          return (
            <div className="destination" key={name}>
              <div className="image">
                <img src={image} alt={name} />
              </div>
              <div className="name">
                <h3>{name}</h3>
                <p>{description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}

const Section = styled.section`
  display: flex;
  gap: 5rem;
  .info {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 3rem;
    h2 {
      font-size: 3rem;
      line-height: 3rem;
      span {
        color: var(--primary-color);
      }
    }
    p {
      color: var(--secondary-text);
    }
  }
  .destinations {
    flex: 2;
    display: flex;
    gap: 2rem;
    flex-wrap: wrap; /* Allow items to wrap onto multiple lines */
    .destination {
      position: relative;
      flex: 1 1 30%; /* Flex items will take up about 30% of the container */
      max-width: 30%; /* Ensure items do not exceed this width */
      box-sizing: border-box; /* Include padding and border in the element's total width and height */
      margin-bottom: 2rem;
      img {
        height: 20rem;
        width: 100%;
        object-fit: cover;
      }
      .name {
        position: absolute;
        bottom: 0;
        height: 100%;
        width: 100%;
        background: linear-gradient(to bottom, rgba(255, 255, 255, 0.1), rgba(0, 0, 0, 0.7));
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        padding: 1rem;
        h3 {
          margin: 0;
          font-size: 1.5rem;
          color: white;
        }
        p {
          font-size: 1rem;
          color: white;
        }
      }
    }
  }
  @media screen and (max-width: 1080px) {
    margin: 0rem 2rem;
    flex-direction: column;
    gap: 3rem;
    .destinations {
      .destination {
        img {
          width: 100%;
          height: auto;
        }
        flex: 1 1 100%; /* Each item takes full width on small screens */
        max-width: 100%;
      }
    }
  }
  @media screen and (max-width: 768px) {
    .info {
      gap: 2rem;
      h2 {
        font-size: 2.5rem; /* Adjusted font size for smaller screens */
      }
      p {
        font-size: 1rem; /* Adjusted font size for smaller screens */
      }
    }
    .destinations {
      .destination {
        img {
          height: 15rem; /* Adjusted height for smaller screens */
        }
        .name {
          h3 {
            font-size: 1.25rem; /* Adjusted font size for smaller screens */
          }
          p {
            font-size: 0.875rem; /* Adjusted font size for smaller screens */
          }
        }
      }
    }
  }
  @media screen and (max-width: 480px) {
    .info {
      h2 {
        font-size: 2rem; /* Further reduced font size for very small screens */
      }
      p {
        font-size: 0.875rem; /* Further reduced font size for very small screens */
      }
    }
    .destinations {
      .destination {
        img {
          height: 12rem; /* Further reduced height for very small screens */
        }
        .name {
          h3 {
            font-size: 1rem; /* Further reduced font size for very small screens */
          }
          p {
            font-size: 0.75rem; /* Further reduced font size for very small screens */
          }
        }
      }
    }
  }
`;
