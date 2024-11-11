
"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faChevronDown } from "@fortawesome/free-solid-svg-icons";

const EditAccount = () => {
  const router = useRouter();
  const [isGenderOpen, setIsGenderOpen] = useState(false);
  const [profileImageFile, setProfileImageFile] = useState(null); // เก็บไฟล์ภาพ
  const [profileImage, setProfileImage] = useState(null); // สำหรับแสดงภาพก่อนอัปโหลด
  const [userId, setUserId] = useState(null); // เก็บ userId จาก session
  const [userData, setUserData] = useState({
    fullName: "",
    gender: "",
    age: "",
    heightCM: "",
    shoeSizeEU: "",
    shoeSizeCM: "",
  });

  const [isLoading, setIsLoading] = useState(true); // สถานะการโหลด
  const [message, setMessage] = useState({ text: "", type: "" }); // โครงสร้าง message พร้อม text และ type

  useEffect(() => {
    const fetchSessionData = async () => {
      try {
        const res = await fetch("/api/getSession");
        const data = await res.json();
        console.log(data);
        
        if (res.ok && data.userId) {
          setUserId(data.userId);
        } else {
          setMessage({ text: data.message || "ไม่พบ session ผู้ใช้", type: "error" });
          setIsLoading(false);
        }
      } catch (error) {
        console.error("Error fetching session:", error);
        setMessage({ text: "เกิดข้อผิดพลาดในการดึงข้อมูล session", type: "error" });
        setIsLoading(false);
      }
    };

    fetchSessionData();
  }, []);

  useEffect(() => {
    const fetchUserData = async () => {
      if (userId) {
        try {
          const response = await fetch(`/api/user`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ userId: userId }),
          });

          if (response.ok) {
            const data = await response.json();
            console.log(data[0].ProfileImage);

            setUserData({
              fullName: data[0].FullName || "",
              gender: data[0].Gender || "",
              age: data[0].Age || "",
              heightCM: data[0].HeightCM || "",
              shoeSizeEU: data[0].FootSizeEU || "",
              shoeSizeCM: data[0].FootSizeCM || "",
            });
            setProfileImage(data[0].ProfileImage || "default-profile.png");
          } else {
            const errorData = await response.json();
            setMessage({ text: errorData.message || "ไม่สามารถดึงข้อมูลผู้ใช้", type: "error" });
          }
        } catch (err) {
          console.error("Error fetching user data:", err);
          setMessage({ text: "เกิดข้อผิดพลาดที่ไม่คาดคิด", type: "error" });
        } finally {
          setIsLoading(false);
        }
      } else {
        setMessage({ text: "ไม่พบ UserId ใน session", type: "error" });
        setIsLoading(false);
      }
    };

    if (userId) {
      fetchUserData();
    }
  }, [userId]);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleNext = async () => {
    // Validate form
    if (!userData.fullName) {
      setMessage({ text: "กรุณากรอกข้อมูลชื่อ-นามสกุล", type: "error" });
      return;
    }
    if (!userData.gender) {
      setMessage({ text: "กรุณากรอกข้อมูลเพศ", type: "error" });
      return;
    }
    if (!userData.age) {
      setMessage({ text: "กรุณากรอกข้อมูลอายุ", type: "error" });
      return;
    }
    if (!userData.heightCM) {
      setMessage({ text: "กรุณากรอกข้อมูลส่วนสูง", type: "error" });
      return;
    }
    if (!userData.shoeSizeEU) {
      setMessage({ text: "กรุณากรอกข้อมูลขนาดเท้า EU", type: "error" });
      return;
    }
    if (!userData.shoeSizeCM) {
      setMessage({ text: "กรุณากรอกข้อมูลขนาดเท้า CM", type: "error" });
      return;
    }

    setIsLoading(true);
    setMessage({ text: "" });

    try {
      let uploadedImageUrl = null;

      if (profileImageFile) {
        const uploadFormData = new FormData();
        uploadFormData.append("file", profileImageFile);
        uploadFormData.append("UserId", userId);

        const uploadRes = await fetch("/api/uploadToFolder", {
          method: "POST",
          body: uploadFormData,
        });

        const uploadData = await uploadRes.json();

        if (uploadRes.ok && uploadData.success) {
          uploadedImageUrl = uploadData.imageUrl;
        } else {
          setMessage({ text: `เกิดข้อผิดพลาดในการอัปโหลดภาพ: ${uploadData.message}`, type: "error" });
          setIsLoading(false);
          return;
        }
      }

      const res = await fetch("/api/updateUser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: userId,
          ...userData,
          profileImage: uploadedImageUrl,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage({ text: "แก้ไขข้อมูลสำเร็จ", type: "success" });
        setTimeout(() => {
          router.push(`/HomePageUser`);
        }, 500);
      } else {
        setMessage({ text: `เกิดข้อผิดพลาด: ${data.message}`, type: "error" });
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage({ text: "เกิดข้อผิดพลาดในการส่งข้อมูล", type: "error" });
    } finally {
      setIsLoading(false);
    }
  };

  const toggleGenderVisibility = () => {
    setIsGenderOpen(!isGenderOpen);
  };

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setProfileImageFile(file);
      setProfileImage(URL.createObjectURL(file));
    }
  };

  return (
    <div className="container">
      <FontAwesomeIcon
        icon={faArrowLeft}
        className="back-icon"
        onClick={() => window.history.back()}a
      />
      <h1>ตั้งค่าบัญชี</h1>

      {message.text && (
        <p className={`alert ${message.type}`}>
          {message.text}
        </p>
      )}

        
       {/* แก้ไขการแสดงผล message */}
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
        <input
          type="text"
          id="fullName"
          value={userData.fullName}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="input-group">
        <label htmlFor="gender">เพศ</label>
        <div className="select-wrapper-setting">
          <select
            id="gender"
            value={userData.gender}
            onChange={handleInputChange}
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
          value={userData.age}
          onChange={handleInputChange}
          min="0"
          required
        />
      </div>
      <div className="input-group">
        <label htmlFor="heightCM">ส่วนสูง (เซนติเมตร)</label>
        <input
          type="heightCM"
          id="heightCM"
          value={userData.heightCM}
          onChange={handleInputChange}
          min="0"
          required
        />
      </div>
      <div className="input-group">
        <label htmlFor="shoeSizeEU">ขนาดเท้า (EU)</label>
        <input
          type="shoeSizeEU"
          id="shoeSizeEU"
          value={userData.shoeSizeEU}
          onChange={handleInputChange}
          min="0"
          required
        />
      </div>
      <div className="input-group">
        <label htmlFor="shoeSizeCM">ขนาดเท้า (เซนติเมตร)</label>
        <input
          type="shoeSizeCM"
          id="shoeSizeCM"
          value={userData.shoeSizeCM}
          onChange={handleInputChange}
          min="0"
          required
        />
      </div>
      <button
        type="button"
        className="primary-btn"
        onClick={handleNext}
        disabled={isLoading}
      >
        {isLoading ? "กำลังดำเนินการ..." : "เเก้ไข"}
      </button>
      {isLoading && (
        <div className="loading-overlay">
          <div className="spinner"></div>
        </div>
      )}
    </div>
  );
};
export default EditAccount;