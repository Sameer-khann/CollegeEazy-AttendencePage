import React, { useState, useEffect } from "react";
import { Circle } from "rc-progress";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import tasveer from "../img/attendence10.png";
import axios from "axios";
// import {enroll,Branch,Sem} from "./Navbar";

export default function AttendancePage(props) {
  const [totalCount, setTotalCount] = useState(0);
  const [final, setFinal] = useState(0);
  const [inc, setinc] = useState(0);
  const [dec, setdec] = useState(0);
  const [sub, setSubject] = useState("All Subjects");
  // const [branch, setBranch] = useState("");

  const location = useLocation();
  // console.log(props, "props");
  // console.log(location, "useLocation Hook");
  const userData = location.state?.userData;
  // console.log(userData,"userData get successfully")


  // useEffect(() => {
  //   //Runs on every render
  //   setBranch(userData.Branch);

  // },[]);

  const subject1 = (subj) => {
    setinc(userData.subject1_present);
    setdec(userData.subject1_absent);
    setSubject(subj);
    // console.log("Subject1 is",sub)
  };
  const subject2 = (subj) => {
    setinc(userData.subject2_present);
    setdec(userData.subject2_absent);
    setSubject(subj);
    // console.log("Subject2 is",sub)

  };
  const subject3 = (subj) => {
    setinc(userData.subject3_present);
    setdec(userData.subject3_absent);
    setSubject(subj);
  };
  const subject4 = (subj) => {
    setinc(userData.subject4_present);
    setdec(userData.subject4_absent);
    setSubject(subj);
  };
  const subject5 = (subj) => {
    setinc(userData.subject5_present);
    setdec(userData.subject5_absent);
    setSubject(subj);
  };
  const subject6 = (subj) => {
    setinc(userData.subject6_present);
    setdec(userData.subject6_absent);
    setSubject(subj);
  };

  useEffect(() => {
    const count = totalCount;
    const percentage = Math.trunc((inc * 100) / count);
    setFinal(percentage);
    console.log(percentage, "time final is printed, for tatalCount");
  }, [inc, totalCount]);


  // // useEffect(() => {
  // //   const count = totalCount;
  // //   const percentage = Math.trunc((inc * 100) / count);
  // //   setFinal(percentage);
  // //   console.log(percentage, "time final is printed, for tatalCount");
  // // }, [inc, totalCount]);

   

    const handleInc = () => {
      setinc(inc + 1);
      console.log(inc, "time inc is printed for handleInc");
      // handleChange();
    };

    const handleDec = () => {
      setdec(dec + 1);
      console.log(dec, "time dec is printed for handleDec");
      // handleChange();
    };

    const handleTotal = () => {
      // setTotalCount(totalCount + 1);
      setTotalCount(totalCount + 1);
      console.log(totalCount, "time totalCount is printed");
    };

  // const [attData, setattData] = useState({
  //   subject:  sub ,
  //   inc:  inc ,
  //   dec:  dec ,
  //   // Branch:`${userData.Branch}`
  //   // subject1_prsnt: `${userData.subject1_present}`,
  //   // subject1_absnt: `${userData.subject1_absent}`,
  //   // subject2_prsnt: `${userData.subject2_present}`,
  //   // subject2_absnt: `${userData.subject2_absent}`,
  //   // subject3_prsnt: `${userData.subject3_present}`,
  //   // subject3_absnt: `${userData.subject3_absent}`,
  //   // subject4_prsnt: `${userData.subject4_present}`,
  //   // subject4_absnt: `${userData.subject4_absent}`,
  //   // subject5_prsnt: `${userData.subject5_present}`,
  //   // subject5_absnt: `${userData.subject5_absent}`,
  //   // subject6_prsnt: `${userData.subject6_present}`,
  //   // subject6_absnt: `${userData.subject6_absent}`,
  // });

  // const { enroll, Branch, Semester } = attData;
  // const handleChange = (e) => {
  //   setattData({
  //     inc: { inc },
  //     dec: { dec },
  //     // Branch:`${userData.Branch}`
  //   });
  //   console.log(inc, "&", dec, "are values for inc & dec, for handleChange");
  //   console.log(attData, "from attData useState");
  // };


  const Subject = () => {
    if (userData.Branch === "CSE" && userData.Semester === "1st") {
      return (
        <>
          <button className="btnn" name="Programming in C" value="ES-101" onClick={() => subject1("Programming in C")}>
            Programming in C
          </button>
          <button className="btnn" name="Applied chemistry" value="BS-103" onClick={() => subject2("Applied chemistry")}>
            applied chemistry
          </button>
          <button className="btnn" name="v" value="CHEMISRTY" onClick={() => subject3("v")}>
            C
          </button>
          <button className="btnn" name="D" value="DSA" onClick={() => subject4("D")}>
            D
          </button>
          <button className="btnn" name="E" value="OOPS" onClick={() => subject5("E")}>
            E
          </button>
          <button className="btnn" name="F" value="CM" onClick={() => subject6("F")}>
            F
          </button>
        </>
      );
    } else if (userData.Branch === "CSE" && userData.Semester === "2nd") {
      return (
        <>
          <button className="btnn" name="G" value="PHYSICS" onClick={() => subject1("G")}>
            G
          </button>
          <button className="btnn" name="H" value="MATHS" onClick={() => subject2("H")}>
            H
          </button>
          <button className="btnn" name="I" value="CHEMISRTY" onClick={() => subject3("I")}>
            I
          </button>
          <button className="btnn" name="J" value="DSA" onClick={() => subject4("J")}>
            J
          </button>
          <button className="btnn" name="K" value="OOPS" onClick={() => subject5("K")}>
            K
          </button>
          <button className="btnn" name="L" value="CM" onClick={() => subject6("L")}>
            L
          </button>
        </>
      );
    } else if (userData.Branch === "CSE" && userData.Semester === "3rd") {
      return (
        <>
          <button className="btnn" name="O" value="PHYSICS" onClick={() => subject1("O")}>
            O
          </button>
          <button className="btnn" name="P" value="MATHS" onClick={() => subject2("P")}>
            P
          </button>
          <button className="btnn" name="Q" value="CHEMISRTY" onClick={() => subject3("Q")}>
            Q
          </button>
          <button className="btnn" name="R" value="DSA" onClick={() => subject4("R")}>
            R
          </button>

          <button className="btnn" name="S" value="CM" onClick={() => subject5("S")}>
            I
          </button>
          <button className="btnn" name="T" value="DM" onClick={() => subject6("T")}>
            U
          </button>

        </>
      );
    }
  };

  // const postData = async () => {
  //   // event.preventDefault();
  //   try {
  //     const response = await axios.post("url", attData);
  //     // console.log(response.data);
  //     // handle response data
  //   } catch (error) {
  //     console.log(error);
  //     // handle error
  //   }
  // };

  const handleChange = async () => {
    // try {
    //   const response = await axios.post('https://example.com/api', {
    //     subject: sub,
    //     inc: inc,
    //     dec: dec,
    //     branch: userData.Branch
    //   });
    //   // console.log(response.data);
    // } catch (error) {
    //   // console.error(error);
    // }
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
            {/* <button className="btnn">Computational Methods</button>
            <button className="btnn">Data Structure</button>
            <button className="btnn">Discrite Mathematics</button>
            <button className="btnn">Digital Logic and Circuit Design</button>
            <button className="btnn">Indian Knowledge System</button>
            <button className="btnn">Object Oriented Programming</button> */}
          </ul>
        </div>
        <div className="main">
          <h2 style={{ textAlign: "center" }}>Attendence in {sub}</h2>
          <h2 style={{ textAlign: "center" }}>{userData.Branch}</h2>
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
                    strokeColor="purple"
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
