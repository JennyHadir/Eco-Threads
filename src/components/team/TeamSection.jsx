import React, { useContext, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { MainContext } from '../../context/MainContextProvider'
import { Autoplay } from 'swiper/modules'

function TeamSection() {
    const { teamArr } = useContext(MainContext);
    useEffect(() => {
        let sosialIcon = document.querySelectorAll('.team-card .sosial-icons');

        for (let i = 0; i < sosialIcon.length; i++) {
            (function (index) {
                let sosialLink = sosialIcon[index].querySelectorAll('a');
                let delay = 0;
                for (let k = 0; k < sosialLink.length; k++) {
                    sosialLink[k].style.animationDelay = delay + 's';
                    delay = delay + 0.15;
                }
            })(i);
        }
    }, [])
    return (
        <section className="team-section" id='team'>
            <div className="container" data-aos="fade-up">
                <h1>Meet Our Team <br></br>of Student Innovators</h1>
                <div className="description">
                    <p>
                    At Green Waves, we're a dynamic group of students fueled by a passion for sustainability. <br></br>Despite our academic commitments, we've joined forces to tackle environmental challenges head-on. From diverse backgrounds in design, and marketing, we bring fresh perspectives to our mission.<br></br> Together, we're not just building a business, we're shaping a greener future—one eco-friendly pen at a time.<br></br> Join us in making a meaningful impact.
                    </p>
                </div>
                <Swiper
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    loop={true}
                    modules={[Autoplay]}
                    breakpoints={{
                        768: { slidesPerView: 1 },
                        1200: { slidesPerView: 1 },
                    }}
                >
                    {
                        teamArr.map(user => (
                            <SwiperSlide key={user.id}>
                                <div className="team-card" data-aos="zoom-in-up">
                                    <img src={user.image} alt="team" />
                                    <div className="bottom">
                                        <div className="info">
                                            <span className="name">{user.name}</span>
                                            <span className="position">{user.position}</span>
                                        </div>
                                        <div className="sosial-icons">
                                            <a href={user.facebook}><i className="fa-brands fa-facebook-f"></i></a>
                                            <a href={user.twitter}><i className="fa-brands fa-twitter"></i></a>
                                            <a href={user.instagram}><i className="fa-brands fa-instagram"></i></a>
                                            <a href={user.linkedin}><i className="fa-brands fa-linkedin-in"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </section>
    )
}

export default TeamSection
