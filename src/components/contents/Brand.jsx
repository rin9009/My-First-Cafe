import React from 'react';

import Menubox1 from '../../assets/img/banner/latte01.png';
import Menubox2 from '../../assets/img/dessert/waffle01.png';
import Menubox3 from '../../assets/img/coffee/mocha.png';

const Brand = () => {
  return (
    <div className='main__menubox'>
      <div className="menubox__container">
        <div className="menubox__left">
          <h2>신메뉴</h2>
          <img src={Menubox1} alt="초코커피" />
          <h3>퐁당퐁당 초코커피</h3>
        </div>
        <div className="menubox__right">
          <h2>인기메뉴</h2>
          <div className="right__container">
            <div className="menu1">
              <img src={Menubox2} alt="와플" />
              <h3>슈가와플</h3>
            </div>
            <div className="menu2">
              <img src={Menubox3} alt="나" />
              <h3>아이스라떼</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Brand;
