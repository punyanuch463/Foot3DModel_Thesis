
// export default HomePage;
"use client";
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faChevronDown, faTimes } from "@fortawesome/free-solid-svg-icons";
import { faBell, faClock } from "@fortawesome/free-regular-svg-icons";
import { faChartBar, faUsers, faBoxOpen, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { PiScanFill } from "react-icons/pi";
import { VscHome, VscAccount, VscSearch, VscHistory } from "react-icons/vsc";
import { useRouter } from "next/router";

const HomePage = () => {
  const router = useRouter();
  const [showNotification, setShowNotification] = useState(false);
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

  const goToEditAccount = () => {
    router.push("/EditAcc");
  };

  const goToHistoryPage = () => {
    router.push("/UserPage/UserHistory");
  };

  const goToHomePage = () => {
    router.push("/HomePage");
  };

  const goTosearch = () => {
    router.push("/search");
  };

  const goTotakePhotoFoot = () => {
    router.push("/takePhotoFoot/takePhotoFootLeft1");
  };

  const toggleNotification = () => {
    setShowNotification(!showNotification);
  };

  const closeNotification = () => {
    setShowNotification(false);
  };

  return (
    <div className="historyPage">
      {showNotification && <div className="darkened-background" />}
      {/* Search bar */}
      <div className="searchBar">
        <div className="header-with-back-icon">
          <FontAwesomeIcon
            icon={faArrowLeft}
            className="back-icon"
            onClick={() => router.back()}
          />
          <div className="top-right-icon">
            <FontAwesomeIcon
              icon={faBell}
              className="notification-icon"
              onClick={toggleNotification}
            />
            {showNotification && (
              <div className="notification-popup">
                <FontAwesomeIcon
                  icon={faTimes}
                  className="close-icon"
                  onClick={closeNotification}
                />
                <p className="notification-title"><strong>แจ้งเตือน</strong></p>
                <div className="notification-content">
                  <FontAwesomeIcon icon={faClock} className="clock-icon" />
                  <span>รหัสการสั่ง 0003, ส่งภาพถ่าย<br />ให้ผู้ดูแลระบบแล้ว</span>
                </div>
                <p className="notification-time">ตอนนี้</p>
              </div>
            )}

            <img
              src={profileImage}
              alt="Profile"
              className="profile-pic"
            />
          </div>
        </div>
        <h1>หน้าหลัก</h1>
      </div>

      {/* Content Menu */}
      <div className="content-menu">
        <div className="content-item">
          <FontAwesomeIcon icon={faChartBar} className="content-icon" />
          <span>สถิติ</span>
        </div>
        <div className="content-item">
          <FontAwesomeIcon icon={faUsers} className="content-icon" />
          <span>ผู้ใช้งาน</span>
        </div>
        <div className="content-item">
          <FontAwesomeIcon icon={faBoxOpen} className="content-icon" />
          <span>สินค้า</span>
        </div>
        <div className="content-item">
          <FontAwesomeIcon icon={faEnvelope} className="content-icon" />
          <span>จดหมาย</span>
        </div>
      </div>

      {/* MenuBar */}
      <div className="menuBar">
        <div className="menuItem" onClick={goToHomePage}>
          <VscHome />
          <p>หน้าหลัก</p>
        </div>
        <div className="menuItem" onClick={goTosearch}>
          <VscSearch />
          <p>ค้นหา</p>
        </div>
        <div className="menuItem" onClick={goTotakePhotoFoot}>
        <PiScanFill />
          <p>สแกน</p>
        </div>
        <div className="menuItem" onClick={goToHistoryPage}>
          <VscHistory />
          <p>ประวัติ</p>
        </div>
        <div className="menuItem" onClick={goToEditAccount}>
          <VscAccount />
          <p>โปรไฟล์</p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
