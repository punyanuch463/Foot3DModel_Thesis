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
  const [formData, setFormData] = useState({
    UserName: '',
    UserPassWord: '',
    UserEmail: '',
    PhoneNumber: '',
  });
  const [message, setMessage] = useState('');
  const router = useRouter(); // ใช้ useRouter สำหรับการนำทาง

  const [userEmail, setUserEmail] = useState('');
  const handleSendEmail = async () => {
    // if (!userEmail) {
    //     setMessage('กรุณากรอกอีเมลก่อนส่ง'); // "Please enter an email before sending"
    //     return;
    // }

    const response = await fetch('/api/sendVerificationEmail', {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: userEmail }), 
    });

    const data = await response.json();
    if (response.ok) {
        console.log(data.message);
        setMessage('ส่งอีเมลยืนยันสำเร็จ!'); // "Verification email sent successfully!"
    } else {
        // Validate form completeness
    if(!formData.UserName) {
      setMessage('เกิดข้อผิดพลาด: กรุณากรอกข้อมูลชื่อ');
      return;
    }    
    if(!formData.UserEmail) {
      setMessage('เกิดข้อผิดพลาด: กรุณากรอกข้อมูลอีเมล');
      return;
    }
    if(!formData.UserPassWord) {
      setMessage('เกิดข้อผิดพลาด: กรุณากรอกข้อมูลรหัสผ่าน');
      return;
    }

    if(!formData.PhoneNumber) {
      setMessage('เกิดข้อผิดพลาด: กรุณากรอกข้อมูลเบอร์โทรศัพท์');
      return;
    }
        // console.error(data.error);
        // setMessage(`เกิดข้อผิดพลาด: ${data.error}`); // "Error occurred: ..."
    }
};


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
  const handleSubmit = async (e) => {
    e.preventDefault();

  
    if (!formData.UserName || !formData.UserPassWord || !formData.UserEmail) {
      setMessage('กรุณากรอกข้อมูลที่จำเป็นทั้งหมด');
      return;
    }

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
        alert('สร้างบัญชีสำเร็จ! กำลังนำทางไปยังการตั้งค่าบัญชี...');
        // setMessage('สร้างบัญชีสำเร็จ! กำลังนำทางไปยังการตั้งค่าบัญชี...');
        // Navigate to SettingAccount with UserId
        setTimeout(() => {
          router.push(`/SettingAccount?userId=${data.UserId}`);
        }, 2000);
      } else {
        
        setMessage(`เกิดข้อผิดพลาด: ${data.message}`);
      }
    } catch (error) {
      console.error('Error:', error);
      setMessage('เกิดข้อผิดพลาดในการส่งข้อมูล');
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
      {message && <p className="alert">{message}</p>}
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="UserName">ชื่อผู้ใช้</label>
          <input 
            type="text" 
            id="UserName" 
            name="UserName" 
            value={formData.UserName} 
            onChange={handleChange} 
              placeholder="กรุณากรอกชื่อผู้ใช้งาน"
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
            onChange={(e) => {
              handleChange(e);
              setUserEmail(e.target.value); // Set userEmail state on input change
          }} 
                placeholder="กรุณากรอกอีเมล"
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
              required 
                placeholder="กรุณากรอกรหัสผ่าน"
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
              placeholder="กรุณากรอกเบอร์โทร"
            required 
          />
        </div>
        <button type="submit" className="primary-btn"  onClick={handleSendEmail}>
          ต่อไป
        </button>
      </form>
    </div>
  );
};

export default CreateAccount;

      