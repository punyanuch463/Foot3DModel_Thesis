"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import cookie from 'cookie';

const PDPAConsentPage = () => {
  const router = useRouter();
  const [isChecked, setIsChecked] = useState(false);
  const [UserId, setUserId] = useState(null);
  const [message, setMessage] = useState({ text: "", type: "" }); // Structured message format
  // const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const checkSession = async () => {
      try {
        const response = await fetch('/api/getSession');
        if (response.ok) {
          const data = await response.json();
          setUserId(data.userId);
        } else {
          throw new Error('ไม่พบ session');
        }
      } catch (error) {
        console.error('Error fetching session:', error);
        setMessage({ text: 'ไม่พบ session โปรดเข้าสู่ระบบใหม่', type: 'error' });
      }
    };
    checkSession();
  }, []);

  const handleCheckboxClick = () => {
    setIsChecked(!isChecked);
  };

  const handleNext = async () => {
    if (!isChecked) {
      setMessage({
        text: 'กรุณายอมรับข้อกำหนดและนโยบายความเป็นส่วนตัว',
        type: 'error'
      });
      return;
    }

    if (!UserId) {
      setMessage({ text: 'ไม่พบข้อมูลผู้ใช้ โปรดเข้าสู่ระบบใหม่', type: 'error' });
      return;
    }

    // setIsLoading(true);
    
    try {
      const sessionRes = await fetch('/api/getSession');
      const sessionData = await sessionRes.json();
      
      if (sessionRes.ok) {
        await fetch('/api/session', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ userId: sessionData.userId }),
        });

        setTimeout(() => {
          router.push(`/CompletePage`);
        }, 2000);
      } else {
        setMessage({ text: 'ไม่พบข้อมูลเซสชัน กรุณาล็อกอินใหม่', type: 'error' });
      }
    } catch (error) {
      console.error('Error:', error);
      setMessage({ text: 'เกิดข้อผิดพลาดในการสร้างเซสชัน', type: 'error' });
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
      <h1>นโยบายความเป็นส่วนตัว</h1>
      {message.text && (
        <p className={`alert ${message.type}`}>
          {message.text}
        </p>
      )}
      <p className="content-text">
        การใช้บริการนี้แสดงถึงความยินยอมและการยอมรับ
        <br />
        ข้อกำหนดและนโยบายความเป็นส่วนตัวของเรา
        <br />
        ที่มีเป้าหมายเพื่อปกป้องข้อมูลส่วนบุคคลของคุณ
        <br />
        และให้บริการที่ดียิ่งขึ้นให้กับคุณ การเก็บรวบรวม
        <br />
        และใช้ข้อมูลส่วนบุคคล
        จะเป็นไปตามวัตถุประสงค์ที่ชัดเจนและเกี่ยวข้องกับการให้บริการของเราเท่านั้น
      </p>
      <p className="content-text">
        คุณสามารถเข้าถึงรายละเอียดเพิ่มเติมเกี่ยวกับ
        <br />
        การคุ้มครองข้อมูลส่วนบุคคลของคุณได้ในเมนูการ  <br />
        ตั้งค่าบัญชีของคุณ โดยที่คุณมีสิทธิ์ในการตรวจสอบ
        <br /> แก้ไข หรือลบข้อมูลของคุณ ตามที่คุณต้องการ
      </p>
      <p className="content-text">
        หากคุณมีคำถาม
        โปรดอ่านข้อมูลเพิ่มเติมหรือติดต่อเราได้ที่แผนกบริการลูกค้าของเรา
      </p>
      <div className="checkbox-container">
        <label className="checkbox-label" onClick={handleCheckboxClick}>
          <div className={`custom-checkbox ${isChecked ? 'checked' : ''}`}>
            {isChecked && <span className="checkmark">✓</span>}
          </div>
          <span>ยอมรับข้อกำหนดและนโยบายความเป็นส่วนตัว</span>
        </label>
      </div>

      <button type="button" className="primary-btn" onClick={handleNext} 
      // disabled={isLoading}
      >
       ต่อไป
      </button>


    </div>
  );
};

export default PDPAConsentPage;
