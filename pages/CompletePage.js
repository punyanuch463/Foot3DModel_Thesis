"use client";

import React, { useState, useEffect } from 'react';
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faCheck } from "@fortawesome/free-solid-svg-icons";

const CompletePage = () => {
  const [verificationCode, setVerificationCode] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false); // สถานะการโหลด
  const router = useRouter();
  const { UserId } = router.query;

  useEffect(() => {
    if (!UserId) {
      setErrorMessage('ไม่พบ UserId.');
    }
  }, [UserId]);

  const handleNext = async () => {
    if (!UserId) {
      setErrorMessage('ไม่พบ UserId.');
      return;
    }

    

    const userIdNumber = parseInt(UserId, 10);
   

    setIsLoading(true); // เริ่มการโหลด
    setMessage(''); // ล้างข้อความข้อผิดพลาดก่อนหน้า

    try {
      const response = await fetch('/api/verifyCode', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ UserId: userIdNumber, code: verificationCode }),
      });

      const data = await response.json();

      if (response.ok) {
        // alert('ยืนยันสำเร็จ! กำลังนำทางไปยังหน้า Login...');
        setTimeout(() => {
          router.push("/LoginPage");
        }, 500);
      } else {
        setMessage(`เกิดข้อผิดพลาด: ${data.error || data.message}`);
      }
    } catch (error) {
      console.error('Error:', error);
      setMessage('เกิดข้อผิดพลาดในการส่งข้อมูล');
    } finally {
      setTimeout(() => {
        setIsLoading(false); // ยกเลิกสถานะ loading หลังจากส่งข้อมูลเสร็จ
      }, 2000); // Show spinner for 2 second minimum
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
      {errorMessage && <p className='alert'>{errorMessage}</p>}

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
            placeholder="กรอกรหัสยืนยัน"
            required
          />
        </div>
      </div>

      <button
        type="button"
        className="primary-btn"
        onClick={handleNext}
        disabled={isLoading} // ปิดการใช้งานปุ่มเมื่อกำลังโหลด
      >
        {isLoading ? "กำลังดำเนินการ..." : "ต่อไป"} {/* แสดงข้อความตามสถานะการโหลด */}
      </button>

      {isLoading && (
        <div className="loading-overlay">
          <div className="spinner"></div>
        </div>
      )}
    </div>
  );
};

export default CompletePage;
