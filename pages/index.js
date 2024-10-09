"use client";

import React, { useState } from "react";
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faEye,
  faEyeSlash,
} from "@fortawesome/free-solid-svg-icons";

const CreateAccount = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const router = useRouter(); // ใช้ useRouter สำหรับการนำทาง

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleNext = () => {
    router.push('/SettingAccount'); // นำทางไปยังหน้า settingAcc.tsx
  };

  return (
    <div className="container">
      <FontAwesomeIcon
        icon={faArrowLeft}
        className="back-icon"
        onClick={() => window.history.back()}
      />
      <div className="status-bar">
        <div className="circle active">1</div>
        <div className="circle">2</div>
        <div className="circle">3</div>
      </div>
      <h1>สร้างบัญชีของคุณ</h1>
      <div className="subtitle">
        <span>คุณมีบัญชีอยู่แล้ว? </span>
        <a href="/LoginPage">เข้าสู่ระบบ</a>
      </div>
      <div className="input-group">
        <label htmlFor="username">ชื่อผู้ใช้</label>
        <input type="text" id="username" />
      </div>

      <div className="input-group">
        <label htmlFor="email">อีเมล</label>
        <input type="email" id="email" />
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

      <div className="input-group">
        <label htmlFor="phoneNumber">เบอร์โทรศัพท์</label>
        <input type="phoneNumber" id="phoneNumber" />
      </div>

      <button type="button" className="primary-btn" onClick={handleNext}>
        ต่อไป
      </button>
    </div>
  );
};

export default CreateAccount;
