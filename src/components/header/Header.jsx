import React, { useEffect, useState } from 'react'
import HeaderBannerSwiper from './HeaderBannerSwiper'
import GeneralNavbar from './GeneralNavbar'
import ColorSelection from '../ColorSelection'

function Header() {
  const [activeColor, setActiveColor] = useState();
  const [showThemeColors, setShowThemeColors] = useState(true);
  const [colorItemStatus, setColorItemStatus] = useState(true);
  const toggleThemeColors = () => setShowThemeColors(!showThemeColors);
  useEffect(() => {
    document.documentElement.style.setProperty('--primary-color', `#${activeColor}`);
  }, [activeColor])
  return (
    <>
      <header id='header'>
        <HeaderBannerSwiper />
        <div className="header-layout">
          <GeneralNavbar activeColor={activeColor} setShowThemeColors={setShowThemeColors} setColorItemStatus={setColorItemStatus} />
        </div>
        <div className="header-content">
          <div className="header-time-counter">
            <h3>Welcome to </h3>
            <br></br>
            <h1>Green Waves</h1>
          </div>
        </div>
      </header>
      <ColorSelection activeColor={activeColor} toggleThemeColors={toggleThemeColors} setActiveColor={setActiveColor} showThemeColors={showThemeColors} colorItemStatus={colorItemStatus} setColorItemStatus={setColorItemStatus} />
    </>
  )
}

export default Header
