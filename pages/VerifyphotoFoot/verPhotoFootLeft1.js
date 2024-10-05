
import React, { useEffect, useState } from "react";
import styles from './verphoto.module.css'
import Link from "next/link"

export default function About() {
  const [capturedImage, setCapturedImage] = useState(null);
  const [frameImage, setFrameImage] = useState(null);

  useEffect(() => {
    // Retrieve image data and frame data from local storage
    const image = localStorage.getItem('capturedImage');
    const frame = localStorage.getItem('frameImage');
    setCapturedImage(image);
    setFrameImage(frame);
  }, []);

  return (
    
    <main className={styles.main}>

        <Link href="/HomePage" >
      <button
      className={styles.backButton}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-left"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
        </button>
      </Link>
      <p className={styles.title}>ฝ่าเท้าข้างซ้าย</p>
      {capturedImage && frameImage && (
        <div className={styles.imageContainer}>
          <div className={styles.frameContainer}>
            <img src={frameImage} alt="Frame" className={styles.frameImage} />
            <img src={capturedImage} alt="Captured" className={styles.capturedImage} />
          </div>
        </div>
      )}
        <p className={styles.verityfoot}>รูปภาพของคุณสามารถใช้งานได้</p>

<footer className={styles.footer}>
          <Link href="/takePhotoFoot/takePhotoFootLeft1" >
     
          <button className={styles.retake} >ถ่ายใหม่อีกครั้ง

          </button>
          </Link>
          <Link href="/takePhotoFoot/takePhotoFootLeft2" >
          <button className={styles.confirm} >ยืนยัน

          </button>
          </Link>
      </footer>
    </main>
  )
}

