"use client";
// pages/index.tsx
import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { VscHome, VscAccount, VscSearch, VscHistory  } from 'react-icons/vsc';
import { PiScanFill} from 'react-icons/pi';
import { useRouter } from 'next/navigation';
import "../globals.css";

const HomePage: React.FC = () => {
  const router = useRouter();  // ใช้ useRouter เพื่อเข้าถึง router


  const goToEditAccount = () => {
    router.push('/EditAccount');
  };

  const goToHistoryPage = () => {
    router.push('/HistoryPage');
  };
  
  return (
    <div>
      {/* เนื้อหาของหน้าหลัก */}
      <h1>ยินดีต้อนรับ</h1>

      {/* MenuBar */}
      <div className="menuBar">
        <div className="menuItem">
          <VscHome />
          <p>หน้าหลัก</p>
        </div>
        <div className="menuItem">
          < VscSearch />
          <p>ค้นหา</p>
        </div>
        <div className="menuItem">
          <PiScanFill />
          <p>สแกน</p>
        </div>
        <div className="menuItem"  onClick={goToHistoryPage}>
          < VscHistory />
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
