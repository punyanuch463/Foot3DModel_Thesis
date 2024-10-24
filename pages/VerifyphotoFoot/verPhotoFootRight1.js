import React, { useEffect, useState } from "react";
import styles from "./verphoto.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export default function About() {
  const [capturedImage, setCapturedImage] = useState(null);
  const [frameImage, setFrameImage] = useState(null);
  const router = useRouter(); // ย้ายการเรียกใช้ router ไว้ที่ด้านบน

  useEffect(() => {
    // Retrieve image data and frame data from local storage
    const image = localStorage.getItem("capturedImage");
    const frame = localStorage.getItem("frameImage");
    setCapturedImage(image);
    setFrameImage(frame);
  }, []);

  const handleBack = () => {
    router.push("/HomePage");
  };

  return (
    <main className={styles.main}>
      <FontAwesomeIcon
        icon={faArrowLeft}
        className={styles.backIcon}
        onClick={handleBack}
      />
      <p className={styles.footTextTitle}>ฝ่าเท้าข้างขวา</p>
      {capturedImage && frameImage && (
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
      )}
      <p className={styles.footTextSubTitle}>รูปภาพของคุณสามารถใช้งานได้</p>

      <footer className={styles.footer}>
        <Link href="/takePhotoFoot/takePhotoFootRight1">
          <button className={styles.retakeBtn}>ถ่ายใหม่อีกครั้ง</button>
        </Link>
        <Link href="/takePhotoFoot/takePhotoFootRight2">
          <button className={styles.confirmBtn}>ยืนยัน</button>
        </Link>
      </footer>
    </main>
  );
}
