"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faCheck } from "@fortawesome/free-solid-svg-icons";

const CompletePage = () => {
  const [verificationCode, setVerificationCode] = useState("");
  const [message, setMessage] = useState({ text: "", type: "" }); // เปลี่ยนให้เป็นอ็อบเจ็กต์
  const [isLoading, setIsLoading] = useState(false); // สถานะการโหลด
  const router = useRouter();
  const { UserId } = router.query;

  useEffect(() => {
    if (!UserId) {
      setMessage({ text: "ไม่พบ UserId.", type: "error" });
    }
  }, [UserId]);

  const handleNext = async () => {
    if (!UserId) {
      setMessage({ text: "ไม่พบ UserId.", type: "error" });
      return;
    }

    const userIdNumber = parseInt(UserId, 10);
    setIsLoading(true); // เริ่มการโหลด
    setMessage({ text: "", type: "" }); // ล้างข้อความข้อผิดพลาดก่อนหน้า

    try {
      const response = await fetch("/api/verifyCode", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ UserId: userIdNumber, code: verificationCode }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage({ text: "ยืนยันสำเร็จ", type: "success" }); // เพิ่มข้อความสำเร็จ
        setTimeout(() => {
          router.push("/LoginPage");
        }, 500);
      } else {
        setMessage({ text: `ข้อผิดพลาด: ${data.error || data.message}`, type: "error" });
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage({ text: "เกิดข้อผิดพลาดในการส่งข้อมูล", type: "error" });
    } finally {
      setIsLoading(false); // ยกเลิกสถานะ loading
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
        <p className={`alert alert-${message.type}`}>
          {message.text}
        </p>
      )}

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
