// "use client";
// // pages/index.tsx
// import React from 'react';
// import { VscHome, VscAccount, VscSearch, VscHistory  } from 'react-icons/vsc';
// import { PiScanFill} from 'react-icons/pi';
// import { useRouter } from 'next/router';
// import Link from "next/link"
// const HomePage = () => {
//   const router = useRouter();  // ใช้ useRouter เพื่อเข้าถึง routerd
//   const { UserId } = router.query;

//   const goToEditAccount = () => {
//     router.push(`/EditAccount?UserId=${UserId}`);
//   };

//   const goToHistoryPage = () => {
//     router.push('/UserHistory');
//   };

//   const goTotakePhotoFoot= () => {
//     router.push('/takePhotoFoot/takePhotoFootLeft1');
//   };
  
//   return (
//     <div>
//       {/* เนื้อหาของหน้าหลัก */}
//       <h1>ยินดีต้อนรับ</h1>

//       {/* MenuBar */}
//       <div className="menuBar">
//         <div className="menuItem">
//           <VscHome />
//           <p>หน้าหลัก</p>
//         </div>
//         <div className="menuItem">
//           < VscSearch />
//           <p>ค้นหา</p>
//         </div>
//         {/* <Link
//             href="/takePhotoFoot/takePhotoFootLeft1"
//           > */}
//             {/* <a className={styles.card}> */}
//             <div className="menuItem" onClick={goTotakePhotoFoot}>
//           <PiScanFill />
//           <p>สแกน</p>
//         </div>
//             {/* </a> */}
//           {/* </Link> */}
        
//         <div className="menuItem"  onClick={goToHistoryPage}>
//           < VscHistory />
//           <p>ประวัติ</p>
//         </div>
//         <div className="menuItem" onClick={goToEditAccount}>
//           <VscAccount />
//           <p>โปรไฟล์</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HomePage;
"use client";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faChevronDown, faTimes } from "@fortawesome/free-solid-svg-icons";
import { faBell, faClock  } from "@fortawesome/free-regular-svg-icons";
import { faChartBar, faUsers, faBoxOpen, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "react-datepicker/dist/react-datepicker.css";
import { VscHome, VscAccount, VscSearch, VscHistory } from "react-icons/vsc";
import { PiScanFill } from "react-icons/pi";
import { useRouter } from "next/router";

const HomePage = () => {
  const router = useRouter();
  const [showNotification, setShowNotification] = useState(false);

  const goToEditAccount = () => {
    router.push("/EditAccount");
  };

  const goToUserHistory= () => {
    router.push("/UserHistory");
  };

  const goToHomePage= () => {
    router.push("/HomePage");
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
              src="/path/to/profile-picture.jpg"
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
        <div className="menuItem" onClick={() => router.push("/search")}>
          <VscSearch />
          <p>ค้นหา</p>
        </div>
        <div className="menuItem" onClick={() => router.push("/takePhotoFoot/takePhotoFootLeft1")}>
          <PiScanFill />
          <p>สแกน</p>
        </div>
        <div className="menuItem" onClick={goToUserHistory}>
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