import React, { useState } from 'react'
import AboutUsSection from "./about-us/AboutUsSection";
import ContactSection from "./contact/ContactSection";
import Footer from "./footer/Footer";
import Header from "./header/Header";

import ProductSection from "./products/ProductSection";
import TeamSection from "./team/TeamSection";
import WhySection from "./why-us/WhySection";

function SiteLayout() {
    const [showScrollBtn, setShowScrollBtn] = useState(false);
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            setShowScrollBtn(true)
        } else {
            setShowScrollBtn(false)
        }
    })
    const handleScrollBtn = () => {
        window.scrollTo(0, 0)
    }
    return (
        <>
            <button onClick={handleScrollBtn} className={`page-scroll-button ${showScrollBtn ? '' : 'd-none'}`}><i className="fa-solid fa-arrow-up"></i></button>
            <Header />
            <main>
                <ProductSection />
                <AboutUsSection />
                <WhySection />
                <TeamSection />
                <ContactSection />
            </main>
            <Footer />
        </>
    )
}

export default SiteLayout
