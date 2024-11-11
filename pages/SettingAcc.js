
"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faChevronDown, faCheck } from "@fortawesome/free-solid-svg-icons";

const SettingAccount = () => {
  const router = useRouter();
  const [userId, setUserId] = useState(null); // Store the userId from the cookie

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

  const [message, setMessage] = useState({ text: "", type: "" });
  // const [isLoading, setIsLoading] = useState(false); // เพิ่ม state สำหรับการโหลด


  useEffect(() => {
    let isMounted = true; // ตัวแปรเพื่อบันทึกสถานะการ mount

    const fetchSession = async () => {
      try {
        const res = await fetch('/api/getSession');
        const data = await res.json();

        if (res.ok && isMounted) {
          setUserId(data.userId);
        } else if (isMounted) {
          setMessage('ไม่พบข้อมูลผู้ใช้งาน กรุณาล็อกอินใหม่');
        }
      } catch (error) {
        console.error('Error fetching session:', error);
        if (isMounted) {
          setMessage('ไม่พบข้อมูลผู้ใช้งาน กรุณาล็อกอินใหม่');
        }
      }
    };

    fetchSession();

    return () => {
      isMounted = false; // Cleanup: ยกเลิกการทำงานเมื่อ unmount
    };
  }, []); // Empty dependency array to run this effect once

  const handleNext = async () => {
    // ตรวจสอบฟอร์ม
    if (!formData.fullName) {
      setMessage({
        text: "ข้อผิดพลาด: กรุณากรอกข้อมูลชื่อ-นามสกุล",
        type: "error",
      });
      return;
    }
    if (!formData.gender) {
      setMessage({ text: "ข้อผิดพลาด: กรุณากรอกข้อมูลเพศ", type: "error" });
      return;
    }
    if (!formData.age) {
      setMessage({ text: "ข้อผิดพลาด: กรุณากรอกข้อมูลอายุ", type: "error" });
      return;
    }
    if (!formData.heightCM) {
      setMessage({ text: "ข้อผิดพลาด: กรุณากรอกข้อมูลส่วนสูง", type: "error" });
      return;
    }
    if (!formData.shoeSizeEU) {
      setMessage({
        text: "ข้อผิดพลาด: กรุณากรอกข้อมูลขนาดเท้าในหน่วย EU",
        type: "error",
      });
      return;
    }
    if (!formData.shoeSizeCM) {
      setMessage({
        text: "ข้อผิดพลาด: กรุณากรอกข้อมูลขนาดเท้าในหน่วย CM",
        type: "error",
      });
      return;
    }
    if (!isChecked) {
      setMessage({
        text:'ข้อผิดพลาด: กรุณายอมรับข้อกำหนดและนโยบายความเป็นส่วนตัว',
      type: "error"
    });
      return;
    }
    
    // setIsLoading(true); // เริ่มการโหลด
    setMessage(''); // ล้างข้อความข้อผิดพลาดก่อนหน้า

    try {
      let uploadedImageUrl = null;

      // If a profile image has been selected, upload it
      if (profileImageFile) {
        const uploadFormData = new FormData();
        uploadFormData.append("file", profileImageFile);
        uploadFormData.append("UserId", userId); // Use userId from the session

        const uploadRes = await fetch("/api/uploadToFolder", {
          method: "POST",
          body: uploadFormData,
        });

        const uploadData = await uploadRes.json();

        if (uploadRes.ok && uploadData.success) {
          uploadedImageUrl = uploadData.imageUrl; // Get the image URL from the response
        } else {
          setMessage(`เกิดข้อผิดพลาดในการอัปโหลดภาพ: ${uploadData.message}`);
          setIsLoading(false); // Stop loading due to error
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
          userId: userId, // Use userId from the session
          ...formData,
          profileImage: uploadedImageUrl, // ส่ง URL ของรูปที่อัปโหลด
        }),
      });

      const data = await res.json();

      if (res.ok) {
        // Fetch session after updating user data
        const sessionRes = await fetch('/api/getSession');
        const sessionData = await sessionRes.json();
        
        if (sessionRes.ok) {
          console.log('Session Data:', sessionData);
          
          // If you need to do something with session data, do it here
          await fetch('/api/session', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ userId: sessionData.userId }),
          });
  
          setTimeout(() => {
            router.push(`/Consent`);
          }, 500);
        } else {
          setMessage('ไม่พบข้อมูลเซสชัน กรุณาล็อกอินใหม่');
        }
      } else {
        setMessage(`เกิดข้อผิดพลาด: ${data.message}`);
      }
    } catch (error) {
      console.error('Error:', error);
      setMessage('เกิดข้อผิดพลาดในการส่งข้อมูล');
    } finally {
      // setIsLoading(false);
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

      {message && (
            <p className={`alert ${message.type}`}>{message.text}</p>
        )}

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

      <button type="button" className="primary-btn" onClick={handleNext} 
      // disabled={isLoading} 
      >
       ต่อไป
      </button>

     {/* {isLoading && (
        <div className="loading-overlay">
          <div className="spinner"></div>
        </div>
      )} */}
    </div>
  );
};

export default SettingAccount;
