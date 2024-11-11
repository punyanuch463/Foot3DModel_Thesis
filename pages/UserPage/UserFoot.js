import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { STLLoader } from "three/examples/jsm/loaders/STLLoader";

// ส่วนที่ใช้ในการโหลดไฟล์ STL
const STLModel = ({ url, rotationAngle }) => {
  const geometry = useLoader(STLLoader, url); // ตรวจสอบให้แน่ใจว่าไฟล์นี้สามารถเข้าถึงได้
  return (
    <mesh geometry={geometry} scale={0.02} rotation={[0, rotationAngle, 0]}>
      <meshStandardMaterial color="gray" />
    </mesh>
  );
};

const UserFoot3D = () => {
  const router = useRouter();
  const [rotationAngle, setRotationAngle] = useState(Math.PI / 2);
  const [activeButton, setActiveButton] = useState("right");
  const [profileImage, setProfileImage] = useState("/default-profile.png"); // เริ่มต้นด้วยภาพ default
  const [userId, setUserId] = useState(null);
  // ดึงข้อมูล session และ user profile
 useEffect(() => {
  const fetchSessionData = async () => {
    try {
      const sessionRes = await fetch("/api/getSession");
      const sessionData = await sessionRes.json();

      if (sessionRes.ok && sessionData.userId) {
        setUserId(sessionData.userId);
        fetchUserData(sessionData.userId); // ดึงข้อมูล user profile ตาม userId
      }
    } catch (error) {
      console.error("Error fetching session:", error);
    }
  };

  const fetchUserData = async (userId) => {
    try {
      const response = await fetch(`/api/user`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId: userId }),
      });

      if (response.ok) {
        const data = await response.json();
        setProfileImage(data[0].ProfileImage || "/default-profile.png");
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  fetchSessionData();
}, []);

  const rotateLeft = () => {
    setRotationAngle(-Math.PI / 2);
    setActiveButton("left");
  };

  const rotateRight = () => {
    setRotationAngle(Math.PI / 2);
    setActiveButton("right");
  };

  return (
    <div className="container">
      <div className="header-with-back-icon">
        <FontAwesomeIcon
          icon={faArrowLeft}
          className="back-icon"
          onClick={() => router.back()}
        />
        <div className="top-right-icon">
          <FontAwesomeIcon icon={faBell} className="notification-icon" />
          <img
              src={profileImage}
              alt="Profile"
              className="profile-pic"
            />
        </div>
      </div>

      <p className="title">แบบจำลองเท้าสามมิติ</p>
      <div className="canvas-container">
        <Canvas
          style={{
            width: "300px",
            height: "500px",
            margin: "0 auto", // ตั้งให้อยู่กลางหน้าจอ
            display: "block", // ให้ Canvas แสดงเป็นบล็อก
          }}
          camera={{ position: [0, 0, 10] }}
        >
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <OrbitControls />
          <STLModel url="/Foot3d/3d002.stl" rotationAngle={rotationAngle} />
        </Canvas>
      </div>
      
      <div className="footButtonContainer">
        <button
          className={`leftButton ${activeButton === "left" ? "activeLeft" : ""}`}
          onClick={rotateLeft}
        >
          ซ้าย
        </button>
        <button
          className={`rightButton ${activeButton === "right" ? "activeRight" : ""}`}
          onClick={rotateRight}
        >
          ขวา
        </button>
      </div>
    </div>
  );
};

export default UserFoot3D;
