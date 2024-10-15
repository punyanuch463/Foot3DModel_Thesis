
"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faChevronDown, faCheck } from "@fortawesome/free-solid-svg-icons";

const SettingAccount = () => {
  const router = useRouter();
  const { userId } = router.query; // รับ UserId จาก query params

  const [isGenderOpen, setIsGenderOpen] = useState(false);
  const [profileImageFile, setProfileImageFile] = useState(null); // เก็บไฟล์ภาพ
  const [profileImageUrl, setProfileImageUrl] = useState(null); // สำหรับแสดงภาพก่อนอัปโหลด
  const [isChecked, setIsChecked] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    gender: '',
    age: '',
    heightCM: '',
    shoeSizeEU: '',
    shoeSizeCM: '',
  });

  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false); // เพิ่ม state สำหรับการโหลด

  function getImageUrl(googleDriveLink) {
    const fileIdMatch = googleDriveLink.match(/d\/(.*?)(\/|$)/);
    if (fileIdMatch && fileIdMatch[1]) {
      const fileId = fileIdMatch[1];
      return `https://images.weserv.nl/?url=drive.google.com/uc?id=${fileId}`;
    }
    return googleDriveLink; // คืนลิงก์เดิมถ้าไม่พบไฟล์ ID
  }

  useEffect(() => {
    // สามารถเพิ่มฟังก์ชัน fetch ข้อมูลผู้ใช้ที่นี่ถ้าจำเป็น
  }, [userId, router]);

  const handleNext = async () => {
    // ตรวจสอบฟอร์ม
    if (!formData.fullName) {
      setMessage('เกิดข้อผิดพลาด: กรุณากรอกข้อมูลชื่อ-นามสกุล');
      return;
    }
    if (!formData.gender) {
      setMessage('เกิดข้อผิดพลาด: กรุณากรอกข้อมูลเพศ');
      return;
    }
    if (!formData.age) {
      setMessage('เกิดข้อผิดพลาด: กรุณากรอกข้อมูลอายุ');
      return;
    }
    if (!formData.heightCM) {
      setMessage('เกิดข้อผิดพลาด: กรุณากรอกข้อมูลส่วนสูง');
      return;
    }
    if (!formData.shoeSizeEU) {
      setMessage('เกิดข้อผิดพลาด: กรุณากรอกข้อมูลขนาดเท้า EU');
      return;
    }
    if (!formData.shoeSizeCM) {
      setMessage('เกิดข้อผิดพลาด: กรุณากรอกข้อมูลขนาดเท้า CM');
      return;
    }
    if (!isChecked) {
      setMessage('เกิดข้อผิดพลาด: กรุณายอมรับข้อกำหนดและนโยบายความเป็นส่วนตัว');
      return;
    }
    
    setIsLoading(true); // เริ่มการโหลด
    setMessage(''); // ล้างข้อความข้อผิดพลาดก่อนหน้า

    try {
      let uploadedImageUrl = null;

      // ถ้ามีไฟล์ภาพที่เลือก ให้ทำการอัปโหลด
      if (profileImageFile) {
        const uploadFormData = new FormData();
        uploadFormData.append("file", profileImageFile);

        const uploadRes = await fetch("/api/uploadToDrive", {
          method: "POST",
          body: uploadFormData,
        });

        const uploadData = await uploadRes.json();

        if (uploadRes.ok && uploadData.success) {
          uploadedImageUrl = getImageUrl(uploadData.imageUrl);
        } else {
          setMessage(`เกิดข้อผิดพลาดในการอัปโหลดภาพ: ${uploadData.message}`);
          setIsLoading(false); // สิ้นสุดการโหลดเนื่องจากเกิดข้อผิดพลาด
          return;
        }
      }

      // ส่งข้อมูลผู้ใช้ไปยัง API
      const res = await fetch('/api/updateUser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          UserId: userId,
          ...formData,
          profileImage: uploadedImageUrl, // ส่ง URL ของรูปที่อัปโหลด
        }),
      });

      const data = await res.json();

      if (res.ok) {
        // alert('อัปเดตบัญชีสำเร็จ! กำลังนำทางไปยังหน้า Consent...');
        // นำทางไปยังหน้า PDPAConsentPage หลังจากอัปเดตสำเร็จ
        setTimeout(() => {
          router.push(`/PDPAConsentPage?UserId=${userId}`);
        }, 500);
      } else {
        setMessage(`เกิดข้อผิดพลาด: ${data.message}`);
      }
    } catch (error) {
      console.error('Error:', error);
      setMessage('เกิดข้อผิดพลาดในการส่งข้อมูล');
    }
    finally {
      setTimeout(() => {
        setIsLoading(false); // ยกเลิกสถานะ loading หลังจากส่งข้อมูลเสร็จ
      }, 2000); // Show spinner for 2 second minimum
    }
  };

  const toggleGenderVisibility = () => {
    setIsGenderOpen(!isGenderOpen);
  };

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setProfileImageFile(file);
      setProfileImageUrl(URL.createObjectURL(file)); // สร้าง URL สำหรับแสดงภาพ
    }
  };

  const handleCheckboxClick = () => {
    setIsChecked(!isChecked);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="container">
      <FontAwesomeIcon
        icon={faArrowLeft}
        className="back-icon"
        onClick={() => window.history.back()}
      />
      <div className="status-bar">
        <div className="circle complete">
          <FontAwesomeIcon icon={faCheck} />
        </div>
        <div className="circle active">2</div>
        <div className="circle">3</div>
      </div>
      <h1>ตั้งค่าบัญชี</h1>

      {message && <p className="alert">{message}</p>}

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
              backgroundImage: `url(${profileImageUrl || "/default-profile.png"})`,
            }}
          ></div>
        </label>
      </div>

      <div className="input-group">
        <label htmlFor="fullName">ชื่อ-นามสกุล</label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          placeholder="กรุณากรอกชื่อ-นามสกุล"
          required
        />
      </div>

      <div className="input-group">
        <label htmlFor="gender">เพศ</label>
        <div className="select-wrapper-setting">
          <select
            id="gender"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className={isGenderOpen ? "open" : ""}
            required
          >
            <option value="">เลือกเพศ</option>
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
        <input
          type="age"
          id="age"
          name="age"
          value={formData.age}
          onChange={handleChange}
          min="0"
          placeholder="กรุณากรอกอายุ"
          required
        />
      </div>

      <div className="input-group">
        <label htmlFor="heightCM">ส่วนสูง (เซนติเมตร)</label>
        <input
          type="heightCM"
          id="heightCM"
          name="heightCM"
          value={formData.heightCM}
          onChange={handleChange}
          step="0.01"
          min="0"
          placeholder="กรุณากรอกส่วนสูง"
          required
        />
      </div>

      <div className="input-group">
        <label htmlFor="shoeSizeEU">ขนาดเท้า (EU)</label>
        <input
          type="shoeSizeEU"
          id="shoeSizeEU"
          name="shoeSizeEU"
          value={formData.shoeSizeEU}
          onChange={handleChange}
          min="0"
          placeholder="กรุณากรอกขนาดเท้า (EU)"
          required
        />
      </div>

      <div className="input-group">
        <label htmlFor="shoeSizeCM">ขนาดเท้า (เซนติเมตร)</label>
        <input
          type="shoeSizeCM"
          id="shoeSizeCM"
          name="shoeSizeCM"
          value={formData.shoeSizeCM}
          onChange={handleChange}
          step="0.01"
          min="0"
          placeholder="กรุณากรอกขนาดเท้า (เซนติเมตร)"
          required
        />
      </div>

      <div className="checkbox-container">
        <label className="checkbox-label" onClick={handleCheckboxClick}>
          <div className={`custom-checkbox ${isChecked ? 'checked' : ''}`}>
            {isChecked && <span className="checkmark">✓</span>}
          </div>
          <span style={{ fontFamily: 'Sukhumvit Set, sans-serif', cursor: 'pointer' }}>
            ยอมรับข้อกำหนดและนโยบายความเป็นส่วนตัว
          </span>
        </label>
      </div>

      <button type="button" className="primary-btn" onClick={handleNext} disabled={isLoading} // ปิดการใช้งานปุ่มเมื่อกำลังโหลด
      >
        {isLoading ? "กำลังดำเนินการ..." : "ต่อไป"} {/* แสดงข้อความตามสถานะการโหลด */}
      </button>

     {isLoading && (
        <div className="loading-overlay">
          <div className="spinner"></div>
        </div>
      )}
    </div>
  );
};

export default SettingAccount;
