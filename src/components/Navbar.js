import React from "react";
import { useEffect, useState } from "react";
import LoginPage from "./LoginPage";
import { Link } from "react-router-dom";
import { GiNotebook } from "react-icons/gi";
import { BsFillQuestionCircleFill } from "react-icons/bs";
import { SiGooglesheets } from "react-icons/si";
import { MdSell } from "react-icons/md";
import axios from "axios";
import Notes from "./Notes";
import SemesterCard from "./SemesterCard";
import AttendancePage from "./AttendancePage";

export default function Navbar() {

  // const [userData, setuserData] = useState([]);
  const [userData, setuserData] = useState({
    enroll: "149",
    Branch: "CSE",
    Semester: "1st",
    enrollment: "178",
    subject1: "CIC-101",
    subject1_present : 11,
    subject1_absent : 3,
    subject: "CIC-102",
    subject2_present : 15,
    subject2_absent : 5,
    subject3: "CIC-103",
    subject3_present : 17,
    subject3_absent : 4,
    subject4: "CIC-104",
    subject4_present : 12,
    subject4_absent : 5,
    subject5: "CIC-105",
    subject5_present : 19,
    subject5_absent : 8,
    subject5: "CIC-005",
    subject6_present : 1,
    subject6_absent : 5
  });

  // const [val, setVal] = useState({
  //   enroll: "",
  //   Branch: "",
  //   Semester: ""
  // });

  // const branch=e.target.userData.branch

  async function getcallAPI() {
    try {
      // const { enroll, Branch,  Semester } = val;
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      // setuserData(response.data);

      // const setData = `
      // Branch: ${Branch},
      // Semester: ${Semester}
      // `;

      // console.log(userData);
      // console.log("Got data Successfully");
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <div className="boxnav">
        <nav className="navbar navbar-expand-lg " style={{ color: "#3ec8ea" }}>
          <div className="container-fluid">
            <Link
              className="navbar-brand"
              to="/"
              style={{ color: "#9b87ff", fontSize: "50px" }}
            >
              College Eazy
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" to="/Notes">
                    <SiGooglesheets /> Notes
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    to="/AttendancePage"
                    onClick={getcallAPI}
                    state={{ userData: userData }}
                  >
                    <SiGooglesheets /> Attendance
                  </Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="#">
                    <MdSell /> Sell & Buy
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="#">
                    <BsFillQuestionCircleFill /> About
                  </a>
                </li>
              </ul>

              <div className="modalCard">
                <button
                  type="button"
                  className="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#LoginPage"
                >
                  Login
                </button>
                <div
                  className="modal  login fade"
                  id="LoginPage"
                  tabIndex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <button
                        type="button"
                        className="btn-close"
                        // onClick={handleColse}
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                      <LoginPage />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
      {/* <AttendancePage userData={userData}  /> */}
    </>
  );
}

// export {inc};
// export {dec};
