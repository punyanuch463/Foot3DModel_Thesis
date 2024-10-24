import React, { useEffect, useState } from "react";
import styles from "./verphoto.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export default function About() {
  const [capturedImage, setCapturedImage] = useState(null);
  const [frameImage, setFrameImage] = useState(null);
  const router = useRouter(); // ย้ายการเรียกใช้ router ไว้นอก useEffect

  useEffect(() => {
    // ดึงข้อมูลภาพและกรอบภาพจาก local storage
    const image = localStorage.getItem("capturedImage");
    const frame = localStorage.getItem("frameImage");
    
    // ตรวจสอบค่าที่ดึงมาว่ามีจริงหรือไม่
    if (image) setCapturedImage(image);
    if (frame) setFrameImage(frame);
  }, []);

  const handleBack = () => {
    router.push("/HomePage"); // ฟังก์ชันสำหรับนำทางกลับไปยังหน้า HomePage
  };

  return (
    <main className={styles.main}>
      <FontAwesomeIcon
        icon={faArrowLeft}
        className={styles.backIcon}
        onClick={handleBack}
      />
      <p className={styles.footTextTitle}>ข้างเท้าด้านในข้างซ้าย</p>
      {capturedImage && frameImage ? ( // ตรวจสอบว่ามีทั้งภาพที่ถ่ายและกรอบ
        <div className={styles.imageContainer}>
          <div className={styles.frameContainer}>
            <img src={frameImage} alt="Frame" className={styles.frameLine} />
            <img
              src={capturedImage}
              alt="Captured"
              className={styles.capturedImage}
            />
          </div>
        </div>
      ) : (
        <p>ยังไม่มีรูปภาพ</p> // แสดงข้อความเมื่อไม่มีภาพ
      )}
      <p className={styles.footTextSubTitle}>รูปภาพของคุณสามารถใช้งานได้</p>

      <footer className={styles.footer}>
        <Link href="/takePhotoFoot/takePhotoFootLeft2">
          <button className={styles.retakeBtn}>ถ่ายใหม่อีกครั้ง</button>
        </Link>
        <Link href="/takePhotoFoot/takePhotoFootLeft3">
          <button className={styles.confirmBtn}>ยืนยัน</button>
        </Link>
      </footer>
    </main>
  );
}
