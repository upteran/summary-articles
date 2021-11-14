import React, { useRef, useEffect } from "react";
import VanillaTilt from "vanilla-tilt";

import "./styles.scss";

type InfoCardType = {
  imgSrc: string;
  title: string;
  description: string;
};

export const InfoCard = ({ imgSrc, title, description }: InfoCardType) => {
  const cardRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (cardRef?.current) {
      VanillaTilt.init(cardRef.current, {
        max: 25,
        speed: 400,
      });
    }
  }, [cardRef]);
  return (
    <div className="card" ref={cardRef}>
      <img src={imgSrc} alt="" className="cardImg" />
      <div className="cardContent">
        <div className="cardTitle">{title}</div>
        <div className="cardDescription">{description}</div>
      </div>
    </div>
  );
};
