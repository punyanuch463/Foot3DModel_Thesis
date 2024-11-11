import React, { useEffect, useState } from "react";
import styles from "./verphoto.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export default function About() {
  const [capturedImage, setCapturedImage] = useState(null);
  const [frameImage, setFrameImage] = useState(null);
  const [userId, setUserId] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const fetchSessionData = async () => {
      try {
        const sessionRes = await fetch("/api/getSession");
        const sessionData = await sessionRes.json();
        if (sessionRes.ok && sessionData.userId) {
          setUserId(sessionData.userId);
        }
      } catch (error) {
        console.error("Error fetching session:", error);
      }
    };
    fetchSessionData();
  }, []);

  useEffect(() => {
    const image = localStorage.getItem("capturedImage");
    const frame = localStorage.getItem("frameImage");
    if (image) setCapturedImage(image);
    if (frame) setFrameImage(frame);
  }, []);

  const handleBack = () => {
    router.push("/HomePageUser");
  };
  const saveImageToDatabase = async () => {
    if (capturedImage && userId) {
      try {
        const fileName = "imagefootleft3.png";
  
        // เรียกใช้ API อัปโหลดภาพใหม่
        const imageSaveResponse = await fetch("/api/uploadFootImageToFolder", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            base64Image: capturedImage,
            userId,
            fileName,
          }),
        });
  
        const { imageUrl, success } = await imageSaveResponse.json();
  
        if (success && imageUrl) {
          // บันทึกลิงก์ภาพลงในฐานข้อมูล
          const dbSaveResponse = await fetch("/api/saveFootImage", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              imageCategoryId: 3,
              side: "left",
              pathUrl: imageUrl,
            }),
          });
  
          const dbSaveData = await dbSaveResponse.json();
          if (dbSaveData.id) {
            console.log("Image saved successfully with ID:", dbSaveData.id);
            router.push('/takePhotoFoot/takePhotoFootLeft2');
          } else {
            console.error("Failed to save image to database:", dbSaveData);
          }
        } else {
          console.error("Failed to upload image:", imageUrl);
        }
      } catch (error) {
        console.error("Error saving image:", error);
      }
    }
  };
  
  return (
    <main className={styles.main}>
      <FontAwesomeIcon
        icon={faArrowLeft}
        className={styles.backIcon}
        onClick={handleBack}
      />
      <p className={styles.footTextTitle}>มุมหลังเท้าบนกระดาษข้างซ้าย</p>
      {capturedImage && frameImage ? ( // ใช้การตรวจสอบค่าที่มีอยู่
        <div className={styles.imageContainer}>
          <div className={styles.frameContainer}>
          <img src={capturedImage} alt="Captured" className={styles.capturedImage} />  
          <img src={frameImage} alt="Frame" className={styles.frameLine} />
          </div>
        </div>
      ) : (
        <p>ยังไม่มีรูปภาพ</p> // เพิ่มข้อความแสดงเมื่อไม่มีภาพ
      )}
      <p className={styles.footTextSubTitle}>รูปภาพของคุณสามารถใช้งานได้</p>

      <footer className={styles.footer}>
        <Link href="/takePhotoFoot/takePhotoFootLeft3">
          <button className={styles.retakeBtn}>ถ่ายใหม่อีกครั้ง</button>
        </Link>
        <Link href="/takePhotoFoot/takePhotoFootLeft4">
          <button className={styles.confirmBtn}>ยืนยัน</button>
        </Link>
      </footer>
    </main>
  );
}
