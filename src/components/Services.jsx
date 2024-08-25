import React from "react";
import styled from "styled-components";
import service1 from "../assets/career.png";
import service2 from "../assets/resume.png";
import service3 from "../assets/inter.png";
import service4 from "../assets/visa.png";

export default function Services() {
  const data = [
    {
      image: service1,
      title: "Career Counseling",
      description: "Get expert guidance to choose the right career path and explore job opportunities in the Gulf region.",
    },
    {
      image: service2,
      title: "Resume Building",
      description: "Receive assistance in creating a standout resume that highlights your skills and experiences for Gulf employers.",
    },
    {
      image: service3,
      title: "Interview Preparation",
      description: "Prepare for your interviews with mock sessions and tips tailored to the Gulf job market.",
    },
    {
      image: service4,
      title: "Visa Assistance",
      description: "Get help with visa applications and other paperwork required for working in Gulf countries.",
    },
  ];

  return (
    <Section id="services">
      <div className="services">
        {data.map(({ image, title, description }) => {
          return (
            <div className="service" key={title}>
              <img src={image} alt={title} />
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
          );
        })}
      </div>
    </Section>
  );
}

const Section = styled.section`
  margin: 8rem 4rem;
  .services {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;
    .service {
      padding: 1.5rem 2rem;
      text-align: center;
      background-color: var(--card-grey);
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 1rem;
      h3 {
        color: var(--primary-text);
      }
      p {
        color: var(--secondary-text);
      }
      img {
        height: 128px;
        width: 128px;
      }
      transition: var(--default-transition);
      &:hover {
        background-color: white;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    margin: 3rem;
    .services {
      grid-template-columns: 1fr;
    }
  }
`;
