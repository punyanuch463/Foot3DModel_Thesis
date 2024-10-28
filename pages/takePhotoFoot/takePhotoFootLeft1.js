"use client";
import { useRef, useEffect, useState } from "react";
import { useRouter } from "next/router";
import styles from "./takephoto.module.css";
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export default function Homepage() {
  // สร้างตัวแปรสำหรับอ้างอิง video, canvas, และกรอบ (frame) รวมถึงการจัดการสถานะต่าง ๆ
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [photo, setPhoto] = useState(null);
  const frameRef = useRef(null);
  const [isFootInFrame, setIsFootInFrame] = useState(false);
  const router = useRouter();

  // การเข้าถึงกล้องของผู้ใช้เมื่อโหลดหน้าเว็บ
  useEffect(() => {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices
        .getUserMedia({ video: true }) // ขออนุญาตเข้าถึงกล้อง
        .then((stream) => {
          if (videoRef.current) {
            videoRef.current.srcObject = stream; // แสดงสตรีมจากกล้องใน video element
            videoRef.current.play(); // เริ่มเล่นวิดีโอ
          }
        })
        .catch((err) => {
          console.error("Error accessing the camera: ", err); // กรณีเกิดข้อผิดพลาดในการเข้าถึงกล้อง
        });
    }
  }, []);

  // ฟังก์ชันสำหรับถ่ายรูป
  const takePhoto = async () => {
    if (canvasRef.current && videoRef.current) {
      const context = canvasRef.current.getContext("2d");
      if (context) {
        // วาดภาพจากวิดีโอลงในแคนวาส
        context.drawImage(
          videoRef.current,
          0,
          0,
          canvasRef.current.width,
          canvasRef.current.height
        );
        const dataURL = canvasRef.current.toDataURL("image/png"); // แปลงภาพเป็น data URL
        setPhoto(dataURL);

        // บันทึกภาพที่ถ่ายและข้อมูลกรอบลงใน local storage
        localStorage.setItem("capturedImage", dataURL);
        localStorage.setItem("frameImage", "/footleft1.png"); // กำหนดที่อยู่ของภาพกรอบ

        // นำทางไปยังหน้า /VerifyphotoFoot/verPhotoFootLeft1 หลังจากถ่ายรูปเสร็จ
        router.push("/VerifyphotoFoot/verPhotoFootLeft1");
      }
    }
  };

  // ฟังก์ชันเมื่อฝ่าเท้าอยู่ในกรอบ
  const handleFootEnter = () => {
    setIsFootInFrame(true);
  };

  // ฟังก์ชันเมื่อฝ่าเท้าออกจากกรอบ
  const handleFootLeave = () => {
    setIsFootInFrame(false);
  };

  const handleBack = () => {
    router.push("/HomePage");
  };

  return (
    <main className={styles.main}>
        <FontAwesomeIcon
          icon={faArrowLeft}
          className={styles.backIcon} // เปลี่ยนจาก "back-icon" เป็น "styles.backIcon"
          onClick={handleBack} // หากต้องการเพิ่มฟังก์ชันในการกลับ
        />
      <p className={styles.footTextTitle}>ฝ่าเท้าข้างซ้าย</p>{" "}
      {/* ข้อความแสดงว่าฝ่าเท้าข้างซ้าย */}
      <p className={styles.footTextSubTitle}>โปรดวางเท้าของท่านให้อยู่ภายในกรอบ</p>{" "}
      {/* ข้อความแนะนำให้วางเท้าในกรอบ */}
      <div className={styles.camera}>
        <div className={styles["video-wrapper"]}>
          <video ref={videoRef} className={styles.video} />{" "}
          {/* แสดงวิดีโอจากกล้อง */}
          <div
            className={styles.overlay}
            onMouseEnter={handleFootEnter}
            onMouseLeave={handleFootLeave}
          >
            {/* แสดงภาพกรอบ overlay บนวิดีโอ */}
            <img
              ref={frameRef}
              src="/footleft1.png"
              alt="Frame"
              className={styles["frame-line"]}
            />
          </div>
        </div>
        {isFootInFrame && (
          <div className={styles.footInFrameAlert}>
            <p>ฝ่าเท้าอยู่ในกรอบแล้ว!</p>{" "}
            {/* แสดงข้อความเมื่อฝ่าเท้าอยู่ในกรอบ */}
          </div>
        )}
        <canvas
          ref={canvasRef}
          className={styles.canvas}
          width="640"
          height="480"
        />{" "}
        {/* ใช้แคนวาสสำหรับถ่ายภาพ */}
        {photo && (
          <img src={photo} alt="Captured" className={styles.photo} />
        )}{" "}
        {/* แสดงภาพที่ถ่ายได้ */}
      </div>
      <footer className={styles.footer}>
        <button
          onClick={takePhoto}
          className={styles["take-photo-button"]}
        ></button>{" "}
        {/* ปุ่มสำหรับถ่ายรูป */}
      </footer>
    </main>
  );
}
