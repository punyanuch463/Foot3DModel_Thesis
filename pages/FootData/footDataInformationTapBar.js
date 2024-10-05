import React, { useState } from 'react';
import styles from './footdata.module.css';
import Link from "next/link";

const FootSizeForm = () => {
  // State สำหรับ currentSlide
  const [currentSlide, setCurrentSlide] = useState(0);

  // State สำหรับเก็บค่าการวัดเท้า
  const [footMeasurements, setFootMeasurements] = useState({
    A: '12',
    B: '32',
    C: '15',
    D: '16',
    E: '17',
    F: '18',
    G: '19',
    H: '20.5',
    I: '30',
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
    // Submit the foot measurements to the server
    console.log('Foot measurements:', footMeasurements);
  };

  const slides = [
    <div key="slide1">
      <h2>Slide 1: ข้อมูลเท้าของคุณ</h2>
      <p>ใส่รายละเอียดเท้า</p>
      <button onClick={() => setCurrentSlide(1)}>ไปยัง Slide ถัดไป</button>
    </div>,
    <div key="slide2">
      <h2>Slide 2: ข้อมูลเพิ่มเติม</h2>
      <p>อธิบายเพิ่มเติมเกี่ยวกับการวัดเท้า</p>
      <button onClick={() => setCurrentSlide(2)}>ไปยัง Slide ถัดไป</button>
      <button onClick={() => setCurrentSlide(0)}>ย้อนกลับไป Slide ก่อนหน้า</button>
    </div>,
    <div key="slide3">
      <h2>Slide 3: ฟอร์มวัดขนาดเท้า</h2>
      <form onSubmit={handleSubmit}>
        <div className={styles['foot-size-form']}>
          <label htmlFor="A">A (cm):</label>
          <input type="number" id="A" name="A" value={footMeasurements.A} onChange={handleChange} />
          <label htmlFor="B">B (cm):</label>
          <input type="number" id="B" name="B" value={footMeasurements.B} onChange={handleChange} />
          {/* เพิ่ม input fields สำหรับการวัดอื่นๆ */}

          <button type="submit">ยืนยัน</button>
          <button type="button" onClick={() => setCurrentSlide(1)}>ย้อนกลับไป Slide ก่อนหน้า</button>
        </div>
      </form>
    </div>,
  ];

  // ฟังก์ชันสร้าง Tap Bar
  const renderTapBar = () => (
    <div className={styles.tapbar}>
      {slides.map((_, index) => (
        <div
          key={index}
          className={`${styles.tap} ${currentSlide === index ? styles.active : ''}`}
          onClick={() => setCurrentSlide(index)}
        >
          {`Slide ${index + 1}`}
        </div>
      ))}
    </div>
  );

  return (
    <main className={styles.main}>
      {renderTapBar()}
      <div className={styles.slideshow}>
        {slides[currentSlide]}
      </div>
    </main>
  );
};

export default FootSizeForm;
