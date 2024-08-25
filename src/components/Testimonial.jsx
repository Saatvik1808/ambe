import React from "react";
import styled from "styled-components";
import testimonial1 from "../assets/testimonial1.png"; // Update with actual testimonials related to job services
import testimonial2 from "../assets/testimonial2.png"; // Update with actual testimonials related to job services
import avatar from "../assets/indian.png"; // Update with actual avatars if needed

export default function Testimonial() {
  return (
    <Section id="testimonial">
      <div className="title">
        <h1>What Our Clients Say About Our Services</h1>
      </div>
      <div className="testimonials">
        <div className="testimonial-image-one">
          <img src={testimonial1} alt="testimonial" />
        </div>
        <div className="testimonial">
          <div className="title">
            <div className="image">
              <img src={avatar} alt="avatar" />
            </div>
            <div className="info">
              <h3>Saatvik Shrivastava</h3>
              <span>Software Engineer</span>
            </div>
          </div>
          <p className="description">
            The job placement services provided by Ambe Technical Centre were exceptional. Their team helped me land a great position in a reputable company in the Gulf. The support and guidance were top-notch!
          </p>
        </div>
        <div className="testimonial-image-two">
          <img src={testimonial2} alt="testimonial" />
        </div>
      </div>
    </Section>
  );
}

const Section = styled.section`
  margin-top: 5rem;
  .title {
    display: flex;
    justify-content: center;
    h1 {
      text-align: center;
      font-size: 2rem;
      width: 70%;
      color: var(--primary-text);
    }
  }
  .testimonials {
    display: flex;
    gap: 2rem;
    justify-content: center;
    .testimonial {
      margin-top: 2rem;
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
      padding: 2rem 1.5rem;
      height: max-content;
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
      border-top: 0.5rem solid var(--primary-color);
      .title {
        display: flex;
        gap: 1rem;
        align-items: center;
        .image {
          img {
            height: 3rem;
            border-radius: 50%;
          }
        }
        .info {
          span {
            color: var(--primary-color);
            font-weight: bold;
          }
        }
      }
      .description {
        font-size: 1rem;
        line-height: 1.4rem;
        color: var(--secondary-text);
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    margin-top: 3rem;
    .title {
      h1 {
        font-size: 1.5rem;
        width: 90%;
      }
    }
    .testimonials {
      flex-direction: column;
      gap: 2rem;
      .testimonial-image-one,
      .testimonial-image-two {
        max-inline-size: 100%;
        block-size: auto;
      }
    }
  }
`;
