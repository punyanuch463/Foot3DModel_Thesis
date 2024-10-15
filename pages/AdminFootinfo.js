import React, { useState } from "react";
import { useRouter } from "next/router";
import styles from "styles/footdata.module.css";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faChevronDown, faCheck  } from "@fortawesome/free-solid-svg-icons";

const FootSizeForm = () => {
  const router = useRouter();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showTable, setShowTable] = useState(false);
  const [isEditable, setIsEditable] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [image, setImage] = useState("/description.png"); // สถานะสำหรับรูปภาพ

  const [footMeasurements, setFootMeasurements] = useState({
    A: "12",
    B: "32",
    C: "15",
    D: "16",
    E: "17",
    F: "18",
    G: "19",
    H: "20.5",
    I: "30",
    footType: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFootMeasurements({
      ...footMeasurements,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setShowPopup(true);
  };

  const handleConfirm = () => {
    console.log("Foot measurements:", footMeasurements);
    setShowPopup(false);
    router.push("/HomePage");
  };

  const handleCancel = () => {
    setShowPopup(false);
  };

  const handleNext = () => {
    // เปลี่ยนรูปภาพเมื่อกดปุ่ม
    setImage("/description2.png");
  };

  const handleBack = () => {
    // ย้อนกลับหน้าเดิม
    setImage("/description.png");
  };

  const tableDataDes1 = [
    { key: "A", label: "ความยาวของเท้า" },
    { key: "B", label: "ความยาวของเท้า (ไม่รวมนิ้วเท้า)" },
    { key: "C", label: "ความกว้างของกลางเท้า" },
    { key: "D", label: "ความยาวระหว่างส้นเท้ากับจมูกเท้า (Apex of 1st MTH)" },
    { key: "E", label: "ความยาวระหว่างส้นเท้ากับจมูกเท้า (Apex of 5th MTH)" },
    { key: "F", label: "ความกว้างของหน้าเท้า" },
    { key: "G", label: "ความกว้างของส้นเท้า" },
    { key: "I", label: "ความยาวระหว่างส้นเท้ากับกลางเท้า" },
  ];

  const slides = [
    <div className="container">
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
            />
            <img
              src="/path/to/profile-picture.jpg" // Change to your profile picture path
              alt="Profile"
              className="profile-pic"
            />
          </div>
        </div>
      
      <main className={styles.main}>
        <p className={styles.title}>ข้อมูลเท้าของรหัสxxx</p>

        <div className={styles.detailed}>
          <button
            className={styles.infButton}
            onClick={() => setShowTable(!showTable)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336l24 0 0-64-24 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l48 0c13.3 0 24 10.7 24 24l0 88 8 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-80 0c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
            </svg>
          </button>
          <p className={styles["detailed-text"]}>คำอธิบายเพิ่มเติม</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className={styles["foot-size-form"]}>
            <div className={styles["foot-size-form__image"]}>
              <img src={image} alt="Foot Outline" />

              {/* ปุ่มไปข้างหน้าและย้อนกลับ หลังรูปภาพ */}
              <div className={styles["navigation-buttons"]}>
                <button
                type="button"  
                  className={styles["circle-button"]}
                  onClick={handleBack}
                >
                  ◀ 
                </button>
                <button
                type="button"  
                  className={styles["circle-button"]}
                  onClick={handleNext}
                >
                  ▶ 
                </button>
              </div>
            </div>

            {showTable && (
              <table className={styles["foot-measurement-table"]}>
                <thead>
                  <tr>
                    <th></th>
                    <th>คำอธิบาย</th>
                  </tr>
                </thead>
                <tbody>
                  {tableDataDes1.map((item) => (
                    <tr key={item.key}>
                      <td>{item.key}</td>
                      <td>{item.label}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}

            <div className={styles["foot-size-form__measurements"]}>
              <div className={styles["measurements-grid"]}>
                {Object.keys(footMeasurements)
                  .slice(0, 9)
                  .map((key) => (
                    <div key={key} className={styles["measurement-field"]}>
                      <label htmlFor={key}>{key} (ซม.):</label>
                      <input
                        type="text"
                        id={key}
                        name={key}
                        value={footMeasurements[key]}
                        onChange={handleChange}
                        readOnly={!isEditable}
                      />
                    </div>
                  ))}
                <div className={styles["measurement-field"]}>
                  <label htmlFor="footType">ประเภทอุ้งเท้า:</label>
                  <input
                    type="text"
                    id="footType"
                    name="footType"
                    value={footMeasurements.footType}
                    onChange={handleChange}
                    readOnly={!isEditable}
                  />
                </div>
              </div>
            </div>

            <div className={styles["foot-size-form__buttons"]}>
              <button type="button" onClick={() => setIsEditable(true)}>
                แก้ไข
              </button>
              <button type="submit">บันทึก</button>
            </div>
          </div>
        </form>

        {showPopup && (
          <div className={styles.popup}>
            <div className={styles.popupContent}>
              <p>คุณได้แก้ไขข้อมูลเท้า</p>
              <div className={styles.popupButtons}>
                <button onClick={handleCancel}>ยกเลิก</button>
                <button onClick={handleConfirm}>ยืนยัน</button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>,
  ];

  return (
    <main className={styles.main}>
      <div className={styles.slideshow}>{slides[currentSlide]}</div>
    </main>
  );
};

export default FootSizeForm;