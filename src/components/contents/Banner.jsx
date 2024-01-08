import React from 'react';
import { useState, useEffect } from 'react';

import Bannerimg1 from '../../assets/img/banner/latte01.png';
import Bannerimg2 from '../../assets/img/banner/crepe.png';
import Bannerimg3 from '../../assets/img/banner/cappuccino.png';

import { SlArrowLeft } from "react-icons/sl";
import { SlArrowRight } from "react-icons/sl";

const Banner = () => {
  const [currentBannerIndex, setCurrentBannerIndex] = useState(0);
  const bannerInfo = [
    {
      h2 : "퐁당퐁당 초코커피",
      h4 : "달달한 초콜릿과 따뜻한 커피의 만남",
      img : Bannerimg1,
      bgc : "#907769"
    },
    {
      h2 : "딸기듬뿍 크라페",
      h4 : "달콤한 딸기와 부드러운 크라페의 만남",
      img : Bannerimg2,
      bgc : "#AA8572"
    },
    {
      h2 : "푹신푹신 카푸치노",
      h4 : "풍성한 거품과 고소한 카푸치노의 만남",
      img : Bannerimg3,
      bgc : "#887177"
    },
  ];

  useEffect(() => {
    const interval = setInterval (() => {
      setCurrentBannerIndex(prevIndex => prevIndex === bannerInfo.length - 1 ? 0 : prevIndex + 1);
    }, 10000);

    return () => {
      clearInterval(interval);
    };
  }, [bannerInfo.length]);

  const goToPreviousBanner = () => {
    setCurrentBannerIndex(prevIndex => prevIndex === 0 ? bannerInfo.length - 1 : prevIndex - 1);
  };

  const goToNextBanner = () => {
    setCurrentBannerIndex(prevIndex => prevIndex === bannerInfo.length - 1 ? 0 : prevIndex + 1);
  }

  return (
    <div className='main__banner' style={{backgroundColor: bannerInfo[currentBannerIndex].bgc}}>
      <div className="banner__container">
        <div className='text__container'>
          <div className='banner__text'>
            <h1>신메뉴 출시</h1>
            <h2>{bannerInfo[currentBannerIndex].h2}</h2>
            <h4>{bannerInfo[currentBannerIndex].h4}</h4>
          </div>
        </div>

        <div className='banner__img'>
          <img src={bannerInfo[currentBannerIndex].img} alt="신메뉴사진" />
        </div>

        <div className="banner__button">
          <div className="left__button">
            <button onClick={() => goToPreviousBanner()}>
              <SlArrowLeft />
            </button> 
          </div>
          <div className="right__button">
            <button onClick={() => goToNextBanner()}>
              <SlArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner;
