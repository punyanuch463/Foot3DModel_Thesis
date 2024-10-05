"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faChevronDown, faCheck } from "@fortawesome/free-solid-svg-icons";

const SettingAccount = () => {
  const router = useRouter();
  const { userId } = router.query; // รับ UserId จาก query params
  
  const [isGenderOpen, setIsGenderOpen] = useState(false);
  const [profileImage, setProfileImage] = useState(null);
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
  // ดึง UserId จาก localStorage เมื่อ component mount
  useEffect(() => {
    // if (!userId) {
    //     setMessage('ไม่พบ UserId กรุณาสร้างบัญชีใหม่');
    //   }
    }, [userId, router]);

    const handleNext = async () => {
      
      if(!formData.fullName) {
        setMessage('เกิดข้อผิดพลาด: กรุณากรอกข้อมูลชื่อ-นามสกุล');
        return;
      }    
      if(!formData.gender) {
        setMessage('เกิดข้อผิดพลาด: กรุณากรอกข้อมูลเพศ');
        return;
      }
      if(!formData.age) {
        setMessage('เกิดข้อผิดพลาด: กรุณากรอกข้อมูลอายุ');
        return;
      }
  
      if(!formData.heightCM) {
        setMessage('เกิดข้อผิดพลาด:กรุณากรอกข้อมูลส่วนสูง');
        return;
      }
      if(!formData.shoeSizeEU) {
        setMessage('เกิดข้อผิดพลาด: กรุณากรอกข้อมูลขนาดเท้า EU');
        return;
      }
      if(!formData.shoeSizeCM) {
        setMessage('เกิดข้อผิดพลาด: กรุณากรอกข้อมูลขนาดเท้า CM');
        return;
      }
      if (!isChecked) {
        setMessage('เกิดข้อผิดพลาด:กรุณายอมรับข้อกำหนดและนโยบายความเป็นส่วนตัว');
        return;
      }

    try {
      const res = await fetch('/api/updateUser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          UserId: userId,
          ...formData,
          profileImage, // ส่งรูปโปรไฟล์
        }),
      });

      const data = await res.json();

      if (res.ok) {
        alert('อัปเดตบัญชีสำเร็จ! กำลังนำทางไปยังหน้า Consent...');
        // setMessage('อัปเดตบัญชีสำเร็จ! กำลังนำทางไปยังหน้า Consent...');
        // นำทางไปยังหน้า PDPAConsentPage หลังจากอัปเดตสำเร็จ
        setTimeout(() => {
          router.push(`/PDPAConsentPage?UserId=${userId}`);
        }, 2000);
      } else {
        setMessage(`เกิดข้อผิดพลาด: ${data.message}`);
      }
    } catch (error) {
      console.error('Error:', error);
      setMessage('เกิดข้อผิดพลาดในการส่งข้อมูล');
    }
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

  const handleCheckboxClick = () => {
    setIsChecked(!isChecked);
  };

  const handleSpanClick = () => {
    // if (!isChecked) {
    //   setMessage('กรุณายอมรับข้อกำหนดและนโยบายความเป็นส่วนตัว');
    //   return;
    // }
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
              backgroundImage: `url(${profileImage || "/default-profile.png"})`,
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
          required
        />
      </div>

      <div className="input-group">
  <label htmlFor="gender">เพศ</label>
  <div className="select-wrapper-setting">
    <select
      id="gender"
      name="gender" // Added name attribute
      value={formData.gender} // Controlled value
      onChange={handleChange} // onChange handler
      className={isGenderOpen ? "open" : ""}
      required // Added required for validation
    >
      <option value="">เลือกเพศ</option> {/* Changed value from "choose" to "" */}
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
        />
      </div>

      <div className="checkbox-container">
        <label className="checkbox-label" onClick={handleCheckboxClick}>
          <div className={`custom-checkbox ${isChecked ? 'checked' : ''}`}>
            {isChecked && <span className="checkmark">✓</span>}
          </div>
          <span onClick={handleSpanClick} style={{ fontFamily: 'Sukhumvit Set, sans-serif', cursor: 'pointer' }}>
            ยอมรับข้อกำหนดและนโยบายความเป็นส่วนตัว
          </span>
        </label>
      </div>

      <button type="button" className="primary-btn" onClick={handleNext}>
        ต่อไป
      </button>
    </div>
  );
};

export default SettingAccount;
