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
  const [UserId, setUserId] = useState(null); // State to hold UserId
  const router = useRouter();


  useEffect(() => {
    const fetchSession = async () => {
      try {
        const response = await fetch('/api/getSession');
        const data = await response.json();

        if (response.ok) {
          setUserId(data.userId); // Set UserId from session
        } else {
          setErrorMessage('ไม่พบข้อมูลผู้ใช้งาน กรุณาล็อกอินใหม่');
        }
      } catch (error) {
        console.error('Error fetching session:', error);
        setErrorMessage('ไม่สามารถดึงข้อมูลเซสชันได้');
      }
    };

    fetchSession();
  }, []); // Run once on mount
  useEffect(() => {
    // Check if UserId is available in router query
    if (router.query.UserId) {
      setUserId(router.query.UserId);
    }
  }, [router.query.UserId]);


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
        // Fetch session after updating user data
        const sessionRes = await fetch('/api/getSession');
        const sessionData = await sessionRes.json();
        
        if (sessionRes.ok) {
          console.log('Session Data:', sessionData);
          
          // If you need to do something with session data, do it here
          await fetch('/api/session', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ userId: sessionData.userId }),
          });
  
          setTimeout(() => {
            router.push(`/LoginPage`);
          }, 500);
        } else {
          setMessage('ไม่พบข้อมูลเซสชัน กรุณาล็อกอินใหม่');
        }
      } else {
        setMessage(`เกิดข้อผิดพลาด:  ${data.error || data.message}`);
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
