import React, { useContext } from "react";
import "./AboutUs1.scss";
import { ViewportContext } from "../../../context/hooks/useViewport.jsx";

const AboutUs1 = () => {
  const { isMobile } = useContext(ViewportContext);

  return (
    <div className="AboutUs1">
      <div className="aboutUs1-wrapper">
        <div className="aboutUs1-slogan">
          <div className="title">
            {`You `}
            <span>create,</span>
            {isMobile ? <br /> : <></>}
            {` we `}
            <span>support!</span>
          </div>
          <div className="content1">
            크리에이티브 파트너스는
            <br />더 큰 꿈을 향해 나아가는 크리에이터와 스타트업의 성공을 위해
            <br />
            세무 회계 서비스를 넘어 재무, 정부지원금, 자금 조달 등 원스톱 경영
            컨설팅 서비스를 제공합니다.
          </div>
          <div className="content2">
            축적된 노하우를 바탕으로 회계 세무서비스 시장을 선도하고 있으며,
            <br />
            궁극적으로 고객사가 위대한 기업이 되어 좋은 세상을 만드는 데에 함께
            기여하고자 합니다.
          </div>
        </div>
        <div className="aboutUs1-vision">
          <div className="title">VISION</div>
          <div className="content">
            우리와 연결된 모튼 파트너와 함께 더 나은 세상을 만들어 나갑니다.
            <br />
            세상을 바꿔나가는 혁신가들이 불필요한 시행착오없이 성장할 수 있는
            환경을 제공합니다.
          </div>
        </div>
        <div className="aboutUs1-mission">
          <div className="title">MISSION</div>
          <div className="content">
            100명의 평범한 구매자보다
            <br />
            1명의 극성팬을 만들어 나간다.
          </div>
          <div className="content">
            조금 더 낫다라는 평가보다는
            <br />
            가장 탁월하다는 평가를 받는다.
          </div>
          <div className="content">
            고객의 질문에 사후대응이 아닌
            <br />
            사전에 질문이 나오지 않도록 한다.
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs1;
