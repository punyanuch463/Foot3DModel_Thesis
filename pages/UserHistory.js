"use client";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faChevronDown, faTimes } from "@fortawesome/free-solid-svg-icons";
import { faBell, faClock  } from "@fortawesome/free-regular-svg-icons";
import { FaSearch, FaCalendarAlt, FaDotCircle } from "react-icons/fa";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { VscHome, VscAccount, VscSearch, VscHistory } from "react-icons/vsc";
import { PiScanFill } from "react-icons/pi";
import { useRouter } from "next/router";


const UserHistory = () => {
  const [orderCode, setOrderCode] = useState("");
  const [status, setStatus] = useState("");
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [expandedOrder, setExpandedOrder] = useState(null); // Track expanded card
  const [expandedDetail, setExpandedDetail] = useState(null); // Track expanded detail
  const router = useRouter();
  const [showNotification, setShowNotification] = useState(false); // สถานะเปิด/ปิดแจ้งเตือน

  const handleSearch = () => {
    console.log({
      orderCode,
      status,
      startDate,
      endDate,
    });
  };

  const goToEditAccount = () => {
    router.push("/EditAccount");
  };

  const goToHistoryPage = () => {
    router.push("/HistoryPage");
  };

  const toggleExpandOrder = (index) => {
    setExpandedOrder(expandedOrder === index ? null : index);
  };

  const toggleExpandDetail = (index) => {
    setExpandedDetail(expandedDetail === index ? null : index);
  };

  const toggleNotification = () => {
    setShowNotification(!showNotification);
  };

  const closeNotification = () => {
    setShowNotification(false);
  };

  const orderSteps = [
    "ประมวลผลภาพถ่าย",
    "สร้างแบบจำลอง 3 มิติ",
    "ส่งภาพถ่ายให้ผู้ดูแลระบบ",
    "ยืนยันการสั่งซื้อ",
  ];

  const orderDetails = [
    {
      userId: "USER123",
      items: "Item A, Item B, Item C",
    },
    {
      userId: "USER124",
      items: "Item X, Item Y",
    },
    {
      userId: "USER125",
      items: "Item D, Item E, Item F",
    },
    {
      userId: "USER126",
      items: "Item Z",
    },
    {
      userId: "USER127",
      items: "Item M, Item N",
    },
  ];

  return (
    <div className="historyPage">
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
              icon={faBell} // Notification icon
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
                <div className="notification-content">
                  <FontAwesomeIcon icon={faClock} className="clock-icon" />
                  <span>รหัสการสั่ง 0003, ส่งภาพถ่าย<br />ให้ผู้ดูแลระบบแล้ว</span>
                </div>
                <p className="notification-time">ตอนนี้</p>
                <div className="notification-content">
                  <FontAwesomeIcon icon={faClock} className="clock-icon" />
                  <span>รหัสการสั่ง 0003, ส่งภาพถ่าย<br />ให้ผู้ดูแลระบบแล้ว</span>
                </div>
                <p className="notification-time">ตอนนี้</p>
              </div>
            )}
            <img
              src="/path/to/profile-picture.jpg" // Change to your profile picture path
              alt="Profile"
              className="profile-pic"
            />
          </div>
        </div>
        <h1>ประวัติการดำเนินการ</h1>
        {/* Regular search bar */}
        <div className="searchItem">
          <FaSearch />
          <input type="text" placeholder="ค้นหา" />
        </div>

        {/* Search by order code and filter status */}
        <div className="orderStatusGroup">
          <div className="searchItem orderId">
            <FaSearch />
            <input
              type="text"
              placeholder="รหัสการสั่งซื้อ"
              value={orderCode}
              onChange={(e) => setOrderCode(e.target.value)}
            />
          </div>
          <div className="select-wrapper">
            <select value={status} onChange={(e) => setStatus(e.target.value)}>
              <option value="">สถานะ</option>
              <option value="pending">รอดำเนินการ</option>
              <option value="completed">สำเร็จ</option>
              <option value="canceled">ยกเลิก</option>
            </select>
            <FontAwesomeIcon icon={faChevronDown} className="select-icon" />
          </div>
        </div>

        {/* Search by date */}
        <div className="searchItem">
          <FaCalendarAlt />
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            selectsStart
            startDate={startDate}
            endDate={endDate}
            placeholderText="เริ่มวันที่"
          />
          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            selectsEnd
            startDate={startDate}
            endDate={endDate}
            minDate={startDate}
            placeholderText="ถึงวันที่"
          />
        </div>
      </div>

      <div className="orderList">
        {[
          {
            orderCode: "รหัสสั่งซื้อ ORD12345",
            submitDate: "ส่งเมื่อวันที่ 3 มิถุนายน 2567 เวลา 14:21",
            status: "pending",
          },
          {
            orderCode: "รหัสสั่งซื้อ ORD12346",
            submitDate: "ส่งเมื่อวันที่ 2 มิถุนายน 2567 เวลา 13:40",
            status: "completed",
          },
          {
            orderCode: "รหัสสั่งซื้อ ORD12347",
            submitDate: "ส่งเมื่อวันที่ 2 มิถุนายน 2567 เวลา 13:32",
            status: "canceled",
          },
          {
            orderCode: "รหัสสั่งซื้อ ORD12348",
            submitDate: "ส่งเมื่อวันที่ 1 มิถุนายน 2567 เวลา 13:40",
            status: "completed",
          },
          {
            orderCode: "รหัสสั่งซื้อ ORD12349",
            submitDate: "ส่งเมื่อวันที่ 1 มิถุนายน 2567 เวลา 13:32",
            status: "completed",
          },
        ].map((order, index) => (
          <div key={index} className="orderCard">
            <div className="orderHeader">
              <p className="orderCode">{order.orderCode}</p>
              <div className={`orderStatus ${order.status}`}>
                {order.status === "pending"
                  ? "รอดำเนินการ"
                  : order.status === "completed"
                  ? "สำเร็จ"
                  : "ยกเลิก"}
              </div>
            </div>
            <div className="submitDateContainer">
              <FaCalendarAlt />
              <p className="submitDate">{order.submitDate}</p>
            </div>
            <hr className="divider" />
            <div className="buttonGroup">
              <button
                className="footInfoBtn"
                onClick={() => toggleExpandOrder(index)}
              >
                ประวัติ
              </button>
              <button
                className="footInfoBtn"
                onClick={() => toggleExpandDetail(index)}
              >
                รายละเอียด
              </button>
              <button className="view3DBtn">ภาพ 3D</button>
            </div>
            {expandedDetail === index && (
              <div className="detailSteps">
                <div className="detailStep">
                  <p>
                    รหัสผู้ใช้งาน{" "}
                    <span className="userDetail">
                      {orderDetails[index]?.userId || "ไม่มีข้อมูล"}
                    </span>
                  </p>
                </div>
                <div className="detailStep">
                  <p>
                    รายการ{" "}
                    <span className="userDetail">
                      {orderDetails[index]?.items || "ไม่มีข้อมูล"}
                    </span>
                  </p>
                </div>
              </div>
            )}
            {expandedOrder === index && (
              <div className="orderSteps">
                {orderSteps.map((step, stepIndex) => (
                  <div key={stepIndex} className="orderStep">
                    <FaDotCircle />
                    <p>{step}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* MenuBar */}
      <div className="menuBar">
        <div className="menuItem" onClick={() => router.push("/")}>
          <VscHome />
          <p>หน้าหลัก</p>
        </div>
        <div className="menuItem" onClick={() => router.push("/search")}>
          <VscSearch />
          <p>ค้นหา</p>
        </div>
        <div className="menuItem" onClick={() => router.push("/scan")}>
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

export default UserHistory;
