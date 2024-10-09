"use client";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FaSearch, FaCalendarAlt } from "react-icons/fa";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { VscHome, VscAccount, VscSearch, VscHistory } from "react-icons/vsc";
import { PiScanFill } from "react-icons/pi";
import { useRouter } from "next/router";


const HistoryPage = () => {
  const [orderCode, setOrderCode] = useState("");
  const [status, setStatus] = useState("");
  const [startDate, setStartDate] = useState(undefined);
  const [endDate, setEndDate] = useState(undefined);
  const router = useRouter();

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

  return (
    <div className="historyPage">
      {/* Search Section */}
      <div className="searchBar">
        <div className="header-with-back-icon">
          <FontAwesomeIcon
            icon={faArrowLeft}
            className="back-icon"
            onClick={() => router.back()}
          />
        </div>
        <h1>ประวัติการดำเนินการ</h1>
        {/* General Search */}
        <div className="searchItem">
          <FaSearch />
          <input type="text" placeholder="ค้นหา" />
        </div>

        {/* Search by Order Code and Filter Status */}
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

        {/* Search by Date */}
        <div className="searchItem">
          <FaCalendarAlt />
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date || undefined)}
            selectsStart
            startDate={startDate}
            endDate={endDate}
            placeholderText="เริ่มวันที่"
          />
          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date || undefined)}
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
            userId: "USER001",
            userName: "John Doe",
            email: "john.doe@example.com"
          },
          {
            orderCode: "รหัสสั่งซื้อ ORD12346",
            submitDate: "ส่งเมื่อวันที่ 2 มิถุนายน 2567 เวลา 13:40",
            status: "completed",
            userId: "USER002",
            userName: "Jane Smith",
            email: "jane.smith@example.com"
          },
          {
            orderCode: "รหัสสั่งซื้อ ORD12347",
            submitDate: "ส่งเมื่อวันที่ 2 มิถุนายน 2567 เวลา 13:32",
            status: "canceled",
            userId: "USER003",
            userName: "Alice Johnson",
            email: "alice.johnson@example.com"
          },
          {
            orderCode: "รหัสสั่งซื้อ ORD12348",
            submitDate: "ส่งเมื่อวันที่ 1 มิถุนายน 2567 เวลา 13:40",
            status: "completed",
            userId: "USER004",
            userName: "Bob Brown",
            email: "bob.brown@example.com"
          },
          {
            orderCode: "รหัสสั่งซื้อ ORD12349",
            submitDate: "ส่งเมื่อวันที่ 1 มิถุนายน 2567 เวลา 13:32",
            status: "completed",
            userId: "USER005",
            userName: "Charlie Davis",
            email: "charlie.davis@example.com"
          }
        ].map((order, index) => (
          <div key={index} className="orderCard">
            <div className="orderHeader">
              <p className="orderCode">{order.orderCode}</p>
              <div className={`orderStatus ${order.status}`}>
                {order.status === "pending" ? "รอดำเนินการ" : order.status === "completed" ? "สำเร็จ" : "ยกเลิก"}
              </div>
            </div>
            <div className="submitDateContainer">
              <FaCalendarAlt />
              <p className="submitDate">{order.submitDate}</p>
            </div>
            <hr className="divider" />
            <p>รายละเอียด</p>
            <div className="orderInfo">
              <p>รหัสผู้ใช้ <span className="userDetail">{order.userId}</span></p>
              <p>ชื่อผู้ใช้ <span className="userDetail">{order.userName}</span></p>
              <p>อีเมล <span className="userDetail">{order.email}</span></p>
            </div>
            <div className="buttonGroup">
              <button className="footInfoBtn">ข้อมูลเท้า</button>
              <button className="view3DBtn">ภาพ 3D</button>
            </div>
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

export default HistoryPage;
