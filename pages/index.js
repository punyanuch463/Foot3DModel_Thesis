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
  // const [isLoading, setIsLoading] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [formData, setFormData] = useState({
    UserName: '',
    UserPassWord: '',
    UserEmail: '',
    PhoneNumber: '',
  });
  const [message, setMessage] = useState(null);
  const router = useRouter();

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

  const handleCreateAccount = async (e) => {
    e.preventDefault();

    // setIsLoading(true);
    setMessage(null);

    try {
      const res = await fetch('/api/addUser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        await fetch('/api/session', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ userId: data.UserId }),
        });

        setTimeout(() => {
          router.push('/SettingAcc');
        }, 500);
      } else {
        setMessage({ text: `ข้อผิดพลาดในการสร้างบัญชี: ${data.message}`, type: "error" });
      }
    } catch (error) {
      console.error('Error:', error);
      setMessage({ text: 'ข้อผิดพลาดในการส่งข้อมูล', type: "error" });
    } finally {
      // setIsLoading(false);

    }
  };

  const handleMsg = () => {
    if (!formData.UserName) {
      setMessage({ text: 'ข้อผิดพลาด: กรุณากรอกข้อมูลชื่อ', type: "error" });
      return;
    }
    if (!formData.UserEmail) {
      setMessage({ text: 'ข้อผิดพลาด: กรุณากรอกข้อมูลอีเมล', type: "error" });
      return;
    }
    if (!formData.UserPassWord) {
      setMessage({ text: 'ข้อผิดพลาด: กรุณากรอกข้อมูลรหัสผ่าน', type: "error" });
      return;
    }
    if (!formData.PhoneNumber) {
      setMessage({ text: 'ข้อผิดพลาด: กรุณากรอกข้อมูลเบอร์โทรศัพท์', type: "error" });
      return;
    }
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
      {message && (
        <p className={`alert ${message.type}`}>{message.text}</p>
      )}
      <form onSubmit={handleCreateAccount}>
        <div className="input-group">
          <label htmlFor="UserName">ชื่อผู้ใช้</label>
          <input 
            type="text" 
            id="UserName" 
            name="UserName" 
            value={formData.UserName} 
            onChange={handleChange} 
            // placeholder="กรุณากรอกชื่อผู้ใช้งาน"
            required 
          />
        </div>

        <div className="input-group">
          <label htmlFor="UserEmail">อีเมล</label>
          <input
            type="email"
            id="UserEmail" 
            name="UserEmail" 
            value={formData.UserEmail} 
            onChange={handleChange} 
            autoComplete="current-password"
            // placeholder="กรุณากรอกอีเมล"
            required 
          />
        </div>

        <div className="input-group">
          <label htmlFor="UserPassWord">รหัสผ่าน</label>
          <div className="input-wrapper">
            <input 
              type={passwordVisible ? "text" : "password"} 
              id="UserPassWord" 
              name="UserPassWord" 
              value={formData.UserPassWord} 
              onChange={handleChange} 
             autoComplete="current-password"
              required 
              // placeholder="กรุณากรอกรหัสผ่าน"
            />
            <FontAwesomeIcon
              icon={passwordVisible ? faEyeSlash : faEye}
              className="password-icon"
              onClick={togglePasswordVisibility}
            />
          </div>
        </div>

        <div className="input-group">
          <label htmlFor="PhoneNumber">เบอร์โทรศัพท์</label>
          <input 
            type="PhoneNumber" 
            id="PhoneNumber" 
            name="PhoneNumber" 
            value={formData.PhoneNumber} 
            onChange={handleChange} 
            // placeholder="กรุณากรอกเบอร์โทร"
            required 
          />
        </div>

        <button 
          onClick={handleMsg} 
          type="submit" 
          className="primary-btn" 
          // disabled={isLoading}
        >
            ต่อไป
        </button>

      </form>
    </div>
    
  );
};

export default CreateAccount;
