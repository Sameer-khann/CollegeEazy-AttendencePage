import React from 'react'
import { Link } from "react-router-dom";
import note from '../img/bookspng (1).png'
import att from '../img/celender1.webp'
import shop from '../img/shop4.png'
import adImg from '../img/notePic5New.png'
import tagImg from '../img/tag.png'
import bulb from '../img/blub (2).png'
import dia from '../img/dai (2).png'
import gear from '../img/gear (2).png'
import insta from '../img/insta (1).png'
import fb from '../img/facebook (1).png'
import tiwtter from '../img/tiwtter (1).png'




// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';


// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';



export default function LandingPage() {




    return (
        <>

            <div className="NotesSection">
                <div className="noteimg">
                    <img src={note} alt="" />
                </div>
                <div className="textNotes">
                    <h1>We have been improving for so many years</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, aperiam repudiandae ex aut, expedita quia voluptates assumenda doloribus odio praesentium eaque quod ab minus,</p>

                    <div className="buttNote">
                        <Link to="/notes" style={{ textDecoration: "none", }}>
                            <button>NOTES</button>
                        </Link>
                    </div>
                </div>

            </div>


            <div className="AttenSection">
                <div className="textAttendece">
                    <h1>We have been <span>improving</span> for so many years</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, aperiam repudiandae ex aut, expedita quia voluptates assumenda doloribus odio praesentium eaque quod ab minus,</p>

                    <div className="buttAttdace">
                    <Link to="/AttendancePage" style={{ textDecoration: "none", }}>
                        <button>TRACK YOUR ATTENDANCE</button>
                        </Link>
                    </div>
                </div>
                <div className="attenimg">
                    <img src={att} alt="" />
                </div>

            </div>

            <div className="noteADD">
                <div className="tag">
                    <img src={tagImg} alt="" />
                </div>
                <div className="items">
                    <div className="adimg">
                        <img src={adImg} alt="" />
                        <div className="adtext">
                            <h1>BEST NOTES</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing obcaecati illo.</p>
                        </div>
                    </div>
                </div>
            </div>


            <div className="ShopSection">
                <div className="Shopimg">
                    <img src={shop} alt="" />
                </div>
                <div className="textShop">
                    <h1>We have been <span>improving</span> for so many years</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, aperiam repudiandae ex aut, expedita quia voluptates assumenda doloribus odio praesentium eaque quod ab minus,</p>

                    <div className="buttShop">
                    <Link to="/Shop" style={{ textDecoration: "none", }}>
                        <button>SHOP NOW</button>
                        </Link>
                    </div>
                </div>


            </div>


            {/* start img section */}
            <div className="headIMGSlider">
                <h1>TEAM MENBER</h1>
            </div>

            {/* img slider */}
            <div className="imgSlider">
                <Swiper
                    effect={'coverflow'}
                    grabCursor={false}
                    centeredSlides={true}
                    initialSlide={1}
                    loop={false}
                    slidesPerView={'auto'}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: -100,
                        depth: 500,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    pagination={
                        {
                            el: ".swiper-pagination",
                        }
                    }

                    modules={[EffectCoverflow, Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide style={{ width: '400px', height: '450px' }}>
                        <div className="team-box team-box1">
                            <div className="team-name">
                                <center>
                                    <div className="team-content">
                                        <h2>SHASHANK PANDAY</h2>
                                        <p>Web Developer</p>
                                    </div>
                                </center>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide style={{ width: '400px', height: '450px' }}>
                        <div className="team-box team-box2">
                            <div className="team-name">
                                <center>
                                    <div className="team-content">
                                        <h2>MOHD AZAM</h2>
                                        <p>Web Developer</p>
                                    </div>
                                </center>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide style={{ width: '400px', height: '450px' }}>
                        <div className="team-box team-box3">
                            <div className="team-name">
                                <center>
                                    <div className="team-content">
                                        <h2>SAMEER KHAN</h2>
                                        <p>Web Developer</p>
                                    </div>
                                </center>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>

            {/* about */}

            <div className="aboutHead">
                <h1>About Us</h1>
            </div>
            <div className="about">
                <div className="bgabout">
                    <div className="cardAboutA">
                        <div className="logo">
                            <img src={bulb} alt="" />
                        </div>
                        <div className="textaboutA">
                            <h1>Features</h1>
                            <p>A strategy describes how the ends (goals) will be achieved by the means (resources).</p>
                        </div>
                        <div className="buttonabout">
                            <button>Read More</button>
                        </div>
                    </div>
                    <div className="cardAboutB">
                        <div className="logoB">
                            <img src={dia} alt="" />
                        </div>
                        <div className="textaboutB">
                            <h1>Features</h1>
                            <p>A strategy describes how the ends (goals) will be achieved by the means (resources).</p>
                        </div>
                        <div className="buttonaboutB">
                            <button>Read More</button>
                        </div>
                    </div>
                    <div className="cardAboutC">
                        <div className="logoC">
                            <img src={gear} alt="" />
                        </div>
                        <div className="textaboutC">
                            <h1>Features</h1>
                            <p>A strategy describes how the ends (goals) will be achieved by the means (resources).</p>
                        </div>
                        <div className="buttonaboutC">
                            <button>Read More</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* end about */}


            <div className="footerSec">


                <div className="logoSecFoot">
                    <h1>CollegeEazy</h1>
                    <div className="socialMedia">
                        <img src={insta} alt="" />
                        <img src={fb} alt="" />
                        <img src={tiwtter} alt="" />
                    </div>
                </div>

                <div className="supportSecFoot">
                    <h1>Support</h1>
                    <h5>Notes</h5>
                    <h5>Attendance</h5>
                    <h5>ShopEazy</h5>
                    <h5>About Us</h5>
                </div>

                <div className="ContactUsFoot">
                    <h2>Contact us</h2>
                    <div className="phone">
                        <h4>Phone :</h4>
                        <h6> +91 78348 38443</h6>
                    </div>
                    <div className="email">
                        <h4>E mail :</h4>
                        <h6>collegeeazy@gmail.com</h6>
                    </div>
                    <div className="add">
                        <h4>Address: </h4>
                        <h6>FC-26, Panduk Shila Marg, Zero Pusta Rd, Shastri Park, Shahdara, New Delhi, Delhi 110053</h6>
                    </div>

                </div>


            </div>
            <div className="copyright">
                <p>All rights Copyright &copy; collegeazy.com</p>
            </div>

        </>
    )
}
