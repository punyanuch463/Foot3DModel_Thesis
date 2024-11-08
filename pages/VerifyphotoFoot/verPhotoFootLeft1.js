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
    router.push("/HomePage");
  };

  const saveImageToDatabase = async () => {
    if (capturedImage && userId) {
      try {
        const fileName = "imagefootleft1.png"; // Set desired file name

        // Step 1: Save the image to the file system via API
        const imageSaveResponse = await fetch("/api/saveImageToFile", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            base64Image: capturedImage,
            userId,
            fileName,
          }),
        });
        const { pathUrl } = await imageSaveResponse.json();

        if (pathUrl) {
          // Step 2: Save the path to the database
          const dbSaveResponse = await fetch("/api/saveFootImage", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              imageCategoryId: 1,
              side: "left",
              pathUrl,
            }),
          });

          const dbSaveData = await dbSaveResponse.json();
          if (dbSaveData.id) {
            console.log("Image saved successfully with ID:", dbSaveData.id);
            router.push('/takePhotoFoot/takePhotoFootLeft2');
          } else {
            console.error("Failed to save image to database:", dbSaveData);
          }
        }
      } catch (error) {
        console.error("Error saving image:", error);
      }
    }
  };

  return (
    <main className={styles.main}>
      <FontAwesomeIcon icon={faArrowLeft} className={styles.backIcon} onClick={handleBack} />
      <p className={styles.footTextTitle}>ฝ่าเท้าข้างซ้าย</p>
      {capturedImage && frameImage ? (
        <div className={styles.imageContainer}>
          <div className={styles.frameContainer}>
            <img src={frameImage} alt="Frame" className={styles.frameLine} />
            <img src={capturedImage} alt="Captured" className={styles.capturedImage} />
          </div>
        </div>
      ) : (
        <p>ยังไม่มีรูปภาพ</p>
      )}
      <p className={styles.footTextSubTitle}>รูปภาพของคุณสามารถใช้งานได้</p>

      <footer className={styles.footer}>
        <Link href="/takePhotoFoot/takePhotoFootLeft1">
          <button className={styles.retakeBtn}>ถ่ายใหม่อีกครั้ง</button>
        </Link>
        <button className={styles.confirmBtn} onClick={saveImageToDatabase}>
          ยืนยัน
        </button>
      </footer>
    </main>
  );
}
