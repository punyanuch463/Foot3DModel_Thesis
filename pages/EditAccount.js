"use client";

import React, { useState } from "react";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faChevronDown, faCheck } from "@fortawesome/free-solid-svg-icons";

const EditAccount = () => {
  const router = useRouter();
  const [isGenderOpen, setIsGenderOpen] = useState(false);
  const [profileImage, setProfileImage] = useState(null);

  const handleNext = () => {
    router.push("/HomePage");
  };

  const toggleGenderVisibility = () => {
    setIsGenderOpen(!isGenderOpen);
  };

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setProfileImage(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxClick = () => {
    setIsChecked(!isChecked);
  };

  const handleSpanClick = () => {
    router.push("/PDPAConsentPage");
  };

  return (
    <div className="container">
      <FontAwesomeIcon
        icon={faArrowLeft}
        className="back-icon"
        onClick={() => window.history.back()}
      />
      <h1>ตั้งค่าบัญชี</h1>

      <div className="profile-image-wrapper">
        <input
          type="file"
          accept="image/*"
          id="profileImage"
          onChange={handleImageChange}
          style={{ display: "none" }}
        />
        <label htmlFor="profileImage">
          <div
            className="profile-image"
            style={{
              backgroundImage: `url(${profileImage || "default-profile.png"})`,
            }}
          ></div>
        </label>
      </div>

      <div className="input-group">
        <label htmlFor="fullName">ชื่อ-นามสกุล</label>
        <input type="text" id="fullName" />
      </div>

      <div className="input-group">
        <label htmlFor="gender">เพศ</label>
        <div className="select-wrapper">
          <select id="gender" className={isGenderOpen ? "open" : ""}>
            <option value="choose">เลือกเพศ</option>
            <option value="male">ชาย</option>
            <option value="female">หญิง</option>
            <option value="other">อื่นๆ</option>
          </select>
          <FontAwesomeIcon
            icon={faChevronDown}
            className="select-icon"
            onClick={toggleGenderVisibility}
          />
        </div>
      </div>

      <div className="input-group">
        <label htmlFor="age">อายุ</label>
        <input type="age" id="age" />
      </div>

      <div className="input-group">
        <label htmlFor="heightCM">ส่วนสูง (เซนติเมตร)</label>
        <input type="heightCM" id="heightCM" />
      </div>

      <div className="input-group">
        <label htmlFor="shoeSizeEU">ขนาดเท้า (EU)</label>
        <input type="shoeSizeEU" id="shoeSizeEU" />
      </div>

      <div className="input-group">
        <label htmlFor="shoeSizeCM">ขนาดเท้า (เซนติเมตร)</label>
        <input type="shoeSizeCM" id="shoeSizeCM" />
      </div>

      <button type="button" className="primary-btn" onClick={handleNext}>
        ยืนยัน
      </button>
    </div>
  );
};

export default EditAccount;
