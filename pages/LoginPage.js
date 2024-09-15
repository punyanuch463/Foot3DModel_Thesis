"use client";

import React, { useState } from "react";
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faEye,
  faEyeSlash,
} from "@fortawesome/free-solid-svg-icons";

const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const router = useRouter();

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  
  const handleNext = () => {
    router.push("/HomePage"); 
  };

  return (
    <div className="container">
      <FontAwesomeIcon
        icon={faArrowLeft}
        className="back-icon"
        onClick={() => window.history.back()}
      />
      <h1>เข้าสู่ระบบ</h1>
      <div className="subtitle">
        <span>ยังไม่มีบัญชี? </span>
        <a href="/">สร้างบัญชี</a>
      </div>
      <div className="input-group">
        <label htmlFor="usernameOrEmail">ชื่อผู้ใช้หรืออีเมล</label>
        <input type="text" id="usernameOrEmail" />
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

      <button type="button" className="primary-btn"  onClick={handleNext} >
        เข้าสู่ระบบ
      </button>
    </div>
  );
};

export default Login;
