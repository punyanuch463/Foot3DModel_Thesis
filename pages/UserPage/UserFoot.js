import React, { useState } from "react";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { STLLoader } from "three/examples/jsm/loaders/STLLoader";

const STLModel = ({ url, rotationAngle }) => {
  const geometry = useLoader(STLLoader, url);

  return (
    <mesh geometry={geometry} scale={0.05} rotation={[0, rotationAngle, 0]}>
      <meshStandardMaterial color="gray" />
    </mesh>
  );
};

const UserFoot3D = () => {
  const router = useRouter();
  const [rotationAngle, setRotationAngle] = useState(Math.PI / 2);
  const [activeButton, setActiveButton] = useState("right");

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
          <img src="/default-profile.png" alt="Profile" className="profile-pic" />
        </div>
      </div>

      <p className="title">แบบจำลองเท้าสามมิติ</p>
      <div className="modelContainer">
        <Canvas style={{ display: "block", width: "400px", height: "500px" }}> 
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
