import { Circle } from "rc-progress";
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import tasveer from "../img/attendence10.png";
import axios from "axios";

export default function AttendencePage(props) {
  const [totalCount, setTotalCount] = useState(0);
  const [final, setFinal] = useState(0);
  const [inc, setInc] = useState(0);
  const [dec, setDec] = useState(0);
  const [sub, setSub] = useState("");
  const [branch, setBranch] = useState("");

  const location = useLocation();
  const userData = location.state?.userData;

  useEffect(() => {
    const percentage = Math.trunc((inc * 100) / totalCount);
    setFinal(percentage);
  }, [inc, totalCount]);

  const handleInc = () => {
    setInc(inc + 1);
  };

  const handleDec = () => {
    setDec(dec + 1);
  };

  const handleTotal = () => {
    setTotalCount(totalCount + 1);
  };

  const handleSubjectClick = (subject,subjectID) => {
    const subjectData = userData[subject];
    setInc(subjectData.present);
    setDec(subjectData.absent);
    setSub(subject);
  };

  const subjectButtons = [
    { text: "Programming in C", name: "Programming in C", value: "ES-101" },
    { text: "applied chemistry", name: "applied chemistry", value: "BS-103" },
    { text: "C", name: "C", value: "CHEMISRTY" },
    { text: "D", name: "D", value: "DSA" },
    { text: "E", name: "E", value: "OOPS" },
    { text: "F", name: "F", value: "CM" },
  ];

  const Subject = () => {
    if (userData.Branch === "CSE" && userData.Semester === "1st") {
      return subjectButtons.map((button) => (
        <button
          className="btnn"
          name={button.name}
          value={button.value}
          onClick={() => handleSubjectClick(`subject${button.name}_data`,`subject${button.value}_data`)}
        >
          {button.text}
        </button>
      ));
    } else if (userData.Branch === "CSE" && userData.Semester === "2nd") {
      return subjectButtons.map((button) => (
        <button
          className="btnn"
          name={button.name}
          value={button.value}
          onClick={() => handleSubjectClick(`subject${button.name.toLowerCase()}_data`)}
        >
          {button.text}
        </button>
      ));
    }
    return null;
  };

  const handleChange = async () => {
    try {
      const response = await axios.post('https://example.com/api', {
        subject: sub,
        inc: inc,
        dec: dec,
        branch: userData.Branch
      });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
    <Navbar />
    <div className="attendance">
      <div className="sidebar">
        <h1
          style={{
            textAlign: "center",
            paddingBottom: "10px",
            paddingTop: "20px",
          }}
        >
          SUBJECTS
        </h1>
        <ul style={{ listStyle: "none" }}>
          <Subject />
        </ul>
      </div>
      <div className="main">
        <h2 style={{ textAlign: "center" }}>Attendence in {sub}</h2>
        <h2 style={{ textAlign: "center" }}>{branch}</h2>
        <div className="bb" style={{ display: "flex" }}>
          <div className="atte-img">
            <img src={tasveer} alt="img" style={{ width: "500px" }} />
          </div>

          <div className="cc">
            <div className="meter">
              <div className="progressCenter">{final}%</div>
              <div className="aa">
                <Circle
                  percent={final}
                  strokeWidth={4}
                  strokeColor="violet"
                  trailWidth={4}
                  trailColor="lightGrey"
                  gapDegree={20}
                  gapPosition="bottom"
                />
              </div>
            </div>

            <div className="count">
              <div className="dec">
                <div style={{ fontSize: "25px" }}>{dec}</div>

                <button
                  className="dec"
                  onClick={() => {
                    handleDec();
                    handleTotal();
                    handleChange();
                  }}
                  style={{ fontSize: "20px" }}
                >
                  <b>Absent</b>
                </button>
              </div>
              <div className="inc">
                <div style={{ fontSize: "25px" }}>{inc}</div>
                <button
                  className="inc"
                  onClick={() => {
                    handleInc();
                    handleTotal();
                    handleChange();
                  }}
                  style={{ fontSize: "20px" }}
                >
                  <b>Present</b>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
   );
}