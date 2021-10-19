import React, { useContext } from "react";
import { ViewportContext } from "../../../../context/hooks/useViewport.jsx";
import "./Slogan.scss";

const Slogan = () => {
  const { isMobile } = useContext(ViewportContext);

  return (
    <div className="Slogan">
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
  );
};

export default Slogan;
