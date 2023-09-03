import React from 'react'
import { Link } from "react-router-dom";
import LandingPage from './LandingPage'
import Navbar from './Navbar'
import photo from '../img/bookspng (2).png'
import noteI from '../img/notebookicon (2).png'
import cele from '../img/cele (2).png'
import cart from '../img/cart (2).png'
import notes from '../img/notepadpng (1).png'
import book from '../img/bookspng (4).png'
import clock from '../img/timerpng (2).png'


export default function HomePage() {






  


  return (
    <>
      <div className="body">
          <Navbar />
        <div className='homepage'>
          <div className="homediv">
            <div className="headingHome" >
              WELCOME TO <p>&#123;College eazy&#125;</p>
              <h6 >we provides Organized Concise Accurate Comprehensive Visual Personalized Reviewable notes for you. Best notes are organized in a logical and easy-to-follow manner, with headings, subheadings, and bullet points</h6>
            </div>
            <div className="buttHome">
            <Link to="/notes" style={{ textDecoration: "none", }}>
              <button className='btn btn-primary homebutton' id='homebutton'>Browsers Notes</button>
              </Link>
            </div>
          </div>
          <div className="imggHome" >
            <img src={photo} style={{ width: "100%", height: "500px" }} alt="" />
          </div>
        </div>

        <div className="imgCard">
          <div className="line"></div>
          <div className="boxPack">
          <Link to="/notes" style={{ textDecoration: "none", }}>
            <div className="box">
              <div className="circule1">
                <img src={noteI} alt="" />
              </div>
             
              <div className='textCard'>
                <h3>100+</h3>
                <h4>NOTES</h4>
              </div>
              
            </div>
            </Link>

            <Link to="/AttendancePage" style={{ textDecoration: "none", }}>
            <div className="box">
              <div className="circule2">
                <img src={cele} alt="" />
              </div>
              <div className='textCard'>
                <h3>YOUR</h3>
                <h4>ATTENDANCE</h4>
              </div>
            </div>
            </Link>

            <Link to="/Shop" style={{ textDecoration: "none", }}>
            <div className="box">
              <div className="circule3">
                <img src={cart} alt="" />
              </div>
              <div className='textCard'>
                <h3>200+</h3>
                <h4>SHOP NOW</h4>
              </div>
            </div>
            </Link>

          </div>

          <div className="homecardText">
            <div className="headButton">
              <div className="h">
                <p>BEST NOTES FOR B TECH</p>
              </div>
              <div className="buttHo">
              <Link to="/notes" style={{ textDecoration: "none", }}>
                <button className='btn btn-primary ' >All Categories</button>
                </Link>
              </div>
            </div>
            <div className="bigText">
              <h1>NOTE</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis in dolorum laboriosam officia nihil facilis, harum accusantium iste quas obcaecati rem saepe incidunt inventore doloribus. Dignissimos sequi voluptatum reprehenderit officia.</p>
            </div>
          </div>


        </div>

        <div className="WhyWEBetter">
          <div className="why">
            <h1>Why we better than others</h1>
            <p>takenig and making notes to allow to be a good lerner and improve the marks in eaxm</p>
          </div>
          <div className="phot">
            <img src={notes} alt="" />
            <h1>Best Notes</h1>
          </div>
          <div className="phot">
            <img src={clock} alt="" />
            <h1>Latest Notes</h1>
          </div>
          <div className="phot">
            <img src={book} alt="" />
            <h1>All Subject</h1>
          </div>
        </div>


        <LandingPage />
      </div>
    </>
  )
}
