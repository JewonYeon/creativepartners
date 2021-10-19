import React, { useState } from "react";
import { Link } from "react-router-dom";
import FooterSnsLink from "./components/FooterSnsLink.jsx";
import FooterMoveLink from "./components/FooterMoveLink.jsx";
import "./Footer.scss";
import move from "./move.png";
import move_hover from "./move_hover.png";

const Footer = () => {
  const [isContactLinkHover, setIsContactLinkHover] = useState(false);

  return (
    <div className="Footer">
      <div className="footer-section">
        <div className="footer-section-container">
          <div className="footer-section-item">
            <div className="footer-section-contact">
              <Link
                to="/contact"
                onMouseOver={() => setIsContactLinkHover(true)}
                onMouseOut={() => setIsContactLinkHover(false)}
              >
                <span className="footer-section-contact-label">
                  {/* Contact Us <img src={move} alt="contact" /> */}
                  Contact Us
                  <img
                    src={isContactLinkHover ? move_hover : move}
                    alt="contact"
                  />
                </span>
              </Link>
            </div>
          </div>
          <div className="footer-section-item">
            <div className="title">Follow Us</div>
            <div className="content">
              <div className="fill">
                <FooterSnsLink />
              </div>
              <div className="empty"></div>
              <div className="fill">
                <FooterMoveLink content="회사소개" />
              </div>
              <div className="fill">
                <FooterMoveLink content="채용공고" />
              </div>
              <div className="fill">
                <FooterMoveLink content="Family site" />
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
