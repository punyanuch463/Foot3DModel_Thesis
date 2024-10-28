"use client";

import React, { useState, useEffect } from 'react';
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faCheck } from "@fortawesome/free-solid-svg-icons";

const CompletePage = () => {
  const [verificationCode, setVerificationCode] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [message, setMessage] = useState({ text: "", type: "" }); // Structured message format
  const [isLoading, setIsLoading] = useState(false);
  const [UserId, setUserId] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const fetchSession = async () => {
      try {
        const response = await fetch('/api/getSession');
        const data = await response.json();

        if (response.ok) {
          setUserId(data.userId);
        } else {
          setErrorMessage('ไม่พบข้อมูลผู้ใช้งาน กรุณาล็อกอินใหม่');
        }
      } catch (error) {
        console.error('Error fetching session:', error);
        setErrorMessage('ไม่สามารถดึงข้อมูลเซสชันได้');
      }
    };

    fetchSession();
  }, []);

  useEffect(() => {
    if (router.query.UserId) {
      setUserId(router.query.UserId);
    }
  }, [router.query.UserId]);

  const handleNext = async () => {
    if (!UserId) {
      setMessage({ text: 'ไม่พบ UserId.', type: 'error' });
      return;
    }

    const userIdNumber = parseInt(UserId, 10);

    setIsLoading(true);
    setMessage({ text: '' });

    try {
      const response = await fetch('/api/verifyCode', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ UserId: userIdNumber, code: verificationCode }),
      });

      const data = await response.json();

      if (response.ok) {
        const sessionRes = await fetch('/api/getSession');
        const sessionData = await sessionRes.json();
        
        if (sessionRes.ok) {
          console.log('Session Data:', sessionData);
          
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
          setMessage({ text: 'ไม่พบข้อมูลเซสชัน กรุณาล็อกอินใหม่', type: 'error' });
        }
      } else {
        setMessage({ text: `เกิดข้อผิดพลาด: ${data.error || data.message}`, type: 'error' });
      }
    } catch (error) {
      console.error('Error:', error);
      setMessage({ text: 'เกิดข้อผิดพลาดในการส่งข้อมูล', type: 'error' });
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

      {message.text && (
        <p className={`alert ${message.type}`}>
          {message.text}
        </p>
      )}
      {errorMessage && <p className="alert error">{errorMessage}</p>}

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
        disabled={isLoading}
      >
        {isLoading ? "กำลังดำเนินการ..." : "ต่อไป"}
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
