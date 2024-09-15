'use client'
import { useRef, useEffect, useState } from 'react'
import { useRouter } from 'next/router';
import styles from './takephoto.module.css'
import Link from "next/link"

export default function Homepage() {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [photo, setPhoto] = useState(null);
  const frameRef = useRef(null);
  const [isFootInFrame, setIsFootInFrame] = useState(false);
  const router = useRouter();

  // Accessing user's webcam
  useEffect(() => {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices
        .getUserMedia({ video: true })
        .then((stream) => {
          if (videoRef.current) {
            videoRef.current.srcObject = stream;
            videoRef.current.play();
          }
        })
        .catch((err) => {
          console.error("Error accessing the camera: ", err);
        });
    }
  }, []);

  // Function to capture the photo
  const takePhoto = async () => {
    if (canvasRef.current && videoRef.current) {
      const context = canvasRef.current.getContext("2d");
      if (context) {
        context.drawImage(videoRef.current, 0, 0, canvasRef.current.width, canvasRef.current.height);
        const dataURL = canvasRef.current.toDataURL("image/png");
        setPhoto(dataURL);

        // Save image data and frame data to local storage
        localStorage.setItem('capturedImage', dataURL);
        localStorage.setItem('frameImage', '/footright1.png'); // Path to your frame image

        // Redirect to /about after saving image to local storage
        router.push('/VerifyphotoFoot/verPhotoFootRight4');
      }
    }
  };

  const handleFootEnter = () => {
    setIsFootInFrame(true);
  };

  const handleFootLeave = () => {
    setIsFootInFrame(false);
  };

  return (
    <main className={styles.main}>
        <Link href="/HomePage" >
      <button
      className={styles.backButton}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-left"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
        </button>
      </Link>
      <p className={styles.footTexth1}>ภาพวาดเท้าบนกระดาษข้างขวา</p>
      <p className={styles.footText}>โปรดวางเท้าของท่านให้อยู่ภายในกรอบ</p>
      
      <div className={styles.camera}>
        <div className={styles["video-wrapper"]}>
          <video ref={videoRef} className={styles.video} />
          <div className={styles.overlay} onMouseEnter={handleFootEnter} onMouseLeave={handleFootLeave}>
            <img ref={frameRef} src="/footright1.png" alt="Frame" className={styles["frame-image"]} />
          </div>
        </div>
        {isFootInFrame && (
          <div className={styles.footInFrameAlert}>
            <p>ฝ่าเท้าอยู่ในกรอบแล้ว!</p>
          </div>
        )}
        
        <canvas ref={canvasRef} className={styles.canvas} width="640" height="480" />
        {photo && <img src={photo} alt="Captured" className={styles.photo} />}
      
      </div>

      <footer className={styles.footer}>
        <button onClick={takePhoto} className={styles["take-photo-button"]}>

        </button>
      </footer>
    </main>
  );
}
