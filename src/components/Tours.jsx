import React from "react";
import styled from "styled-components";
import { BsFillStarFill } from "react-icons/bs";
import job1 from "../assets/sde.avif"; // Update with actual job-related images
import job2 from  "../assets/pj.avif";
import job3 from "../assets/sales.avif";
import vector1 from "../assets/vector1.png"; // Optional: Update or remove as needed
import vector2 from "../assets/vector2.png"; // Optional: Update or remove as needed
import ellipse from "../assets/ellipse.png"; // Optional: Update or remove as needed

export default function Jobs() {
  const data = [
    {
      image: job1,
      title: "Software Engineer in Dubai",
      salary: 5000,
      reviews: "200+ Applicants",
    },
    {
      image: job2,
      title: "Project Manager in Qatar",
      salary: 7000,
      reviews: "150+ Applicants",
    },
    {
      image: job3,
      title: "Sales Executive in Saudi Arabia",
      salary: 4500,
      reviews: "180+ Applicants",
    },
  ];

  return (
    <Section id="jobs">
      <h2>Available Job Opportunities</h2>
      <img src={ellipse} alt="ellipse" className="ellipse" />
      <div className="jobs">
        {data.map(({ image, title, salary, reviews }, index) => {
          return (
            <div className="job" key={title}>
              <div className="image">
                <img src={image} alt="job" />
                {index === 1 && (
                  <div className="vectors">
                    <img src={vector1} alt="vector" className="vector1" />
                    <img src={vector2} alt="vector" className="vector2" />
                  </div>
                )}
              </div>
              <div className="info">
                <div className="details">
                  <h4>{title}</h4>
                  <div className="salary-details">
                    <span className="salary">${salary} / month</span>
                    <div className="reviews">
                     
                      <span className="review">{reviews}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}

const Section = styled.section`
  margin-top: 15rem;
  margin-bottom: 5rem;
  position: relative;
  .ellipse {
    position: absolute;
    right: -5rem;
    top: -20rem;
    height: 30rem;
  }
  h2 {
    text-align: center;
    transform: translateY(-150px);
    font-size: 3rem;
    margin-bottom: 3rem;
  }
  .jobs {
    display: flex;
    gap: 1rem;
    justify-content: center;
    .job {
      position: relative;
      &:nth-of-type(2) {
        transform: translateY(-150px);
      }
      .image {
        img {
          height: 25rem;
        }
        .vectors {
          .vector1 {
            position: absolute;
            height: 8rem;
            top: 0rem;
            left: -9rem;
          }
          .vector2 {
            position: absolute;
            height: 8rem;
            top: 0rem;
            right: -8rem;
          }
        }
      }
      .info {
        position: absolute;
        bottom: -30px;
        right: 0;
        background-color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1rem;
        padding: 1rem;
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
        button {
          padding: 0.5rem 0.7rem;
          background-color: var(--primary-color);
          border: none;
          font-size: 1.1rem;
          color: white;
          cursor: pointer;
        }
        .details {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          .salary-details {
            display: flex;
            gap: 1rem;
            .salary {
              color: var(--primary-color);
              font-weight: bolder;
            }
            .reviews {
              display: flex;
              gap: 0.5rem;
              .stars {
                svg {
                  color: #ffc01e;
                }
              }
              .review {
                color: var(--secondary-text);
              }
            }
          }
        }
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    margin: 0 2rem;
    .ellipse {
      display: none;
    }
    h2 {
      transform: translateY(0px);
      font-size: 2rem;
    }
    .jobs {
      flex-direction: column;
      gap: 5rem;
      .job {
        &:nth-of-type(2) {
          transform: translateY(0);
        }
        button {
          display: none !important;
        }
        .image {
          img {
            max-inline-size: 100%;
            block-size: auto;
          }
          .vectors {
            display: none;
          }
        }
      }
    }
  }
`;
