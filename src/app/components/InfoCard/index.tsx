import React, { useRef } from "react";
import { ButtonWrap } from "../ButtonWrap";

import "./styles.scss";

type InfoCardType = {
  imgSrc?: string;
  title: string;
  description: string;
  buttonCtx: React.Component;
};

export const InfoCard = ({ title, description, buttonCtx }: InfoCardType) => {
  const cardRef = useRef<HTMLDivElement>(null);
  return (
    <div className="card" ref={cardRef}>
      <div className="cardContent">
        <div className="cardTitle">{title}</div>
        <div className="cardDescription">{description}</div>
        <div className="btnWrap">
          <ButtonWrap tag="div">{buttonCtx}</ButtonWrap>
        </div>
      </div>
    </div>
  );
};
