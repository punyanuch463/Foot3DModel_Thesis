import mysql from 'mysql2/promise';

// สร้างการเชื่อมต่อฐานข้อมูล
const db = mysql.createPool({
  host: 'localhost', // ชื่อโฮสต์ของฐานข้อมูล
  user: 'root', // ชื่อผู้ใช้ของ MySQL
  password: '20032546', // รหัสผ่านของ MySQL
  database: 'foot3dmodel' // ชื่อฐานข้อมูล
});

export default db;
