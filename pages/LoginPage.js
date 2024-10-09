"use client";

import React, { useState ,useEffect } from "react";
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
  const { userId } = router.query; // รับ UserId จาก query params
  const [formData, setFormData] = useState({
    usernameOrEmail: '',
    UserPassWord: '',
  });


  const [message, setMessage] = useState('');

  useEffect(() => {
  }, [userId, router]);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleNext = async () => {
    
    if (!formData.usernameOrEmail) {
      setMessage('เกิดข้อผิดพลาด: กรุณากรอก Email ');
      return;
    }

    if (!formData.UserPassWord){
      setMessage('เกิดข้อผิดพลาด: กรุณากรอกรหัสผ่าน');
      return;
    }
    try {
      const res = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
        ...formData, // ส่งข้อมูลล็อกอิน
        }),
      });

      const data = await res.json();

      if (res.ok) {
        const userId = data.UserId; // ตรวจสอบให้แน่ใจว่า API ส่งกลับ UserId

        alert('เข้าสู่ระบบสำเร็จ! กำลังนำทางไปยังหน้า Homepage...');
        // setMessage('เข้าสู่ระบบสำเร็จ! กำลังนำทางไปยังหน้า Homepage...');
        // นำทางไปยังหน้า Homepage หลังจากเข้าสู่ระบบสำเร็จ
        setTimeout(() => {
          router.push(`/HomePage?UserId=${userId}`);
        }, 2000);
      } else {
        setMessage(`เกิดข้อผิดพลาด: ${data.message}`);
      }
    } catch (error) {
      console.error('Error:', error);
      setMessage('เกิดข้อผิดพลาดในการเข้าสู่ระบบ');
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
        <input type="text" 
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

      <button type="button" className="primary-btn" onClick={handleNext}>
        เข้าสู่ระบบ
      </button>
    
    </div>
  );
};

export default Login;
