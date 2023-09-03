import React, { useState, useEffect } from "react";
import { Circle } from "rc-progress";
import { useLocation } from "react-router-dom";
import attenImg from "../img/cal5.png";
import Navbar from "./Navbar";
import frontAtte from "../img/celNew.png";
import axios from "axios";
import { useFormik } from 'formik';
import * as yup from 'yup';

const validationSchema = yup.object().shape({
  Subject1name: yup.string().required('At least one subject is required'),
  Subject2name: yup.string(),
  Subject3name: yup.string(),
  Subject4name: yup.string(),
  Subject5name: yup.string(),
  Subject6name: yup.string(),
});

const FormComponent = ({ onSubmit, initialValues }) => {
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      onSubmit(values);
      alert("Successfully submitted");
      formik.resetForm();
    },
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    formik.setFieldValue(name, value);
  };

  return (
    <div className="formAdd">
      <form onSubmit={formik.handleSubmit}>
        <input
          type="text"
          placeholder="Subject1 Name"
          name="Subject1name"
          value={formik.values.Subject1name}
          onChange={handleInputChange}
          onBlur={formik.handleBlur}
          disabled // Disable the input field
        />
        <div className='errorFormAdd'>{formik.touched.Subject1name && formik.errors.Subject1name}</div>

        <input
          type="text"
          placeholder="Subject2 Name"
          name="Subject2name"
          value={formik.values.Subject2name}
          onChange={handleInputChange}
          onBlur={formik.handleBlur}
          disabled // Disable the input field
        />
        <div className='errorFormAdd'>{formik.touched.Subject2name && formik.errors.Subject2name}</div>

        {/* Repeat the same structure for Subject3 to Subject6 */}
        {/* ... (similar input fields) */}

        <div className="ShopButton">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default function AttendancePage() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const Attentoken = JSON.parse(localStorage.getItem("Token"))

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000); // Update every 1000 milliseconds (1 second)
    return () => {
      clearInterval(interval);
    };
  }, []);

  const currentDate = new Date();

  const [userData, setUserData] = useState({
    branch: "CSE",
    semester: "1st",
    enrollment: "178",
    subject1: "Subject 1",
    subject1_present: 11,
    subject1_absent: 1,
    subject2: "Subject 2",
    subject2_present: 15,
    subject2_absent: 5,
    subject3: "Subject 3",
    subject3_present: 17,
    subject3_absent: 4,
    subject4: "Subject 4",
    subject4_present: 12,
    subject4_absent: 5,
    subject5: "Subject 5",
    subject5_present: 19,
    subject5_absent: 8,
    subject6: "Subject 6",
    subject6_present: 1,
    subject6_absent: 5
  });

  const getCallAPI = async () => {
    try {
      const response = await axios.get(
        'https://collegeeazy-backend-production.up.railway.app/collegeazy/attendance/private/',
        {
          headers: {
            Authorization: `Bearer ${Attentoken.jwt}`
          }
        }
      );
      setUserData(response.data); // Update the userData state with the response data
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getCallAPI();
  }, []);

  // for put api
  const [subID, setSubID] = useState(" ");
  const [inc, setInc] = useState(0);
  const [dec, setdec] = useState(0);

  const updateAttendance = async (userData) => {
    // ... (existing code)
  };

  const updateSubject = async (addData) => {
    // ... (existing code)
  };

  const [sub, setSubject] = useState("All Subjects");
  const [val, setVal] = useState(0);

  const handleIncrement = () => {
    // ... (existing code)
  };

  const handleDecrement = () => {
    // ... (existing code)
  };

  const handleTotal = () => {
    // ... (existing code)
  };

  const subjects = [
    { name: userData.subject1, present: userData.subject1_present, absent: userData.subject1_absent, value: "subject1" },
    { name: userData.subject2, present: userData.subject2_present, absent: userData.subject2_absent, value: "subject2" },
    { name: userData.subject3, present: userData.subject3_present, absent: userData.subject3_absent, value: "subject3" },
    { name: userData.subject4, present: userData.subject4_present, absent: userData.subject4_absent, value: "subject4" },
    { name: userData.subject5, present: userData.subject5_present, absent: userData.subject5_absent, value: "subject5" },
    { name: userData.subject6, present: userData.subject6_present, absent: userData.subject6_absent, value: "subject6" },
  ];

  const [isSubjectSelected, setIsSubjectSelected] = useState(false);
  const [selectedSubject, setSelectedSubject] = useState(null);

  // Calculate total presents and absents for all subjects
  const totalPresents = subjects.reduce((total, subject) => total + userData[`${subject.value}_present`], 0);
  const totalAbsents = subjects.reduce((total, subject) => total + userData[`${subject.value}_absent`], 0);

  // Calculate the attendance percentage based on the selected subject or aggregate attendance
  const attendancePercentage =
    selectedSubject === null
      ? Math.trunc((totalPresents / (totalPresents + totalAbsents)) * 100)
      : inc + dec === 0
      ? 0
      : Math.trunc((userData[`${selectedSubject}_present`] / (userData[`${selectedSubject}_present`] + userData[`${selectedSubject}_absent`])) * 100);

  const SubjectButtons = () => {
    return (
      <div className="attenSubButton">
        {subjects.map((subject, index) => (
          <button
            className="btnn"
            key={index}
            onClick={() => {
              setInc(subject.present);
              setdec(subject.absent);
              setSubject(subject.name);
              setVal(subject.value);
              setSubID(subject.value);
             
              setIsSubjectSelected(true); // Set to true when a subject is clicked
              setSelectedSubject(subject.value);
            }}
          >
            {subject.name}
          </button>
        ))}
      </div>
    );
  };

  return (
    <>
      <Navbar />
      <div className="attendancePage" style={{ marginTop: "90px " }}>
        <div className="frontAtten">
          <div className="attendFrontImg">
            <img src={frontAtte} alt="" />
          </div>
          <div className="frontTextFont">
            <h1>ATTENDANCE</h1>
            <p>Track your attendance on a daily basis</p>
          </div>
        </div>

        <h3 style={{ textAlign: "center" }}>
          Attendance in <span style={{ color: "#69499d", textTransform: "uppercase" }}> {sub}</span>
        </h3>

        <div className="AttendanceMain">
          <div className="AttendanceSidebar">
            <h1> SUBJECTS</h1>
            <div className="attenSubButton">
              <ul> <SubjectButtons /></ul>
            </div>
          </div>
          <div className="attendacneBAR">
            <div className="AttendanceMeter">
              <div className="AttendanceCircle">
                <div className="progressCenter">{attendancePercentage}%</div>
                <Circle
                  percent={attendancePercentage}
                  strokeWidth="8"
                  strokeLinecap="round"
                  strokeColor={{
                    "0%": "white",
                    "100%": "#46aece",
                  }}
                  style={{ transition: "all 0.3s ease-in-out" }}
                  gapDegree={70}
                />
              </div>
            </div>
            <div className="attendacneCount ">
              <div className="AttendDec" style={{ width: '50%', padding: "0" }}>
                <div className="decCount" style={{ fontSize: "25px" }}>{dec}</div>
                <button className="decs btn1" onClick={() => { handleDecrement(); handleTotal(); }} style={{ fontSize: "20px" }}>
                  <b>Absent</b>
                </button>
              </div>
              <div className="AttendInc" style={{ width: '50%', padding: "0" }}>
                <div className="incCount" style={{ fontSize: "25px" }}>{inc}</div>
                <button className="incss btn2" onClick={() => { handleIncrement(); handleTotal(); }} style={{ fontSize: "20px" }} >
                  <b>Present</b>
                </button>
              </div>
            </div>
          </div>

          <div className="attendanceDateSec">
            <div className="containerShopAdd">
              <input type="checkbox" id="toggleCheckbox" className="toggle-checkbox" />
              <div className="ADDBTushop">
                <label htmlFor="toggleCheckbox" className="toggle-label">
                  Add Subjects
                </label>
              </div>
              <div className="Sidecard">
                <div className="cardAdditem">
                  <label htmlFor="toggleCheckbox" className="closebtnAddItem " style={{ cursor: "pointer" }}>
                    X
                  </label>
                  <div className="formAdd">
                    {/* Pass updateSubject function and initialValues */}
                    <FormComponent onSubmit={updateSubject} initialValues={initialValues} />
                  </div>
                </div>
              </div>
            </div>
            <div className="TimeSecImg">
              <img src={attenImg} alt="" />
            </div>
            <h1>Current Date</h1>
            <p>{currentDate.toDateString()}</p>
            <h1>Current Time</h1>
            <p>{currentTime.toLocaleTimeString()}</p>
          </div>
        </div>
      </div>
    </>
  );
}
