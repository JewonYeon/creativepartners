import React from "react";
import { Link } from "react-router-dom";
import "./Footer.scss";
import move from "./move.png";
// import facebook from "../nav/components/facebook.svg";

import facebook from "../nav/components/facebook.svg";
import instagram from "../nav/components/instagram.svg";
import youtube from "../nav/components/youtube.svg";
import brunch from "../nav/components/brunch.svg";

const Footer = () => {
  const snsLinkList = [facebook, instagram, youtube, brunch];
  // https://velog.io/@roghabo/hover-%EC%8B%9C-%EC%9D%B4%EB%AF%B8%EC%A7%80-%EB%B3%80%ED%99%98%ED%95%98%EA%B8%B0react-hook
  return (
    <div className="Footer">
      <div className="footer-section">
        <div className="footer-section-container">
          <div className="footer-section-item">
            <div className="footer-section-contact">
              <Link to="/contact">
                <span className="footer-section-contact-label">
                  Contact Us <img src={move} alt="contact" />
                </span>
              </Link>
            </div>
          </div>
          <div className="footer-section-item">
            <div className="title">Follow Us</div>
            <div className="content">
              <div className="fill">
                <ul className="snsLink">
                  {snsLinkList.map((link, idx) => {
                    return (
                      <li key={idx}>
                        <a>
                          <img src={link} alt="link" />
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="empty"></div>
              <div className="fill">
                <a href="#!">
                  회사소개
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 16 16"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ fontSize: "16px" }}
                  >
                    <path
                      fill-rule="evenodd"
                      d="M1.5 13A1.5 1.5 0 003 14.5h8a1.5 1.5 0 001.5-1.5V9a.5.5 0 00-1 0v4a.5.5 0 01-.5.5H3a.5.5 0 01-.5-.5V5a.5.5 0 01.5-.5h4a.5.5 0 000-1H3A1.5 1.5 0 001.5 5v8zm7-11a.5.5 0 01.5-.5h5a.5.5 0 01.5.5v5a.5.5 0 01-1 0V2.5H9a.5.5 0 01-.5-.5z"
                      clip-rule="evenodd"
                    ></path>
                    <path
                      fill-rule="evenodd"
                      d="M14.354 1.646a.5.5 0 010 .708l-8 8a.5.5 0 01-.708-.708l8-8a.5.5 0 01.708 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </a>
              </div>
              <div className="fill">
                <a href="#!">
                  채용공고
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 16 16"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ fontSize: "16px" }}
                  >
                    <path
                      fill-rule="evenodd"
                      d="M1.5 13A1.5 1.5 0 003 14.5h8a1.5 1.5 0 001.5-1.5V9a.5.5 0 00-1 0v4a.5.5 0 01-.5.5H3a.5.5 0 01-.5-.5V5a.5.5 0 01.5-.5h4a.5.5 0 000-1H3A1.5 1.5 0 001.5 5v8zm7-11a.5.5 0 01.5-.5h5a.5.5 0 01.5.5v5a.5.5 0 01-1 0V2.5H9a.5.5 0 01-.5-.5z"
                      clip-rule="evenodd"
                    ></path>
                    <path
                      fill-rule="evenodd"
                      d="M14.354 1.646a.5.5 0 010 .708l-8 8a.5.5 0 01-.708-.708l8-8a.5.5 0 01.708 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </a>
              </div>
              <div className="fill">
                <a href="#!">
                  Family site
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 16 16"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ fontSize: "16px" }}
                  >
                    <path
                      fill-rule="evenodd"
                      d="M1.5 13A1.5 1.5 0 003 14.5h8a1.5 1.5 0 001.5-1.5V9a.5.5 0 00-1 0v4a.5.5 0 01-.5.5H3a.5.5 0 01-.5-.5V5a.5.5 0 01.5-.5h4a.5.5 0 000-1H3A1.5 1.5 0 001.5 5v8zm7-11a.5.5 0 01.5-.5h5a.5.5 0 01.5.5v5a.5.5 0 01-1 0V2.5H9a.5.5 0 01-.5-.5z"
                      clip-rule="evenodd"
                    ></path>
                    <path
                      fill-rule="evenodd"
                      d="M14.354 1.646a.5.5 0 010 .708l-8 8a.5.5 0 01-.708-.708l8-8a.5.5 0 01.708 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
            <div className="title">Office</div>
            <div className="address">
              서울특별시 종로구 종로 51, 33층 (종로2가, 종로타워)
              <br />
              대표: 김용현 사업자등록번호: 111-08-52482
              <br /> 개인정보관리책임자: 김용현 Tel: 02-2088-6844 <br /> E-mail:
              roy@creativepartners.co.kr
            </div>
            <Link to="#" className="info">
              개인정보처리방침
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
