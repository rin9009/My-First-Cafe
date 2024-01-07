import React from 'react';

import Bannerimg from '../../assets/img/banner/latte01.png';

const Banner = () => {
  return (
    <div className='main__banner'>
      <div className="banner__container">
        <div className='text__container'>
          <div className='banner__text'>
            <h1>신메뉴 출시</h1>
            <h2>퐁당퐁당 초코커피</h2>
            <h4>달콤한 초콜릿과 따뜻한 커피의 만남</h4>
          </div>
        </div>

        <div className='banner__img'>
          <img src={Bannerimg} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Banner;
