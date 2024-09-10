import React, { useState } from 'react';
import styles from './footdata.module.css'
import Link from "next/link"

const FootSizeForm = () => {
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

  const tableData = [
    { key: 'A', label: 'ความยาวของเท้า' },
    { key: 'B', label: 'ความยาวของเท้า (ไม่รวมนิ้วเท้า)' },
    { key: 'C', label: 'ความกว้างของกลางเท้า' },
    { key: 'D', label: 'ความยาวระหว่างส้นเท้ากับจมูกเท้า (Apex of 1st MTH)' },
    { key: 'E', label: 'ความยาวระหว่างส้นเท้ากับจมูกเท้า (Apex of 5th MTH)' },
    { key: 'F', label: 'ความกว้างของหน้าเท้า' },
    { key: 'G', label: 'ความกว้างของส้นเท้า' },
    { key: 'I', label: 'ความยาวระหว่างส้นเท้ากับกลางเท้า' },
  ];

  return (
    <main className={styles.main}>
    <Link href="/" >
   <button
   className={styles.backButton}>
     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-left"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
     </button>
   </Link>
   <p className={styles.title}>ข้อมูลเท้าของคุณ</p>
<div className={styles.detailed}>
<Link href="/FootData/footDataInformation" >
   <button
   className={styles.infButton}>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336l24 0 0-64-24 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l48 0c13.3 0 24 10.7 24 24l0 88 8 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-80 0c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg>
</button>
</Link>
<Link href="/FootData/footDataInformation" >
   <p className={styles['detailed-text']}>คำอธิบายเพิ่มเติม</p>
   </Link>
   </div> 
    <form onSubmit={handleSubmit}>
      <div className={styles['foot-size-form']}>
        <div className={styles['foot-size-form__image']}>
          <img src="/description.png" alt="Foot Outline" />
        </div>

        <table className={styles["foot-measurement-table"]}>
      <thead>
        <tr>
          <th></th>
          <th>คำอธิบาย</th>
        </tr>
      </thead>
      <tbody>
        {tableData.map((item) => (
          <tr key={item.key}>
            <td>{item.key}</td>
            <td>{item.label}</td>
          </tr>
        ))}
      </tbody>
    </table>



        <div className={styles['foot-size-form__measurements']}>
          <div className={styles['foot-size-form__measurement']}>
            <label htmlFor="A">A (cm):</label>
            <input type="number" id="A" name="A" value={footMeasurements.A} onChange={handleChange} />
          </div>
          <div className={styles['foot-size-form__measurement']}>
            <label htmlFor="B">B (cm):</label>
            <input type="number" id="B" name="B" value={footMeasurements.B} onChange={handleChange} />
          </div>
          <div className={styles['foot-size-form__measurement']}>
            <label htmlFor="C">C (cm):</label>
            <input type="number" id="C" name="C" value={footMeasurements.C} onChange={handleChange} />
          </div>
          <div className={styles['foot-size-form__measurement']}>
            <label htmlFor="D">D (cm):</label>
            <input type="number" id="D" name="D" value={footMeasurements.D} onChange={handleChange} />
          </div>
          <div className={styles['foot-size-form__measurement']}>
            <label htmlFor="E">E (cm):</label>
            <input type="number" id="E" name="E" value={footMeasurements.E} onChange={handleChange} />
          </div>
          <div className={styles['foot-size-form__measurement']}>
            <label htmlFor="F">F (cm):</label>
            <input type="number" id="F" name="F" value={footMeasurements.F} onChange={handleChange} />
          </div>
          <div className={styles['foot-size-form__measurement']}>
            <label htmlFor="G">G (cm):</label>
            <input type="number" id="G" name="G" value={footMeasurements.G} onChange={handleChange} />
          </div>
          <div className={styles['foot-size-form__measurement']}>
            <label htmlFor="H">H (cm):</label>
            <input type="number" id="H" name="H" value={footMeasurements.H} onChange={handleChange} />
          </div>
          <div className={styles['foot-size-form__measurement']}>
            <label htmlFor="I">I (cm):</label>
            <input type="number" id="I" name="I" value={footMeasurements.I} onChange={handleChange} />
          </div>
        </div>
        <div className={styles['foot-size-form__buttons']}>
        <button type="button" onClick={() => setFootMeasurements({
            A: '',
            B: '',
            C: '',
            D: '',
            E: '',
            F: '',
            G: '',
            H: '',
            I: '',
          })}>แก้ไข</button>
          <button type="submit">ยืนยัน</button>
        
        </div>
      </div>
    </form>
    </main>
  );
};

export default FootSizeForm;



