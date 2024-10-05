"use client";

import React, { useState, useEffect } from 'react';
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faCheck } from "@fortawesome/free-solid-svg-icons";

const CompletePage = () => {
  const [verificationCode, setVerificationCode] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const router = useRouter();
  const { UserId } = router.query;

  useEffect(() => {
    if (!UserId) {
      setErrorMessage('UserId is missing.');
    }
  }, [UserId]);

  const [message, setMessage] = useState('');

  const handleNext = async () => {
    if (!UserId) {
      setErrorMessage('Invalid UserId.');
      return;
    }

    const userIdNumber = parseInt(UserId, 10);
    if (isNaN(userIdNumber)) {
      setErrorMessage('Invalid UserId.');
      return;
    }

    console.log('Sending verification request with:', { UserId: userIdNumber, code: verificationCode });
   
    try {
      const response = await fetch('/api/verifyCode', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ UserId: userIdNumber, code: verificationCode }),
      });

      const data = await response.json();

      if (response.ok) {
        alert('ยืนยันสำเร็จ! กำลังนำทางไปยังหน้า Login...');
        // setMessage('ยืนยันสำเร็จ! กำลังนำทางไปยังหน้า Login...');
        router.push("/LoginPage");
      } else {
        // เปลี่ยนจาก data.message เป็น data.error
        setMessage(`เกิดข้อผิดพลาด: ${data.error}`);
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
        <div className="circle complete">
          <FontAwesomeIcon icon={faCheck} />
        </div>
        <div className="circle complete">
          <FontAwesomeIcon icon={faCheck} />
        </div>
        <div className="circle">3</div>
      </div>
      <h1>ยืนยัน</h1>
      
      {message && <p className='alert'>{message}</p>}

      <div className="center-circle-container">
        <div className="center-circle">
          <FontAwesomeIcon icon={faCheck} />
        </div>
      </div>

      <div className="center-circle-text">
        ระบบได้ทำการส่งรหัสยืนยันไปที่อีเมลท่านแล้ว
      </div>

      <div className="input-group">
        <label htmlFor="verificationCode">กรอกรหัสยืนยัน</label>
        <div className="input-wrapper">
          <input
            type="text"
            id="verificationCode"
            value={verificationCode}
            onChange={(e) => setVerificationCode(e.target.value)}
            placeholder="Enter verification code"
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
