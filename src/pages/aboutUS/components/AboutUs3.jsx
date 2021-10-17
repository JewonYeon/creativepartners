import React, { useState } from "react";
import "./AboutUs3.scss";
import { image1, image2, image3, image4 } from "./index";

const AboutUs3 = () => {
  const slideList = [image1, image2, image3, image4];
  const [currentImage, setCurrentImage] = useState(0);

  const handleNextImage = () => {
    if (currentImage >= 3) {
      setCurrentImage(0);
    } else {
      setCurrentImage((prev) => prev + 1);
    }
  };

  const handlePrevImage = () => {
    if (currentImage <= 0) {
      setCurrentImage(3);
    } else {
      setCurrentImage((prev) => prev - 1);
    }
  };
  return (
    <div className="AboutUs3">
      <div className="aboutUs3-wrapper">
        <div className="title">CREATIVE PARTNERS TEAM</div>
        <div className="content">
          고객을 진심으로 이해하는 최고의 전문가가 함께 합니다.
          <br />
          업종별 전문 회계사와 세무사가 고객의 성공을 위한 사업 파트너가
          되어드립니다.
        </div>
        <div className="slider">
          <div className="slider-content">
            <svg
              onClick={handlePrevImage}
              className="prev"
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 16 16"
              data-role="none"
              currentSlide="3"
              slideCount="4"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M5.854 4.646a.5.5 0 010 .708L3.207 8l2.647 2.646a.5.5 0 01-.708.708l-3-3a.5.5 0 010-.708l3-3a.5.5 0 01.708 0z"
                clip-rule="evenodd"
              ></path>
              <path
                fill-rule="evenodd"
                d="M2.5 8a.5.5 0 01.5-.5h10.5a.5.5 0 010 1H3a.5.5 0 01-.5-.5z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <div className="slideBox">
              <div
                className="slideList"
                style={{
                  transform: `translate3d(${currentImage * -25}%, 0px, 0px)`,
                }}
              >
                {slideList.map((image, idx) => {
                  return (
                    <div className="slideContent" key={idx}>
                      <picture>
                        <img src={image} alt="about" />
                      </picture>
                    </div>
                  );
                })}
              </div>
            </div>
            <svg
              onClick={handleNextImage}
              className="next"
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 16 16"
              data-role="none"
              currentSlide="3"
              slideCount="4"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10.146 4.646a.5.5 0 01.708 0l3 3a.5.5 0 010 .708l-3 3a.5.5 0 01-.708-.708L12.793 8l-2.647-2.646a.5.5 0 010-.708z"
                clip-rule="evenodd"
              ></path>
              <path
                fill-rule="evenodd"
                d="M2 8a.5.5 0 01.5-.5H13a.5.5 0 010 1H2.5A.5.5 0 012 8z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <div className="gauge">
              <div
                className="gauge-current"
                style={{
                  transform: `translate3d(${currentImage * 100}%, 0px, 0px)`,
                }}
              ></div>
            </div>
            {/* <ul className="dots">
              <li>
                <button>1</button>
              </li>
              <li>
                <button>2</button>
              </li>
              <li>
                <button>3</button>
              </li>
              <li className="active">
                <button>4</button>
              </li>
            </ul> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs3;
