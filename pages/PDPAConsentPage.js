"use client";

import React, { useState } from "react";
import { useRouter } from "next/router";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const PDPAConsentPage = () => {
  const router = useRouter();
  const [isChecked, setIsChecked] = useState(false);
  const { UserId } = router.query;
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false); // สถานะการโหลด

  const handleCheckboxClick = () => {
    setIsChecked(!isChecked);
  };

  const handleNext = () => {
    if (!isChecked) {
      setMessage('กรุณายอมรับข้อกำหนดและนโยบายความเป็นส่วนตัว');
      return;
    }

    // เริ่มแสดงหน้าการโหลด
    setIsLoading(true);

    // ใช้ setTimeout เพื่อจำลองการโหลดข้อมูล (เช่น การเรียก API) จากนั้นเปลี่ยนหน้า
    setTimeout(() => {
      router.push(`/CompletePage?UserId=${UserId}`);
    }, 2000); // กำหนดเวลา 2 วินาทีเพื่อจำลองการโหลด
  };

  return (
    <div className="container">
      <FontAwesomeIcon
        icon={faArrowLeft}
        className="back-icon"
        onClick={() => window.history.back()}
      />
      <h1>นโยบายความเป็นส่วนตัว</h1>
      {message && <p className="alert">{message}</p>}
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
        การคุ้มครองข้อมูลส่วนบุคคลของคุณได้ในเมนูการตั้งค่าบัญชีของคุณ
        โดยที่คุณมีสิทธิ์ในการตรวจสอบ
        <br /> แก้ไข หรือลบข้อมูลของคุณ ตามที่คุณต้องการ
      </p>
      <p className="content-text">
        นอกจากนี้เรายังมีมาตรการที่เหมาะสมเพื่อปกป้องข้อมูลของคุณจากการเข้าถึงโดยไม่ได้รับอนุญาต{" "}
        <br />
        หรือการใช้งานที่ไม่เหมาะสม
      </p>
      <p className="content-text">
        การยอมรับนโยบายความเป็นส่วนตัวเป็นการสร้าง
        <br />
        ความไว้วางใจและความโปร่งใสระหว่างเราและคุณ
        <br />
        ในการใช้บริการของเรา
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

      <button type="button" className="primary-btn" onClick={handleNext} disabled={isLoading}>
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

export default PDPAConsentPage;
