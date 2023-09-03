import React from 'react'
import Navbar from './Navbar'
import profile from '../img/profileimg.png'

export default function Profile() {
  return (
    <>
    <Navbar/>
    <div className='profile'>
        <div className='profileCard'>
            <div className="NameIMgSec">
                <div className="imgsecPro">
                    <img src={profile} alt="" />
                </div>
                <div className="textSecPRo">
                    <h3>Name : Aadil khan</h3>
                    <hr />
                    <h3>Enrollment No : 14615603121</h3>
                    <hr />
                    <h3>Contact : 9876543212</h3>
                    <hr />
                    <div className="brach">
                    <h3>Semster  : 4th</h3>
                    <h3>branch  : IT</h3>
                    <hr />
                    </div>
                </div>

            </div>  
            <div className="subjectSecPro">
                <h3>Contact Us</h3>
                <div className="SubName">
                    <span>Enter your E-mail:</span>
                   <input type="email" name="" id=""  placeholder='E-mail'/>
                   <span>Write Your suggestion/query here:</span>
                   <textarea name="" id="" cols="20" rows="7" placeholder='Discription '></textarea>
                   <button className='contactbtn' >submit</button>
                </div>

            </div>
        </div>
    </div>
    </>
  )
}
