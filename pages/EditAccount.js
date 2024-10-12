"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faChevronDown } from "@fortawesome/free-solid-svg-icons";

const EditAccount = () => {
  const router = useRouter();
  const { UserId } = router.query; // รับ UserId จาก query parameters
  const [isGenderOpen, setIsGenderOpen] = useState(false);
  const [profileImageFile, setProfileImageFile] = useState(null); // เก็บไฟล์ภาพ
  const [profileImage, setProfileImage] = useState(null);// สำหรับแสดงภาพก่อนอัปโหลด
  const [userData, setUserData] = useState({
    fullName: "",
    gender: "",
    age: "",
    heightCM: "",
    shoeSizeEU: "",
    shoeSizeCM: "",
  });
  
  const [isLoading, setIsLoading] = useState(true); // สถานะการโหลด
  const [message, setMessage] = useState('');
  
  function getImageUrl(imageUrl) {
    if (!imageUrl) return "default-profile.png"; // Fallback to default if imageUrl is null
  
    // If the imageUrl is a base64 data URL, return it directly
    if (imageUrl.startsWith("data:")) {
      return imageUrl;
    }
  
    // Attempt to extract the Google Drive file ID
    const match = imageUrl.match(/d\/(.*?)(\/|$)/);
    if (!match || match.length < 2) {
      console.error("Invalid Google Drive link format:", imageUrl);
      return "default-profile.png"; // Fallback to default if format is incorrect
    }
  
    const fileId = match[1];
    return `https://images.weserv.nl/?url=drive.google.com/uc?id=${fileId}`;
  }
  
  useEffect(() => {
    const fetchUserData = async () => {
      if (UserId) {
        try {
          const response = await fetch(`/api/user`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ UserId }), // Assuming UserId is sufficient for fetching data
          });

          if (response.ok) {
            const data = await response.json();

            console.log(data[0].FullName);
            setUserData({
              fullName: data[0].FullName || "",
              gender: data[0].Gender || "",
              age: data[0].Age || "",
              heightCM: data[0].HeightCM || "",
              shoeSizeEU: data[0].FootSizeEU || "",
              shoeSizeCM: data[0].FootSizeCM || "",
            });
            setProfileImage( data[0].ProfileImage || "default-profile.png");
          } else {
            const errorData = await response.json();
            setMessage(errorData.message || "Failed to fetch user data");
          }
        } catch (err) {
          console.error("Error fetching user data:", err);
           setMessage("An unexpected error occurred");
        } finally {
          setIsLoading(false); // Ensure loading state is set to false in both success and error cases
        }
      } else {
        setMessage("UserId is missing in the URL");
        setIsLoading(false);
      }
    };

    fetchUserData();
  }, [UserId]);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  
  const handleNext = async () => {
    // ตรวจสอบฟอร์ม
    if (!userData.fullName) {
      setMessage('เกิดข้อผิดพลาด: กรุณากรอกข้อมูลชื่อ-นามสกุล');
      return;
    }
    if (!userData.gender) {
      setMessage('เกิดข้อผิดพลาด: กรุณากรอกข้อมูลเพศ');
      return;
    }
    if (!userData.age) {
      setMessage('เกิดข้อผิดพลาด: กรุณากรอกข้อมูลอายุ');
      return;
    }
    if (!userData.heightCM) {
      setMessage('เกิดข้อผิดพลาด: กรุณากรอกข้อมูลส่วนสูง');
      return;
    }
    if (!userData.shoeSizeEU) {
      setMessage('เกิดข้อผิดพลาด: กรุณากรอกข้อมูลขนาดเท้า EU');
      return;
    }
    if (!userData.shoeSizeCM) {
      setMessage('เกิดข้อผิดพลาด: กรุณากรอกข้อมูลขนาดเท้า CM');
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
          UserId: UserId,
          ...userData,
          profileImage: uploadedImageUrl, // ส่ง URL ของรูปที่อัปโหลด
        }),
      });

      const data = await res.json();

      if (res.ok) {
        // alert('อัปเดตบัญชีสำเร็จ! กำลังนำทางไปยังหน้า Homepage...');
        setTimeout(() => {
          router.push(`/HomePage?UserId=${UserId}`);
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
      setProfileImage(URL.createObjectURL(file)); // สร้าง URL สำหรับแสดงภาพ
    }
  };

  // if (isLoading) {
  //   return <div>Loading...</div>; // แสดงข้อความโหลด
  // }

  return (
    <div className="container">
        <FontAwesomeIcon
        icon={faArrowLeft}
        className="back-icon"
        onClick={() => window.history.back()}
      />
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

      <button type="button" className="primary-btn" onClick={handleNext} disabled={isLoading} // ปิดการใช้งานปุ่มเมื่อกำลังโหลด
      >
        {isLoading ? "กำลังดำเนินการ..." : "เเก้ไข"} {/* แสดงข้อความตามสถานะการโหลด */}
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



