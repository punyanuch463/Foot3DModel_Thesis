"use client";
import React, { useState } from "react";
import { useRouter } from "next/router";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft} from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-regular-svg-icons";

const UserFoot3D = () => {
  const router = useRouter();
  const [showModel, setShowModel] = useState(true); // State สำหรับแสดงแบบจำลอง

  return (
    <div className="container">
      <div className="header-with-back-icon">
        <FontAwesomeIcon
          icon={faArrowLeft}
          className="back-icon"
          onClick={() => router.back()}
        />
        <div className="top-right-icon">
          <FontAwesomeIcon
            icon={faBell} // Notification icon
            className="notification-icon"
          />
          <img
            src="/default-profile.png" // Change to your profile picture path
            alt="Profile"
            className="profile-pic"
          />
        </div>
      </div>

     
        <p className="title">แบบจำลองเท้าสามมิติ</p>
        <p className="Ad-subtitle">รหัสออเดอร์ 005</p>
        {showModel && (
          <div className="modelContainer">
            {/* ตัวอย่างของการแสดงแบบจำลอง 3D */}
            {/* <p>นี่คือที่จะแสดงแบบจำลอง 3D ของเท้าของคุณ</p> */}
            <img
              src="/FP1.png" // Change to your profile picture path
              alt="Foot Model"
              className="footModelImage"
            />
          </div>
        )}
        <div className="footButtonContainer">
          <button className="leftButton">ซ้าย</button>
          <button className="rightButton">ขวา</button>
        </div>
        <button className="download-btn">ดาวน์โหลด</button>

    </div>
  );
};

export default UserFoot3D;
