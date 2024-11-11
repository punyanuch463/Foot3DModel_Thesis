
"use client";

import React, { useState } from "react";
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const router = useRouter();
  const [formData, setFormData] = useState({
    usernameOrEmail: '',
    UserPassWord: '',
  });
  
  const [message, setMessage] = useState({ text: "", type: "" }); // Message structure with text and type
  // const [isLoading, setIsLoading] = useState(false); // Loading state

  // Function to toggle password visibility
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleNext = async () => {
    if (!formData.usernameOrEmail) {
      setMessage({ text: 'ข้อผิดพลาด: กรุณากรอกอีเมล', type: 'error' });
      return;
    }

    if (!formData.UserPassWord) {
      setMessage({ text: 'ข้อผิดพลาด: กรุณากรอกรหัสผ่าน', type: 'error' });
      return;
    }

    // setIsLoading(true);
  
    try {
      const loginRes = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const loginData = await loginRes.json();
  
      if (loginRes.ok) {
        const sessionRes = await fetch('/api/session', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ userId: loginData.UserId }),
        });
  
        const sessionData = await sessionRes.json();
  
        if (sessionRes.ok) {
          setMessage({ text: "เข้าสู่ระบบสำเร็จ", type: "success" });
          setTimeout(() => {
            router.push('/HomePageUser');
          }, 500);
        } else {
          setMessage({ text: `ข้อผิดพลาด: ${sessionData.message}`, type: 'error' });
        }
      } else {
        setMessage({ text: `ข้อผิดพลาด: ${loginData.message}`, type: 'error' });
      }
    } catch (error) {
      console.error('Error:', error);
      setMessage({ text: 'ข้อผิดพลาดในการส่งข้อมูล', type: 'error' });
    } finally {
      // setIsLoading(false);
    }
  };
  
  return (
    <div className="container">
      <FontAwesomeIcon
        icon={faArrowLeft}
        className="back-icon"
        onClick={() => window.history.back()}
      />
      <h1>เข้าสู่ระบบ</h1>
      {message.text && (
        <p className={`alert ${message.type}`}>
          {message.text}
        </p>
      )}

      <div className="subtitle">
        <span>ยังไม่มีบัญชี? </span>
        <a href="/">สร้างบัญชี</a>
      </div>
      <form >
      <div className="input-group">
        <label htmlFor="usernameOrEmail">ชื่อผู้ใช้หรืออีเมล</label>
        <input
          type="text"
          id="usernameOrEmail"
          name="usernameOrEmail"
            autoComplete="current-password"
          value={formData.usernameOrEmail}
          onChange={handleChange}
        />
      </div>

      <div className="input-group">
        <label htmlFor="password">รหัสผ่าน</label>
        <div className="input-wrapper">
          <input
            type={passwordVisible ? "text" : "password"}
            id="password"
            name="UserPassWord"
             autoComplete="current-password"
            value={formData.UserPassWord}
            onChange={handleChange}
          />
          <FontAwesomeIcon
            icon={passwordVisible ? faEyeSlash : faEye}
            className="password-icon"
            onClick={togglePasswordVisibility}
          />
        </div>
      </div>

      <button
        type="button"
        className="primary-btn"
        onClick={handleNext}
        // disabled={isLoading} 
      >
        เข้าสู่ระบบ
        {/* {isLoading ? "กำลังดำเนินการ..." : "เข้าสู่ระบบ"} */}
      </button>
      </form>

      {/* {isLoading && (
        <div className="loading-overlay">
          <div className="spinner"></div>
        </div>
      )} */}
    </div>
    
  );
};

export default Login;
