import React, { useState } from "react";
import { useRouter } from "next/router";
import styles from "styles/footdata.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faBell } from "@fortawesome/free-solid-svg-icons";

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
            src="/path/to/profile-picture.jpg" // เปลี่ยนเป็น path ของโปรไฟล์ที่ถูกต้อง
            alt="Profile"
            className="profile-pic"
          />
        </div>
      </div>

      <main className={styles.main}>
        <p className={styles.title}>แบบจำลองเท้าสามมิติ</p>
        {showModel && (
          <div className={styles.modelContainer}>
            {/* ตัวอย่างของการแสดงแบบจำลอง 3D */}
            <p>นี่คือที่จะแสดงแบบจำลอง 3D ของเท้าของคุณ</p>
            <img
              src="/image/fR.png" // เปลี่ยนเป็นชื่อไฟล์จริงของภาพ
              alt="Foot Model"
              className={styles.footModelImage} // ใส่คลาสเพื่อจัดการสไตล์
            />
          </div>
        )}

        {/* ปุ่มซ้ายและขวาอยู่กลางหน้าจอ */}
        <div className={styles.footButtonContainer}>
          <button className={styles.leftButton}>ซ้าย</button>
          <button className={styles.rightButton}>ขวา</button>
        </div>
      </main>
    </div>
  );
};

export default UserFoot3D;