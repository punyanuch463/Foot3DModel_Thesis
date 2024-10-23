"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [userId, setUserId] = useState(null); // State to hold userId from session
  const [userEmail, setUserEmail] = useState(null); // State to hold userEmail
  const router = useRouter();
  const [formData, setFormData] = useState({
    usernameOrEmail: '',
    UserPassWord: '',
  });

  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false); // สถานะ loading


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
          setMessage('เกิดข้อผิดพลาด: กรุณากรอก Email');
          return;
        }
    
        if (!formData.UserPassWord) {
          setMessage('เกิดข้อผิดพลาด: กรุณากรอกรหัสผ่าน');
          return;
        }
  
    setIsLoading(true);
  
    try {
      // ส่งข้อมูลล็อกอินไปที่ API
      const loginRes = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      const loginData = await loginRes.json();
  
      if (loginRes.ok) {
        // สร้าง session cookie
        console.log(loginData.UserId)
        const sessionRes = await fetch('/api/session', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ userId: loginData.UserId }), // ส่ง userId ไปสร้าง session
        });
  
        const sessionData = await sessionRes.json();
  
        if (sessionRes.ok) {
          // นำทางไปหน้า HomePage หรือหน้าอื่นๆ หลังล็อกอินสำเร็จ
          router.push('/HomePage');
        } else {
          setMessage(`เกิดข้อผิดพลาด: ${sessionData.message}`);
        }
      } else {
        setMessage(`เกิดข้อผิดพลาด: ${loginData.message}`);
      }
    } catch (error) {
      console.error('Error:', error);
      setMessage('เกิดข้อผิดพลาดในการส่งข้อมูล');
    } finally {
      setIsLoading(false);
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
      {message && <p className="alert">{message}</p>}

      <div className="subtitle">
        <span>ยังไม่มีบัญชี? </span>
        <a href="/">สร้างบัญชี</a>
      </div>
      <div className="input-group">
        <label htmlFor="usernameOrEmail">ชื่อผู้ใช้หรืออีเมล</label>
        <input
          type="text"
          id="usernameOrEmail"
          name="usernameOrEmail"
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
        disabled={isLoading} // ปิดการใช้งานปุ่มเมื่อกำลังโหลด
      >

        {isLoading ? "กำลังดำเนินการ..." : "เข้าสู่ระบบ"} {/* แสดงข้อความตามสถานะการโหลด */}
      </button>

      {isLoading && (
        <div className="loading-overlay">
          <div className="spinner"></div>
        </div>
      )}
    </div>
  );
};

export default Login;
