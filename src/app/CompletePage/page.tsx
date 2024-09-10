"use client";

import React, { useState } from 'react';
import { useRouter } from "next/navigation";
import "../globals.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faCheck, faEyeSlash, faEye } from "@fortawesome/free-solid-svg-icons";

const CompletePage = () => {
  // const [isChecked, setIsChecked] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const router = useRouter(); // Initialize router here

  const handleNext = () => {
    router.push("/LoginPage");
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="container">
      <FontAwesomeIcon
        icon={faArrowLeft}
        className="back-icon"
        onClick={() => window.history.back()}
      />
      <div className="status-bar">
        <div className="circle complete">
          <FontAwesomeIcon icon={faCheck} />
        </div>
        <div className="circle complete">
          <FontAwesomeIcon icon={faCheck} />
        </div>
        <div className="circle">3</div>
      </div>
      <h1>ยืนยัน</h1>

      <div className="center-circle-container">
        <div className="center-circle">
          <FontAwesomeIcon icon={faCheck} />
        </div>
      </div>

      <div className="center-circle-text">
          ระบบได้ทำการส่งรหัสยืนยันไปที่อีเมลท่านแล้ว
        </div>

      <div className="input-group">
        <label htmlFor="password">รหัสผ่าน</label>
        <div className="input-wrapper">
          <input type={passwordVisible ? "text" : "password"} id="password" />
          <FontAwesomeIcon
            icon={passwordVisible ? faEyeSlash : faEye}
            className="password-icon"
            onClick={togglePasswordVisibility}
          />
        </div>
      </div>

      <button type="button" className="primary-btn" onClick={handleNext}>
        ต่อไป
      </button>
    </div>
  );
};

export default CompletePage;
